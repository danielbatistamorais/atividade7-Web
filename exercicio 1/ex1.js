const nome1 = prompt("Informe o primeiro nome:");
let peso = prompt("Informe seu peso (em Kg):");
let altura = prompt("Informe sua altura (em metros):");

const imc1 = parseFloat(peso) / Math.pow(parseFloat(altura), 2);

const nome2 = prompt("Informe o segundo nome:");
peso = prompt("Informe seu peso (em Kg):");
altura = prompt("Informe sua altura (em metros):");

const imc2 = parseFloat(peso) / Math.pow(parseFloat(altura), 2);

if (imc1 > imc2) {
  console.log(
    `O IMC de ${nome1} (${imc1.toFixed(2)}) é maior que o de ${nome2} (${imc2.toFixed(2)})`
  );
} else {
  console.log(
    `O IMC de ${nome2} (${imc2.toFixed(2)}) é maior que o de ${nome1} (${imc1.toFixed(2)})`
  );
}
