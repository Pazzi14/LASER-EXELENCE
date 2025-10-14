// O script de rastreamento só deve ser executado se houver consentimento.

function initializeTracking() {
    if (window.cookieConsentStatus === 'accepted') {
        console.log("Tracking iniciado. Cookies de marketing e performance estão ativos.");
        
        // Exemplo: Código de integração do Google Analytics
        /*
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-XXXXX-Y', 'auto');
        ga('send', 'pageview');
        */
    } else {
        console.log("Tracking bloqueado. Consentimento de cookies não aceito.");
    }
}

// 1. Tenta inicializar ao carregar a página
initializeTracking();

// 2. Inicializa novamente se o consentimento for dado (evento disparado em script.js)
document.addEventListener('cookieConsentUpdated', initializeTracking);
