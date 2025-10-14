// VARIÁVEL GLOBAL PARA CONSENTIMENTO
window.cookieConsentStatus = localStorage.getItem('cookieConsent');

// 1. Lógica do Cookie Consent (LGPD)
function showCookieBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (window.cookieConsentStatus === null) {
        banner.classList.remove('hidden');
    }
}

function setCookieConsent(status) {
    // 'accepted', 'rejected'
    localStorage.setItem('cookieConsent', status);
    window.cookieConsentStatus = status;
    document.getElementById('cookie-consent-banner').classList.add('hidden');
    
    // Dispara evento para scripts que dependem de consentimento (ex: tracking.js)
    document.dispatchEvent(new Event('cookieConsentUpdated'));
}

// 2. Lógica do Menu Responsivo
function initializeMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainMenu.classList.toggle('is-open');
        });
    }
}

// 3. Inicialização Principal
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o Menu
    initializeMenu();
    
    // Mostra o banner de cookies se não houver consentimento
    showCookieBanner();

    // Adiciona Listeners aos botões do banner
    document.getElementById('accept-cookies')?.addEventListener('click', () => {
        setCookieConsent('accepted');
    });

    document.getElementById('reject-cookies')?.addEventListener('click', () => {
        setCookieConsent('rejected');
    });
});
