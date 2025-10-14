document.addEventListener('DOMContentLoaded', () => {
    const faqList = document.getElementById('faq-list');

    if (faqList) {
        faqList.querySelectorAll('.faq-item').forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (question && answer) {
                // Adiciona atributos ARIA para acessibilidade
                question.setAttribute('role', 'button');
                question.setAttribute('aria-expanded', 'false');
                question.setAttribute('tabindex', '0'); // Torna o h3 focalizável
                answer.setAttribute('aria-hidden', 'true');

                question.addEventListener('click', () => {
                    const isExpanded = question.getAttribute('aria-expanded') === 'true';
                    
                    // Fecha todos os outros (opcional, mas comum em acordeões)
                    faqList.querySelectorAll('.faq-item').forEach(i => {
                        const q = i.querySelector('.faq-question');
                        const a = i.querySelector('.faq-answer');
                        if (q !== question) {
                            q.setAttribute('aria-expanded', 'false');
                            a.classList.add('hidden');
                            a.setAttribute('aria-hidden', 'true');
                        }
                    });

                    // Alterna o estado do item clicado
                    question.setAttribute('aria-expanded', !isExpanded);
                    answer.classList.toggle('hidden');
                    answer.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
                });
                
                // Suporte para navegação por teclado (Enter/Espaço)
                question.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        question.click();
                    }
                });
            }
        });
    }
});
