const n = prompt("Informe um número");
let palavras = [n];

for (let i = 0; i < n; i++) {
  palavras[i] = prompt(`Informe a palavra número ${i + 1}:`);
}


console.log('Imprimindo palavras na ordem contrária:');
for (let i = n-1; i >= 0; i--) {
  console.log(palavras[i]);
}
