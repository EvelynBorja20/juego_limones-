let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=20
}
function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}
function dibujarSuelo(){
    ctx.fillStyle="blue"
    ctx.fillRect(0,canvas.height-alturaSuelo,canvas.width,40);
}

function dibujarPersonaje(){
    ctx.fillStyle="yellow"
    ctx.fillRect(canvas.width/2,canvas.height-(4+60),40,60)
}