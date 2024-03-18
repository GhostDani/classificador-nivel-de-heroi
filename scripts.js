
//Desafio Classificador de nível de Herói

//variáveis
let heroName = "Claudinho";
let xpPoints = 6854;
let heroLevel;


//estrutura
if (xpPoints < 1000) {
   heroLevel = "Ferro";
} else if (xpPoints >= 1001 && xpPoints <= 2000) {
    heroLevel = "Bronze";
} else if (xpPoints >= 2001 && xpPoints <= 5000) {
    heroLevel = "Prata";
} else if (xpPoints >= 5001 && xpPoints <= 7000) {
    heroLevel = "Ouro";
} else if (xpPoints >= 7001 && xpPoints <= 8000) {
    heroLevel = "Platina";
} else if (xpPoints >= 8001 && xpPoints <= 9000) {
    heroLevel = "Ascendente";
} else if (xpPoints >= 9001 && xpPoints <= 10000) {
    heroLevel = "Imortal";
} else {
    heroLevel = "Radiante";
}

//saída
console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}!`);