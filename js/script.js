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
        texto.innerHTML = "Excelente mobilidade e uma grande força para causar dano de forma rápida. Em contrapartida, esses Campeões podem ser mortos com a mesma velocidade em que são capazes de causar dano.";
        video.setAttribute("src", "video/assassino.mp4")
    } else if (mago.checked) {
        texto.innerHTML = "Campeões capazes de lançar feitiços mágicos para atrapalhar os inimigos. Suas defesas não são das melhores.";
        video.src = "video/mago.mp4";
    }else if (lutador.checked) {
        texto.innerHTML = "Personagens capazes de agradar diversos tipos de jogadores. Atuam bem tanto no ataque, como também na defesa. Seus ataques são de curta distância, mas essa exposição ao perigo é compensada com uma boa dose de pontos de resistência.";
        video.src = "video/lutador.mp4";
    }else if (atirador.checked) {
        texto.innerHTML = "Causam muito dano sem ficar cara a cara com o perigo. Além da alta capacidade de “machucar” o inimigo, os Atiradores ajudam bastante na hora de detonar com alvos importantes do mapa. Entretanto são frágeis e precisam estar sempre protegidos pelo seu time.";
        video.src = "video/atirador.mp4";
    }else if (suporte.checked) {
        texto.innerHTML = "Esses personagens lançam mão de ferramentas de proteção e apoio bastante úteis, de forma que esses Campeões são fundamentais para o sucesso da equipe.";
        video.src = "video/suporte.mp4";
    }else if (tanque.checked) {
        texto.innerHTML = "São utilizados mais como ferramenta de controle do que para causar grandes danos nos inimigos, pois têm uma boa base defensiva, ajudando em situações específicas dentro da partida. Em compensação, sua mobilidade é baixa.";
        video.src = "video/tanque.mp4";
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
}, 10000);


