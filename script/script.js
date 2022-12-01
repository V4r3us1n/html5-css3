function mudarImagemCapa() {
    let upload_imagemcapa = "";

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        upload_imagemcapa = reader.result;
        document.querySelector("div.imagem-capa").style.backgroundImage = `url(${upload_imagemcapa})`;
    });
    reader.readAsDataURL(this.files[0]);
}

function mudarImagemPerfil() {
    let imagemPerfil = document.querySelector("img.imagem-perfil");   
    let novaImagemPerfilArq = document.getElementById("imudar-imagem-perfil").file[0];

    const reader = new FileReader();
    reader.onloadend = function() {
        PerformanceEventTiming.src = reader.result;
    }

    if (novaImagemPerfilArq) {
        novaImagemPerfilArq = reader.readAsDataURL(novaImagemPerfilArq);
        imagemPerfil.src = `${novaImagemPerfilArq}`;
    } else {
        preview.src = "";
    }

}

let valoriframe = 1;

let tamanho_tela = window.innerWidth;

function mudarTamanhoIframe1() {
    document.getElementById("iframe-conteudo").style.height = "420px";
    valoriframe = 1;
}

function mudarTamanhoIframe2() {
    if (window.innerWidth >= "1320") {
        document.getElementById("iframe-conteudo").style.height = "800px";
        console.log("a altura do iframe será 800px")
    } else {
        console.log("a altura do iframe será 1100px")
        document.getElementById("iframe-conteudo").style.height = "1100px";
    }
    valoriframe = 2;
}

function mudarTamanhoIframe3() {
    document.getElementById("iframe-conteudo").style.height = "550px";
    valoriframe = 3;
}

function checarResponsividadeIframe() {
    if (valoriframe ==  2) {
        if (tamanho_tela != window.innerWidth) {
            if (window.innerWidth >= "1320") {
                document.getElementById("iframe-conteudo").style.height = "800px";
                console.log("a altura do iframe será 800px")
            } else {
                console.log("a altura do iframe será 1100px")
                document.getElementById("iframe-conteudo").style.height = "1100px";
            }
        }
    }
}

function seguirPerfil() {
    let seguindo = document.getElementById("iseguir");
    let div_seguir = document.getElementById("div-seguir");
    let label_seguir = document.getElementById("label-seguir");

    if (seguindo.checked == true) {
        label_seguir.innerHTML = "Seguindo";
        label_seguir.style.fontSize = "20px";
        label_seguir.style.marginTop = "3px";
        div_seguir.style.margin = "5px 10px";
        
    } else {
        label_seguir.innerHTML = "Seguir";
        label_seguir.style.fontSize = "25px";
        label_seguir.style.marginTop = "0px";
        div_seguir.style.margin = "5px 15px";
    }
}

    /* função para exibir os desafios do menu "Estudos" em outra guia */

function abrirLinksEmOutraGuia() {
    let estadoCheckbox = document.getElementById("abrir-guia");

    let linkDesafio = document.getElementsByClassName("desafio");
    let nDesafios = document.getElementsByClassName("desafio").length;
    console.log(nDesafios)

    if (estadoCheckbox.checked == true) {
        for (i = 0; i <= nDesafios - 1; i++) {
            linkDesafio[i].target = "_blank";
        }
    } else {
        for (i = 0; i <= nDesafios - 1; i++) {
            linkDesafio[i].target = "_self";
        }
    }
}

/* função para exibir os itens do menu "Projetos" em outra guia */

function abrirProjetoEstado() {
    let estadoCheckboxProjeto = document.getElementById("abrir-projeto");
    let nLinksProjetos = document.getElementsByClassName("link-projeto").length;
    console.log(`há ${nLinksProjetos} projetos`)
    let linkProjeto = document.getElementsByClassName("link-projeto");

    if (estadoCheckboxProjeto.checked == true) {
        for (i = 0; i <= nLinksProjetos - 1; i++) {
            linkProjeto[i].target = "_blank";
            console.log(i);
        }
    } else {
        for (i = 0; i <= nLinksProjetos - 1; i++) {
            linkProjeto[i].target = "_self";
            console.log(i);
        }
    }
}