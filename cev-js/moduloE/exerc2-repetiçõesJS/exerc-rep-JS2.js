function GerarTabuada() {
    var n = document.getElementById("numero");
    var tabuada = document.querySelector("select#tabuada");

    if (n.value == "") {
        alert("[ERRO!] Insira um número para que possa ser feito uma tabuada!")
    } else {
        n = Number(n.value);
        tabuada.innerHTML = "";

        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option'); //"let" e "var" funcionam da mesma forma!
            item.text = `${n} * ${c} = ${n * c}`;
            item.value = `tabuada${c}`
            tabuada.appendChild(item);
        }
    }
}