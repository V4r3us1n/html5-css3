var agora = new Date() //Vai pegar a hora atual marcada no sistema(seu pc, pc do cliente, etc), ex: 16:33
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6) {
    console.log("Boa Madrugada!")
} else if (hora < 12) {
    console.log("Bom Dia!")
} else if (hora < 18) {
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}
