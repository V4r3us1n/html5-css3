function contagemPassos() {
    var inicio = document.getElementById("inicio");
    inicio = Number(inicio.value);
    var fim = document.getElementById("fim");
    fim = Number(fim.value);
    var passos = document.getElementById("passos");
    passos = Number(passos.value);
    var contagem = document.querySelector("p#contagem");

    var contador = [];

    if (inicio == "") { //Se inicio não recebeu valor
        alert("[ERRO!] Por favor insira um número em 'Início' para a conta poder ser realizada!");
    } else {
        if (fim == "") { //Se fim não recebeu valor
            alert("[ERRO!] Por favor insira um número em 'Fim' para a conta poder ser realizada!");
        } else {
            if (passos == "") { //Se passos não recebeu valor
                alert("[ERRO!] Por favor insira um número em 'Passos' para a conta poder ser realizada!");
            } else {
                if (passos < 0) {
                    passos = passos * -1
                }
            }  
        }
    }

    //Contagem Crescente
    if (fim > inicio) {
        if (passos > fim - inicio) {
            alert("[ERRO!] O número de passos tem que ser menor para que possa ser realizado uma contagem!");
        } else {
            for(var c = inicio; c <= fim; c += passos) {
                if (c + passos > fim) {
                    contador += c + "\u{1F928}";
                } else {
                    contador += c + "\u{1F914} ";
                }
            }
        }
    }

    //Contagem Decrescente
    if (fim < inicio) {
        if (passos > inicio - fim) {
            alert("[ERRO!] O número de passos tem que ser menor para que possa ser realizado uma contagem!");
        } else {
            for(var c = inicio; c >= fim; c -= passos) {
                if (c - passos < fim) {
                    contador += c + "\u{1F928}";
                } else {
                    contador += c + "\u{1F914} ";
                }
            }
        }
    }
    alert(`A contagem começará em ${inicio} e terminará em ${fim}, sendo contado a cada ${passos} números!`)
    contagem.innerHTML = contador;
}