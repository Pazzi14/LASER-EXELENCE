// Este arquivo gerencia animações de rolagem (ex: "fade-in-on-scroll")
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Ativa quando 10% do elemento está visível
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Adicione a classe 'animate-on-scroll' aos elementos que deseja animar no HTML/CSS
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            scrollObserver.observe(element);
        });
    } else {
        // Fallback para navegadores antigos: mostra todos os elementos
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            element.classList.add('animate-visible');
        });
    }
});
// Nota: Os estilos CSS para .animate-on-scroll e .animate-visible devem ser adicionados ao style.css
