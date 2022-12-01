function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("section#res");
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "homem";
            if (idade < 5) {
                //Bebezinho
                img.setAttribute("src", "baby-boy.png");
            } else if (idade < 10) {
                //Criança
                img.setAttribute("src", "child-boy.png");
            } else if (idade < 16) {
                //Adolescente
                img.setAttribute("src", "young-boy.png");
            } else if (idade < 24) {
                //Jovem
                img.setAttribute("src", "man.png");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "man-half-age.png");
            } else if (idade > 50) {
                //Idoso
                img.setAttribute("src", "old-man.png");
            }
        } else {
            genero = "mulher"
            if (idade < 5) {
                //Bebezinho
                img.setAttribute("src", "baby-girl.png");
            } else if (idade < 11) {
                //Criança
                img.setAttribute("src", "child-girl.png");
            } else if (idade < 16) {
                //Adolescente
                img.setAttribute("src", "young-girl.png");
            } else if (idade < 24) {
                //Jovem
                img.setAttribute("src", "woman.png");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "woman-half-age.png");
            } else if (idade > 50) {
                //Idoso
                img.setAttribute("src", "old.woman.png");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        res.appendChild(img);
    }
}