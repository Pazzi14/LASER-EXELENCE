// sensitive-content.js - Lógica do Modal de Aviso na Galeria

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('content-warning-modal');
    const continueButton = document.getElementById('modal-continue');
    const galeriaSection = document.getElementById('galeria-sensivel');
    const galleryGrid = document.querySelector('.galeria-grid');
    
    // Usa sessionStorage para consentimento temporário (válido durante a sessão)
    const hasConsent = sessionStorage.getItem('contentConsent') === 'true';

    // 1. Mostrar/Esconder a galeria e o modal
    if (galleryGrid) {
        // Mostra a galeria se já houver consentimento
        galleryGrid.style.display = hasConsent ? 'grid' : 'none';
        
        // Esconde o modal se o consentimento já foi dado
        if (modal && hasConsent) {
            modal.classList.add('hidden');
        }
    }

    // 2. Exibir o modal se o consentimento NÃO foi dado E o modal existe
    if (modal && !hasConsent) {
        modal.classList.remove('hidden');
    }
    
    // 3. Ação do botão Continuar
    if (continueButton) {
        continueButton.addEventListener('click', () => {
            sessionStorage.setItem('contentConsent', 'true');
            
            if (modal) {
                modal.classList.add('hidden');
            }
            if (galleryGrid) {
                // Torna a galeria visível após o aceite
                galleryGrid.style.display = 'grid';
            }
        });
    }
    
    // 4. Se a galeria não existe ou é outra página, garante que o modal não apareça
    if (!galeriaSection && modal) {
        modal.classList.add('hidden');
    }
});
