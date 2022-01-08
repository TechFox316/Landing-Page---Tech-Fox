var textoHabilidades = document.querySelector(".texto")

var tituloHabilidades = document.querySelector(".titulo-habilidades");

var video = document.querySelector("#video-classe");

var videos = ["video/assassino.mp4", "video/mago.mp4", "video/lutador.mp4", "video/atirador.mp4", "video/suporte.mp4", "video/tanque.mp4"]

var textosHabilidades = [
    "Excelente mobilidade e uma grande força para causar dano de forma rápida. <br>Em contrapartida, esses Campeões podem ser mortos com a mesma velocidade em que são capazes de causar dano.",
    "Campeões capazes de lançar feitiços mágicos para atrapalhar os inimigos. Suas defesas não são das melhores.",
    "Personagens capazes de agradar diversos tipos de jogadores. Atuam bem tanto no ataque, como também na defesa. <br> Seus ataques são de curta distância, mas essa exposição ao perigo é compensada com uma boa dose de pontos de resistência.",
    "Causam muito dano sem ficar cara a cara com o perigo. <br>Além da alta capacidade de “machucar” o inimigo, os Atiradores ajudam bastante na hora de detonar com alvos importantes do mapa. Entretanto são frágeis e precisam estar sempre protegidos pelo seu time.",
    "Esses personagens lançam mão de ferramentas de proteção e apoio bastante úteis, de forma que esses Campeões são fundamentais para o sucesso da equipe.",
    "São utilizados mais como ferramenta de controle do que para causar grandes danos nos inimigos, pois têm uma boa base defensiva, ajudando em situações específicas dentro da partida. <br>Em compensação, sua mobilidade é baixa."
];

var titulosHabilidades = ["Assasino", "Mago", "Lutador", "Atirador", "Suporte","Tanque"];

let setas = document.querySelectorAll(".button-habilidades");

let classe = 0;

function mudaClasse(seta, cont) {
    tituloHabilidades.innerHTML = titulosHabilidades[classe];
    textoHabilidades.innerHTML = textosHabilidades[classe];
    video.src = videos[classe];
    setas[seta].addEventListener("click", () => {
        troca(cont);
    })
}

function troca(cont) {
    if (classe + cont < 0) {
        classe = titulosHabilidades.length-1;
    }else if (classe + cont == titulosHabilidades.length) {
        classe = 0;
    }else {
        classe += cont;
    }
    tituloHabilidades.innerHTML = titulosHabilidades[classe];
    textoHabilidades.innerHTML = textosHabilidades[classe];
    video.src = videos[classe];
}

mudaClasse(0, -1)
mudaClasse(1, 1)

setInterval(() => {
    troca(1);
}, 5000);


