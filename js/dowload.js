
var frases = ["Seu Download começará em instantes!", "Aguarde...Você está sendo redirecionado"];
function popUp(botao, frase) {
    var span = document.querySelector(".span");
    var botao = document.querySelector(botao);

    botao.addEventListener("click", () => {
        span.innerHTML= frases[frase];
});
}

popUp(".botao-download", 0 );

popUp(".botao-site", 1 );