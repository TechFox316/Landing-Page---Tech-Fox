let duvidas = document.querySelectorAll(".perguntas");


function resposta(duvida) {
    var resposta = duvidas[duvida].querySelector(".resposta");
    var titulo = duvidas[duvida].querySelector(".resposta-titulo");
    var podeAparecer = true;
    duvidas[duvida].addEventListener("click", () => {
        if (podeAparecer) {
            resposta.classList.add("on");
            titulo.classList.add("on");
        } else {
            resposta.classList.remove("on");
            titulo.classList.remove("on");
        }
        podeAparecer = !podeAparecer;

    })
}

for (let x = 0; x < duvidas.length; x++) {
    resposta(x);
    
}

/*
function limpaImgem(limpa) {
    if (limpa != rotas.length) {
        rotas[limpa].classList.remove("on")
        rotas[limpa].style.transition = "1s";
    }
}
let rotaAntiga = rotas.length;


function trocaRota(rota) {
    rotas[rota].addEventListener("click", () => { 
        limpaImgem(rotaAntiga);
        if (rota != rotaAntiga) {
            titulo.innerHTML = titulos[rota];
            conteudo.innerHTML = textos[rota];
            rotas[rota].classList.add("on");
            rotaAntiga = rota;
        } else {
            titulo.innerHTML = titulos[5];
            conteudo.innerHTML = textos[5];
            rotaAntiga = rotas.length;
        }
    }) 
}
*/