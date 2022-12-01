function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = "manha.png";
        document.body.style.background = "#D19B74";
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = "tarde.png";
        document.body.style.background = "#EF913D"
    } else {
        //Boa Noite!
        img.src = "noite.png";
        document.body.style.background = "#1A3E57";
    }
}
    

