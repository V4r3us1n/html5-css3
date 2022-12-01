/*
let num = [5, 8, 4]

console.log(num[0])
console.log(num[1])
console.log(num[2])

num[3] = 6
num.push(7)

console.log(`Nosso vetor é o ${num}`)
console.log(`Ele possuí ${num.length} elementos!`)
console.log(`Em ordem crescente ele fica assim: ${num.sort()}`)

num.sort()

console.log(num)
num.push(1)
console.log(num)
*/

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*for (let pos = 0; pos < a.length; pos++) {
    console.log(`A posição ${pos} tem valor ${a[pos]}!`)
}
*/

console.log(a.indexOf(7))
if (a.indexOf(0) == -1) {
    console.log("O valor não foi encontrado!")
} else {
    console.log(a.indexOf(0))
}

for (pos in a) {
    console.log(`A posição ${pos} tem valor ${a[pos]}!`)
}