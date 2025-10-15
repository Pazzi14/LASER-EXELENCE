document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        // Adiciona ARIA role para acessibilidade
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Fecha todas as outras respostas abertas
            faqQuestions.forEach(q => {
                if (q !== question && q.getAttribute('aria-expanded') === 'true') {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.add('hidden');
                }
            });

            // Alterna a resposta clicada
            if (isExpanded) {
                answer.classList.add('hidden');
                question.setAttribute('aria-expanded', 'false');
            } else {
                answer.classList.remove('hidden');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
