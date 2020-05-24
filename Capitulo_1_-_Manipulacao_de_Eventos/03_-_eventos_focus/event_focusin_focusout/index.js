var formFocus = document.getElementById('a');

formFocus.addEventListener('focusin', fFocusIn);
formFocus.addEventListener('focusout', fFocusOut);

function fFocusIn(event) {
    event.srcElement.style.color = "blue";
    //event.target.style.color = "blue";
}

function fFocusOut(event) {
    event.srcElement.style.color = "";
    //event.target.style.color = "";
}
/** 
 * Event.srcElement é uma propriedade alias para a propriedade padrão Event.target. 
 * É específica para versões antigas do Microsoft Internet Explorer. 
 * */


