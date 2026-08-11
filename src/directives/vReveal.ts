import type { Directive } from 'vue'

export const vReveal: Directive = {
  mounted(el: HTMLElement, binding) {
    // Initial hidden state
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    
    const delay = typeof binding.value === 'number' 
      ? binding.value 
      : (binding.value?.delay || 0)

    const duration = binding.value?.duration || 700

    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`
    
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    observer.observe(el)
  }
}
