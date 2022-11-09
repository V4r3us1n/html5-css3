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