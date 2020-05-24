var div = document.getElementById('a');
div.addEventListener('wheel', fWheel);

var fontSize = div.style.fontSize;
var value = Number(fontSize.substr(0, fontSize.length-2));

function fWheel(event) {
    var fontSize = event.target.style.fontSize;
    var value = Number(fontSize.substr(0, fontSize.length-2));

    if (event.deltaY < 0) {
        value++;
    } else {
        value--;
    }
    event.target.style.fontSize = `${value}px`;
}