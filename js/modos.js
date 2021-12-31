var buttonLeft = document.querySelector("#left");

var buttonRight = document.querySelector("#right");

var textoModos = document.querySelector(".texto-modos");

let imagemModos = document.querySelector(".imagens-modos");

let tituloModos = document.querySelector(".titulo-secundário");

var cont = 0;

function trocaModos () {
    if (cont%2 == 1) {
        textoModos.innerHTML = "O MODO DE JOGO MAIS JOGADO - sua rota, mergulhe em épicos confrontos de equipe 5v5 e destrua o Nexus inimigo antes que destruam o seu";
        imagemModos.src = "img/summoners-rift.jpeg";
        tituloModos.innerHTML = " SUMMONERS RIFT"
        tituloModos.style = "position: absolute; left: 34%;";
    } else {
        textoModos.innerHTML = "TODOS ALEATÓRIOS NA ROTA DO MEIO - Em uma ponte congelante, batalhe com sua equipe de Campeões aleatórios avançando em direção ao Nexus inimigo nesse divertido e caótico modo de jogo 5v5.";
        imagemModos.src = "img/aram.jpeg";
        tituloModos.innerHTML = " ARAM"
        tituloModos.style = "position: absolute; left: 45%";
    }
   cont++;
}

buttonLeft.addEventListener("click", trocaModos)
buttonRight.addEventListener("click", trocaModos)
