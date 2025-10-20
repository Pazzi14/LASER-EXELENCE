// tracking.js - Placeholder para códigos de rastreamento (Google Analytics, Meta Pixel, etc.)

document.addEventListener('DOMContentLoaded', () => {
    // Verifique o consentimento de cookies antes de carregar scripts de terceiros
    const consent = localStorage.getItem('cookieConsent');
    
    if (consent === 'accepted') {
        console.log("Carregando scripts de rastreamento (Ex: Google Analytics, Meta Pixel).");
        
        // CÓDIGO DO GOOGLE ANALYTICS AQUI (exemplo):
        /*
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-XXXXX-Y', 'auto');
        ga('send', 'pageview');
        */
        
    } else {
        console.log("Rastreamento bloqueado por falta de consentimento de cookies.");
    }
});
