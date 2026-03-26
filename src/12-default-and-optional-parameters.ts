/**
 * AULA 12: PARÂMETROS PADRÃO E OPCIONAIS
 * Explorando a flexibilidade nas chamadas de funções no TypeScript.
 */

// 1. Parâmetros com Valor Padrão (Default Parameters)
// Ao definir '= 0', tornamos os parâmetros opcionais na chamada.
// Se não passarmos nada, o TS assume o valor 0 em vez de 'undefined'.
function sum(num1: number = 0, num2: number = 0): number {
  return num1 + num2;
}

let n_res: number = sum(10, 5); // Passando ambos: 15
console.log("Soma completa:", n_res);

n_res = sum(5); // Passando apenas o primeiro: 5 + 0 = 5
console.log("Soma com um parâmetro:", n_res);

n_res = sum(); // Passando nada: 0 + 0 = 0
console.log("Soma sem parâmetros:", n_res);

// 2. Parâmetros Opcionais (Optional Parameters)
// O '?' indica que 'name' pode ser string ou undefined.
// IMPORTANTE: Parâmetros opcionais devem sempre vir por último na lista.
function newUser(user: string, pass: string, name?: string): void {
  // Criando um objeto com Shorthand Notation (o TS entende que a chave tem o mesmo nome da variável)
  let dados = { user, pass, name };
  console.log("Dados do novo usuário:", dados);

  // Exemplo de verificação interna para evitar 'undefined' no console:
  if (name) {
    console.log(`Nome fornecido: ${name}`);
  }
}

newUser("Rafael", "123456"); // Saída: { user: 'Rafael', pass: '123456', name: undefined }
newUser("Rafael", "123456", "Rafael Catarino"); // Saída com o nome completo

// 3. Lógica com Parâmetros Opcionais
// Usamos o 'if' para tratar o caso em que a saudação não é enviada.
function saudar(nome: string, saudacao?: string): string {
  if (saudacao) {
    return `${saudacao}, ${nome}!`;
  }
  return `Olá, ${nome}!`;
}

console.log(saudar("Rafael")); // Saída: Olá, Rafael!
console.log(saudar("Rafael", "Bom dia")); // Saída: Bom dia, Rafael!
