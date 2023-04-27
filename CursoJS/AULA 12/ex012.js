var hora = new Date().getHours().toFixed(2).replace('.' , ':')
console.log(`Agora são exatamente ${hora}h`)

if (hora <= 4) {
    console.log(`Boa Madrugada`)
} else if (hora < 12) {
    console.log(`Bom dia`)
} else if (hora < 18) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite`)
}