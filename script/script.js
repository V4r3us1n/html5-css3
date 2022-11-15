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

function mudarTamanhoIframe1() {
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