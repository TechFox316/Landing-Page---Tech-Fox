var texto = document.querySelector(".texto")

var video = document.querySelector("#video-classe");

var assasino = document.querySelector("#classe-assasino");

var mago = document.querySelector("#classe-mago");

var lutador = document.querySelector("#classe-lutador");

var atirador = document.querySelector("#classe-atirador");

var suporte = document.querySelector("#classe-suporte");

var tanque = document.querySelector("#classe-tanque");


var escolha = document.querySelector(".inputs")

escolha.addEventListener("click", textoPagina)

function textoPagina() {
    if (assasino.checked) {
        texto.innerHTML = "hello, wordl!";
        video.setAttribute("src", "video/assassino.mp4")
    } else if (mago.checked) {
        texto.innerHTML = "mago";
        video.src = "video/mago.mp4";
    }else if (lutador.checked) {
        texto.innerHTML = "lutador";
        video.src = "video/lutador.mp4";
    }else if (atirador.checked) {
        texto.innerHTML = "atirador";
        video.src = "video/atirador.mp4";
    }else if (suporte.checked) {
        texto.innerHTML = "suporte";
        video.src = "video/suporte.mp4";
    }else if (tanque.checked) {
        texto.innerHTML = "tanque";
        video.src = "video/caçador.mp4";
    }
}

var classes = [assasino, mago, lutador, atirador, suporte, tanque];

var cont = 0;

function troca() {
    classes[cont].checked = true
    textoPagina();
    cont++;
    if(cont == classes.length) {
        cont = 0
    }
}
troca();
setInterval(() => {
    troca();
}, 5000);


