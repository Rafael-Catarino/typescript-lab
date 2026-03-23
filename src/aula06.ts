/**
 * ESTUDO DE TUPLAS (TUPLES)
 * Tuplas permitem definir tipos específicos para cada posição de um array.
 */

// --- Exemplo 01: Tupla Comum ---
// Define: [0] string, [1] number, [2] boolean
let kitSobrevivencia: [string, number, boolean] = ["corda", 10, true];

// Curiosidade: O TS permite push em tuplas comuns, mas isso quebra a ideia de "tamanho fixo".
kitSobrevivencia.push("kit médico", 5, true);

console.log("Tupla Comum:", kitSobrevivencia);

// --- Exemplo 02: Tupla Imutável (Readonly) ---
// O modificador 'readonly' impede qualquer alteração após a criação.
let configuracao: readonly [string, number, boolean] = ["corda", 10, true];

// As linhas abaixo gerariam erros de compilação (remova o comentário para testar):
// configuracao.push("item novo"); // Erro: Property 'push' does not exist on type 'readonly [...]'
// configuracao[0] = "corrente";   // Erro: Index signature in type 'readonly' only permits reading.

console.log("Tupla Readonly (Segura):", configuracao);
