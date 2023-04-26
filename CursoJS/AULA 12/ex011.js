var idade = 13
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Você NÃO pode votar`)
} else {
    if (idade < 18 || idade > 70) {
        var voto = "OPCIONAL"
    } else {
        var voto = "OBRIGATÓRIO"
    }
    console.log(`Seu voto é ${voto}`)
}
