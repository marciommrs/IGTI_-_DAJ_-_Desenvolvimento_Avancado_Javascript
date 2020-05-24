
function checkCookies() {
    if (navigator.cookieEnabled) {
        alert('Cookies são permitidos.');
    } else {
        alert('Cookies não são permitidos');
    }
}

//window.addEventListener('load', alert('HTML carregado...'));
//window.addEventListener('unload', alert('saindo...'));