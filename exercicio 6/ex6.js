function calculaGorgeta(contas) {
  let gorgetas = [contas.length];

  for (let i = 0; i < contas.length; i++) {
    if (contas[i] < 50.0) {
      gorgetas[i] = contas[i] * 0.2;
    } else if (contas[i] < 200.0) {
      gorgetas[i] = contas[i] * 0.15;
    } else {
      gorgetas[i] = contas[i] * 0.1;
    }
  }

  return gorgetas;
}

function mostraContas(restaurantes, contas, gorgetas) {
  console.log("Mostrando contas:");
  for (let i = 0; i < contas.length; i++) {
    console.log(
      `${restaurantes[i]} - [Valor: R$${contas[i]} | Gorgeta: R$${
        gorgetas[i]
      } | Total: R$${contas[i] + gorgetas[i]}]`
    );
  }
}

let restaurantes = [3];
let contas = [3];
let gorgetas = [];

for (let i = 0; i < 3; i++) {
  restaurantes[i] = prompt(`Informe o nome do ${i + 1}° restaurante:`);
  contas[i] = prompt(`Informe a conta paga no restaurante ${restaurantes[i]}:`);
  contas[i] = parseFloat(contas[i]);
}

gorgetas = calculaGorgeta(contas);

mostraContas(restaurantes, contas, gorgetas);
