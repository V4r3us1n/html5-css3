function parimp(n) {
    if (n % 2 == 0) {
        return "PAR";
    } else {
        return "IMPAR";
    }
}

let res = parimp(12);

console.log(`O número é ${res}!`)

//=================================================================

function soma(n1, n2) {
    return n1 + n2;
}

let s = soma(-3, 8);

console.log(`A soma entre os dois valores inseridos é ${s}!`);

//==================================================================

let v = function(x) {
    return x*2;
}

console.log(v(5));

//====================================================================

function factorial(n) {
    let fat = 1;
    for (let c =n; c > 1; c--) {
        fat *= c;
        console.log(fat)
    }
    return fat;
}

console.log(factorial(5));

//Fatorail de forma recursiva, uma função chamando ela mesma

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(4))

/*
5! (5 fatorail) = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

n! = n * (n - 1)!
Isso não se aplica se "n == 1"

*/