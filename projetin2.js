calcRanked(88, 7)

function calcRanked(vit, def){
    return saldoDiff = (vit - def)
}

if (saldoDiff <= 10){
    rank = "Ferro";
}   else if (saldoDiff >= 11 && saldoDiff <= 20){
    rank = "Bronze"
}   else if (saldoDiff >= 21 && saldoDiff <= 50){
    rank = "Prata"
}   else if (saldoDiff >= 51 && saldoDiff <= 80){
    rank = "Ouro"
}   else if (saldoDiff >= 81 && saldoDiff <= 90){
    rank = "Diamante"
}   else if (saldoDiff >= 91 && saldoDiff <= 100){
    rank = "Lendário"
}   else {
    rank = "Imortal"
}

console.log("O Herói tem de saldo " + saldoDiff + " e está no rank " + rank)