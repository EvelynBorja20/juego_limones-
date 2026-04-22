let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=10;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);

let limonX=0;
let limonY=0;

let puntaje=0;
let vidas=3;
let velocidadCaida=100;
let intervalo;

function iniciar(){
    reiniciarJuego();
}

function reiniciarJuego(){
    personajeX=canvas.width-ANCHO_PERSONAJE;
    limonY=0;
    puntaje=0;
    vidas=3;

    actualizarPanel();

    clearInterval(intervalo);
    intervalo=setInterval(bajarLimon,velocidadCaida);

    aparecerLimon();
    dibujarTodo();
}

function dibujarTodo(){
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda(){
    if(personajeX>0){
        personajeX-=15;
        dibujarTodo();
    }
}

function moverDerecha(){
    if(personajeX < canvas.width-ANCHO_PERSONAJE){
        personajeX+=15;
        dibujarTodo();
    }
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarLimon(){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function bajarLimon(){
    limonY+=10;
    dibujarTodo();
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado(){
    if(
        limonX + ANCHO_LIMON > personajeX &&
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY + ALTURA_LIMON > personajeY &&
        limonY < personajeY + ALTURA_PERSONAJE
    ){
        puntaje++;
        actualizarPanel();
        aparecerLimon();
    }
}

function detectarPiso(){
    if(limonY + ALTURA_LIMON >= canvas.height - ALTURA_SUELO){
        vidas--;
        actualizarPanel();
        aparecerLimon();

        if(vidas<=0){
            clearInterval(intervalo);
            mostrarGameOver();
        }
    }
}

function aparecerLimon(){
    limonX=Math.random()*(canvas.width-ANCHO_LIMON);
    limonY=0;
}

function actualizarPanel(){
    document.getElementById("txtPuntaje").innerText=puntaje;
    document.getElementById("txtVidas").innerText=vidas;
}

function mostrarGameOver(){
    ctx.fillStyle="red";
    ctx.font="30px Arial";
    ctx.fillText("GAME OVER", canvas.width/2-100, canvas.height/2);
}