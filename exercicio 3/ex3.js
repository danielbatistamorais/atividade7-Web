const login = prompt("Informe o Login:");
const senha = prompt("Informe a Senha:");

if (login == 'aluno' && senha == '123' || login == 'professor' && senha == '456') {
    alert('Sucesso no login');
}
else{
    alert('Falha no login');

}