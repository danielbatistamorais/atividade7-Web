const nome = prompt("Informe o seu nome:");
let peso = prompt("Informe seu peso (em Kg):");
let altura = prompt("Informe sua altura (em metros):");

const imc = parseFloat(peso) / Math.pow(parseFloat(altura), 2);

if (imc < 17) {
  console.log(`${nome}, seu IMC é de ${imc.toFixed(2)}. Você está muito abaixo do peso :(`);
} else if (imc < 18.5) {
    console.log(`${nome}, seu IMC é de ${imc.toFixed(2)}. Você está abaixo do peso :|`);
} else if (imc < 25) {
    console.log(`${nome}, seu IMC é de ${imc.toFixed(2)}. Você está com um peso normal :)`);
} else if (imc < 30) {
    console.log(`${nome}, seu IMC é de ${imc.toFixed(2)}. Você está acima do peso :|`);
} else if (imc < 35) {
    console.log(`${nome}, seu IMC é de ${imc.toFixed(2)}. Você tem obesidade :(`);
} else if (imc < 40) {
    console.log(`${nome}, seu IMC é de ${imc.toFixed(2)}. Você tem obesidade severa...`);
} else {
    console.log(`${nome}, seu IMC é de ${imc.toFixed(2)}. Você tem obesidade mórbida :O`);
}
