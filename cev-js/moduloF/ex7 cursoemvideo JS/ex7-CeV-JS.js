let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //Se o valor de "n" não está na lista
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert("[ERRO!] Valor inválido ou já existente na lista!");
    }
    num.value = '';
    num.focus(); //Sempre que você clicar para enviar autoaticamente o número dentro da caixa de seleção será apagado!
}

function finalizar() {
    if (valores.length == 0) {
        alert("[ERRO!] Adicione valores antes de finalizar!")
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }  
        }

        media = soma / tot;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números inseridos!</p>`
        res.innerHTML += `<p>O maior valor inserido foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor inserido foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores inseridos é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores inseridos é ${media}.</p>`
    }
}