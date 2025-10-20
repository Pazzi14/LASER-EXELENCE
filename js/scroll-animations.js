// scroll-animations.js - Lógica para Animações de Rolagem

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento visível
    };

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target); // Para a animação rodar apenas uma vez
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Seleciona todos os elementos com a classe de animação
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
