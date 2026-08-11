# Stage 1: Build stage with Node 20
FROM node:20-alpine AS build-stage

WORKDIR /app

# Install dependencies first (layer caching)
COPY package*.json ./
RUN npm ci

# Copy source files and build for production
COPY . .
RUN npm run build

# Stage 2: Production stage with Nginx Alpine
FROM nginx:alpine AS production-stage

# Copy compiled static assets from build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom Nginx SPA configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port 80
EXPOSE 80

# Start Nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]
