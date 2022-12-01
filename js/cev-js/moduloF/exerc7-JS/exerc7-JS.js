var cont = 0;
var lista = [];

function EnviarNumero() {
    let num = document.getElementById("num");
    num = num.value;

    if ((num < 1) || (num > 100)) {
        alert("[ERRO!] Por favor insira um número entre 1 e 100!");
    } else {
        if (num == "") {
            alert("[ERRO!] Por favor insira um número entre 1 e 100!");
        } else {
            let repeat = 0;

            for (c = 0; c < lista.length; c++) {
                if (num == lista[c]) {
                    repeat = 1;
                }
            }

            if (repeat == 1){
                alert("[ERRO!] O número já foi inserido!")
            } else {
                lista [cont] = num;
                let item = document.createElement("option");
                item.text = `O número ${num} foi adicionado!`;
                item.value = lista[cont];
                tabela.appendChild(item);
                cont ++;
            }  
        }
    }    
}

function Finalizar() {
    let tamanho = lista.length;
    info1 = `Foram inseridos um total de ${tamanho} números!`;
    let maior = lista[0];
    for (c = 1; c < lista.length; c++) {
        if (lista[c] > maior) {
            maior = lista[c];
        }
    }
    info2 = `O maior número inserido é ${maior}!`;

    let menor = lista[0];
    for (c = 1; c < lista.length; c++) {
        if (lista[c] < menor) {
            menor = lista[c];
        }
    }
    info3 = `O menor número inserido é ${menor}!`;

    let soma = 0;
    for (c = 0; c < lista.length; c++) {
        soma += Number(lista[c]);
    }
    info4 = `A soma entre os números digitados é ${soma}!`;

    let media = soma / lista.length
    info5 = `A média entre os números digitados é ${media}!`;

    let res = document.querySelector("#resultado");
    
    res.innerHTML = `<p>Foram inseridos um total de ${tamanho} números!</p>
    <p>O maior número inserido é ${maior}!</p>
    <p>O menor número inserido é ${menor}!</p>
    <p>A soma entre os números digitados é ${soma}!</p>
    <p>A média entre os números digitados é ${media}!</p>`;
}