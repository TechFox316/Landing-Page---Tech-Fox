var frases = ["Seu Download começará em instantes!", "Aguarde... Você está sendo redirecionado!"];
function popUp(botao, frase) {
    var span = document.querySelector(".span");
    var botao = document.querySelector(botao);

    botao.addEventListener("click", () => {
        span.innerHTML= frases[frase];
});
}

function redirecionarParaTF() {
    setTimeout(() => {
        window.open("/techfox.html", "_blank");
    }, 1000);
    
}

popUp(".botao-download", 0 );

popUp(".botao-site", 1 );