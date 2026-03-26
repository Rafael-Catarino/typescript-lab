/**
 * AULA 13: ARROW FUNCTIONS E PROCESSAMENTO DE ARRAYS
 * Diferenças entre declaração comum e Arrow Functions, além de manipulação de listas.
 */

// 1. Hoisting (Içamento)
// Funções declaradas com 'function' podem ser chamadas ANTES de sua criação no código.
test();

function test(): void {
  console.log("Teste: Função comum (sofre hoisting)");
}

// 2. Arrow Functions (Constantes)
// Arrow functions NÃO sofrem hoisting. Se tentar chamar 'test2()' antes da linha abaixo, dará erro.
const test2 = (): void => {
  console.log("Teste: Arrow Function (não sofre hoisting)");
};
test2();

// 3. Arrow Function com Parâmetro Opcional
// Note que ao não passar nada, o console.log imprimirá 'undefined'.
const writeCourse = (course?: string): void => {
  console.log(`Curso: ${course ?? "Nenhum curso informado"}`); // Melhoria: Uso do operador ?? (nullish coalescing)
};

writeCourse("React");
writeCourse(); // Saída amigável: Nenhum curso informado

// 4. Somando Elementos de um Array (Forma Clássica)
const sum = (num: number[]): number => {
  let sumNum: number = 0;
  num.forEach((element) => {
    sumNum += element;
  });
  return sumNum;
};

// 5. O Jeito Moderno: .reduce()
// Em vez de criar uma variável externa (sumNum) e usar forEach, usamos o reduce.
// Ele "reduz" o array a um único valor. É muito mais performático e limpo.
const sumModern = (numbers: number[]): number =>
  numbers.reduce((acc, current) => acc + current, 0);

// 6. Rest Parameters (...args)
// E se você não quiser passar um array [1,2,3], mas sim os números soltos sum(1, 2, 3)?
// O '...' transforma todos os argumentos soltos em um array interno.
const sumAll = (...numbers: number[]): number =>
  numbers.reduce((total, n) => total + n, 0);

// Execução
let numbersList: number[] = [10, 20, 30];

console.log("Soma Clássica:", sum(numbersList));
console.log("Soma Moderna (Reduce):", sumModern(numbersList));
console.log("Soma com Rest Parameters:", sumAll(1, 2, 3, 4, 5)); // Passando valores soltos
