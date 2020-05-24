window.addEventListener('resize', fResize);

var x = 0;

function fResize() {
    var txt = x += 1;
    document. getElementById('teste').innerHTML = txt;
}