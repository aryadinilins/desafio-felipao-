rankeadasVitoria("Ego", "90")

function rankeadasVitoria(username, derrotas) {
  let vitoria = 100 - derrotas;
    console.log(username + " tem " + vitoria + " vitorias!");
}
function derrotas(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = derrotas(50, 40);
    console.log("Sobrando: "+ resultado + " derrotas!")
let saldo = "Ferro" // Se vitórias for menor do que 10 = Ferro 
    console.log("Calculando todas sua Derrotas Ego atinge o saldo de " + saldo + 
 " atingindo assim sua pior marca na Liga dos Heróis")