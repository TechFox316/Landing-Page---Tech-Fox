let rotas = document.querySelectorAll(".rotas-troca");

let limpar = document.querySelector("#rotas")

let titulos = ["Rota Superior", "Rota Inferior", "Rota do Meio","Suporte", "Selva", "Rotas"]

let textos = [
    "Campeões durões e solitários da equipe. O trabalho deles é proteger a própria rota e focar seu dano nos membros mais fortes da equipe inimiga.",
    "Campeões dessa rota são a fonte preciosa de dano de cada equipe e precisam ser protegidos no início de jogo até que acumulem ouro e experiência o suficiente para levar toda a equipe até a vitória.",
    "Campeões que possuem alto dano explosivo e podem fazer de tudo, sozinhos ou em equipe. Para eles, o combate é uma dança perigosa, e nela devem sempre buscar oportunidades para superar seu oponente.",
    "Campeões Suporte são os guardiões da equipe. Eles ajudam a manter seus aliados vivos e focam primordialmente em armar abates, protegendo seu parceiro na rota inferior até que fique mais forte.",
    "Caçadores vivem pela caça. Espreitando entre as rotas, eles ficam atentos aos monstros da selva e avançam no momento que o oponente abaixa a guarda.",
    "Existem cinco posições que integram a composição de equipe recomendada para o jogo. Cada rota combina melhor com certos tipos de Campeões e funções, então experimente todas elas ou foque na rota que mais lhe agradar."
]

var titulo = document.querySelector(".rotas-titulo")

var conteudo = document.querySelector(".rotas-texto");

function limpaImgem(limpa) {
    if (limpa != rotas.length) {
        rotas[limpa].classList.remove("on")
        rotas[limpa].style.transition = "1s";
    }
}
let rotaAntiga = rotas.length;

let pode = false;

function trocaRota(rota) {
    rotas[rota].addEventListener("click", () => { 
        limpaImgem(rotaAntiga);
        if (rota != rotaAntiga) {
            titulo.innerHTML = titulos[rota];
            conteudo.innerHTML = textos[rota];
            rotas[rota].classList.toggle("on");
            rotaAntiga = rota;
        } else {
            titulo.innerHTML = titulos[5];
            conteudo.innerHTML = textos[5];
        }
    })
    
}
trocaRota(0);
trocaRota(1);
trocaRota(2);
trocaRota(3);
trocaRota(4);

/*
function conteudoRota() {
    if (rotas[0].checked) {
        titulo.innerHTML = "Rotas"
        conteudo.innerHTML = "Existem cinco posições que integram a composição de equipe recomendada para o jogo. Cada rota combina melhor com certos tipos de Campeões e funções, então experimente todas elas ou foque na rota que mais lhe agradar.";
*/
