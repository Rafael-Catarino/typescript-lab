/**
 * Função padrão com um número fixo de parâmetros.
 * Aceita exatamente apenas três argumentos.
 */
function fsum(v1: number, v2: number, v3: number): number {
  return v1 + v2 + v3;
}

/**
 * Função usando Parâmetros Rest (...n).
 * Ela coleta todos os argumentos passados em um array chamado 'n'.
 */
function fsum2(...n: number[]): number {
  // O reduce acumula os valores de forma nativa
  return n.reduce((accumulator, current) => accumulator + current, 0);
}

// Chamada fixa: Precisa obrigatoriamente de 3 argumentos
console.log(fsum(10, 20, 30));

// Chamada flexível: Pode receber qualquer quantidade de argumentos numéricos
console.log(fsum2(10, 20, 30, 40, 100));

/**
 * Exemplo: Uma função de boas-vindas.
 * @param message - Uma mensagem fixa (obrigatório).
 * @param names - Uma lista indefinida de nomes (Rest Parameter).
 */
function greetPeople(message: string, ...names: string[]): void {
  names.forEach((name) => {
    console.log(`${message}, ${name}!`);
  });
}

greetPeople("Olá", "João", "Maria", "Carlos");
