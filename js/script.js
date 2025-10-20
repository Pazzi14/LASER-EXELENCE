// script.js - Lógica Principal (Menu e Cookies)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Menu Hamburger (Mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainMenu.classList.toggle('visible');
        });
    }

    // 2. Lógica do Cookie Consent Banner
    const cookieBanner = document.getElementById('cookie-consent-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    function checkCookieConsent() {
        if (!localStorage.getItem('cookieConsent')) {
            if (cookieBanner) {
                // Adiciona a classe 'visible' ou remove 'hidden' para exibir
                cookieBanner.classList.remove('hidden'); 
            }
        }
    }

    function setCookieConsent(consent) {
        localStorage.setItem('cookieConsent', consent ? 'accepted' : 'rejected');
        if (cookieBanner) {
            cookieBanner.classList.add('hidden');
        }
        // Aciona o carregamento dos scripts de rastreamento se aceito
        if (consent) {
            // Se 'tracking.js' foi deferido no HTML, esta linha pode ser um console log ou um evento.
            console.log("Cookies aceitos. Os scripts de rastreamento em tracking.js serão executados.");
        }
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', () => setCookieConsent(true));
    }

    if (rejectButton) {
        rejectButton.addEventListener('click', () => setCookieConsent(false));
    }

    checkCookieConsent();
});
