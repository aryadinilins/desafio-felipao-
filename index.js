let nome = "Ego"
let vilao = "Altruísmo"
let xp = "Platina"
let xpv = "Imortal"
console.log("O Herói de nome " + nome + " está no nível de " + xp );
switch (xp) {
    case "Ouro":
      console.log("entre 6001 e 7.000");
      break;
    case "Platina":
      console.log("entre 7001 e 8.000");
      break;
    case "Imortal":
      console.log("entre 9001 e 10.000");
      break;
}
console.log("Portanto se o Herói " + nome + " vencer o " + vilao + " nessa batalha egoista ele vai subir pra " + xpv);
switch (xpv) {
    case "Ouro":
      console.log("entre 6001 e 7.000");
      break;
    case "Platina":
      console.log("entre 7001 e 8.000");
      break;
    case "Imortal":
      console.log("entre 9001 e 10.000");
      break;
}