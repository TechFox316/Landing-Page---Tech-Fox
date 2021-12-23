var texto = document.querySelector(".texto")

var assasino = document.querySelector("#classe-assasino");

var mago = document.querySelector("#classe-mago");

var lutador = document.querySelector("#classe-lutador");

var atirador = document.querySelector("#classe-atirador");

var suporte = document.querySelector("#classe-suporte");

var tanque = document.querySelector("#classe-tanque");


var escolha = document.querySelector(".inputs")

function textoPagina() {
    if (assasino.checked) {
        texto.innerHTML = "hello, wordl!";
    } else if (mago.checked) {
        texto.innerHTML = "mago";
    }else if (lutador.checked) {
        texto.innerHTML = "lutador";
    }else if (atirador.checked) {
        texto.innerHTML = "atirador";
    }else if (suporte.checked) {
        texto.innerHTML = "suporte";
    }else if (tanque.checked) {
        texto.innerHTML = "tanque";
    }
}

escolha.addEventListener("click", textoPagina())

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
setInterval(() => {
    troca();
}, 5000);



