window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("cabecalho").style.marginTop = "-3%";
        document.getElementById("menuLogo").style.width = "18vw";
        document.getElementById("menuLogo").style.paddingLeft = "2.5vh";
    } else {
        document.getElementById("cabecalho").style.marginTop = "1%";
        document.getElementById("menuLogo").style.width = "20vw";
        document.getElementById("menuLogo").style.paddingLeft = "0vh";

    }
}
