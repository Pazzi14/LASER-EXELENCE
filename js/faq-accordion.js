// faq-accordion.js - Lógica de Acordeão para FAQ

document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const content = header.nextElementSibling;
            
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Fecha todos os outros que estão abertos
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
                    item.querySelector('.faq-content').style.maxHeight = null;
                    item.querySelector('.faq-icon').textContent = '+';
                }
            });

            // Alterna o estado do item clicado
            currentItem.classList.toggle('active');
            header.setAttribute('aria-expanded', !isExpanded);
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                header.querySelector('.faq-icon').textContent = '+';
            } else {
                // Expande o conteúdo baseado na altura real (scrollHeight)
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('.faq-icon').textContent = '−'; // Sinal de menos
            }
        });
    });
});
