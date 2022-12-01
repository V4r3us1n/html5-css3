var idade = 65
if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log("Maior de idade")
}

if (idade < 16) {
    console.log("Não vota")
} else {
    if (idade < 18) {
        console.log("Voto opcional")
    } else {
        if (idade < 65) {
            console.log("Voto obrigatório")
        } else {
            console.log("Voto opcional")
        }
    }
}

if (idade < 16) {
    console.log("Não vota")
} else if (idade < 18) {
    console.log("Voto opcional")
} else if (idade < 65) {
    console.log("Voto obrigatório")
} else {
    console.log("Voto opcional")
}

