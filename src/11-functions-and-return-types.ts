/**
 * AULA 11: FUNÇÕES NO TYPESCRIPT
 * Foco em tipagem de parâmetros e tipos de retorno (void, number, string).
 */

// 1. Função Básica (Inferência de Tipo)
// O TS infere que esta função retorna 'void' porque não há um 'return'.
function test() {
  console.log("Teste 1: Função simples");
}
test();

// 2. Retorno Explícito 'void'
// 'void' declara explicitamente que a função não retorna nenhum valor.
function test2(): void {
  console.log("Teste 2: Retorno void explícito");
}
test2();

// 3. Parâmetros Tipados
// Isso garante que a função aceite APENAS strings, evitando bugs antes da execução.
function logar(user: string, pass: string): void {
  console.log(`User.....: ${user}`);
  console.log(`Password.: ${pass}`);
}
logar("Rafael", "123456");

// 4. Função com Tipo de Retorno
// O ': number' após o parêntese garante que a função DEVE retornar um número.
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

const n_res: number = sum(10, 5);
const s_res: string = sum(2, 8).toString(); // Convertendo o retorno numérico para string
console.log(`Resultado Soma (number): ${n_res}`);
console.log(`Resultado Soma (string): ${s_res}`);
