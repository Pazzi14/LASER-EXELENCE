document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('content-warning-modal');
    const continueButton = document.getElementById('modal-continue');
    const gallerySection = document.getElementById('galeria-sensivel');
    const hasSeenWarning = localStorage.getItem('seenSensitiveWarning');

    // Função para mostrar a galeria
    function showGallery() {
        if (gallerySection) {
            gallerySection.style.display = 'block';
        }
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Função para mostrar o modal
    function showModal() {
        if (gallerySection) {
            gallerySection.style.display = 'none'; // Esconde a galeria por padrão
        }
        if (modal) {
            modal.style.display = 'flex'; // Usa flex para centralizar o modal
        }
    }

    // Se o modal e a galeria existirem nesta página
    if (modal && gallerySection) {
        // Se o usuário já viu o aviso, mostra a galeria diretamente
        if (hasSeenWarning === 'true') {
            showGallery();
        } else {
            // Caso contrário, mostra o aviso
            showModal();
        }

        // Adiciona listener ao botão de continuar
        continueButton.addEventListener('click', () => {
            localStorage.setItem('seenSensitiveWarning', 'true');
            showGallery();
        });
    }
});
