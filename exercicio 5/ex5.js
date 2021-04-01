function calcularIdade(n) {
  return 2020 - parseInt(n);
}

const nome = prompt("Informe seu nome:");
const anoNascimento = prompt("Informe seu ano de nascimento:");

if (calcularIdade(anoNascimento) >= 65) {
  alert("Eba, você esta aposentado");
} else {
  alert("Meh... você ainda tem que trabalhar");
}
