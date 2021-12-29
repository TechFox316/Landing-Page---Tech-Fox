var rotas = document.querySelectorAll(".rotas-troca");

var titulo = document.querySelector(".rotas-titulo")

var conteudo = document.querySelector(".rotas-texto");

var escolha_rota = document.querySelector("#rotas-input");

function conteudoRota() {
    if (rotas[0].checked) {
        titulo.innerHTML = "Rotas"
        conteudo.innerHTML = "Existem cinco posições que integram a composição de equipe recomendada para o jogo. Cada rota combina melhor com certos tipos de Campeões e funções, então experimente todas elas ou foque na rota que mais lhe agradar.";
    } else if (rotas[1].checked) {
        titulo.innerHTML = "Rota Superior";
        conteudo.innerHTML = " Campeões durões e solitários da equipe. O trabalho deles é proteger a própria rota e focar seu dano nos membros mais fortes da equipe inimiga.";
    }else if (rotas[2].checked) {
        titulo.innerHTML = "Selva";
        conteudo.innerHTML = "Caçadores vivem pela caça. Espreitando entre as rotas, eles ficam atentos aos monstros da selva e avançam no momento que o oponente abaixa a guarda.";
    }else if (rotas[3].checked) {
        titulo.innerHTML = "Rota do Meio";
        conteudo.innerHTML = "Campeões que possuem alto dano explosivo e podem fazer de tudo, sozinhos ou em equipe. Para eles, o combate é uma dança perigosa, e nela devem sempre buscar oportunidades para superar seu oponente.";
    }else if (rotas[4].checked) {
        titulo.innerHTML = "Rota Inferior";
        conteudo.innerHTML = " Campeões dessa rota são a fonte preciosa de dano de cada equipe e precisam ser protegidos no início de jogo até que acumulem ouro e experiência o suficiente para levar toda a equipe até a vitória.";
    }else if (rotas[5].checked) {
        titulo.innerHTML = "Suporte";
        conteudo.innerHTML = "Campeões Suporte são os guardiões da equipe. Eles ajudam a manter seus aliados vivos e focam primordialmente em armar abates, protegendo seu parceiro na rota inferior até que fique mais forte.";
    }
}

escolha_rota.addEventListener("click", conteudoRota);
