function mudarImagem() {
    let imagemPerfil = document.querySelector("img.imagem");
    let novaImagemPerfilFile = document.querySelector("input[type=file]#arquivo-novo");

    console.log(novaImagemPerfilFile).file;

    novaImagemPerfilFile = novaImagemPerfilFile.value;

    imagemPerfil.src = `${novaImagemPerfilFile}`;


    /*
    let quebraURL = novaImagemPerfilFile.split('fakepath\\');

    console.log(quebraURL[0]);
    console.log(quebraURL[1]);

    novaImagemPerfilFile = `${quebraURL[0]}${quebraURL[1]}`;

    console.log(novaImagemPerfilFile);
    */

    /*
    console.log(novaImagemPerfilFile.src);

    let reader = new FileReader();

    reader.onloadend = function () {
        imagemPerfil.src = reader.result;
    }

    console.log(imagemPerfil.src);

    if (novaImagemPerfilFile) {
        reader.readAsDataURL(novaImagemPerfilFile);
    } else {
        imagemPerfil.src = "";
    }
    */



}