let duvidas = document.querySelectorAll(".perguntas");


function resposta(duvida) {
    var resposta = duvidas[duvida].querySelector(".resposta");
    var titulo = duvidas[duvida].querySelector(".resposta-titulo");
    duvidas[duvida].addEventListener("click", () => {
        resposta.classList.add("on");
        titulo.classList.add("on");
        //duvidas[duvida].classList.add("on");
    })
}

resposta(0);