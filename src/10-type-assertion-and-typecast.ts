/**
 * 1. DEFINIÇÕES INICIAIS
 */
let nvalor: number;
let svalor: string;
let uvalor: unknown;

/**
 * 2. TYPECAST (Conversão Real)
 * Aqui o JavaScript realmente transforma o dado de String para Number em tempo de execução.
 */
svalor = "20";
nvalor = Number.parseInt(svalor);

console.log("--- Typecast (parseInt) ---");
console.log(typeof nvalor); // Saída: number
console.log(nvalor); // Saída: 20

nvalor = 10;
svalor = nvalor.toString();

console.log("--- Typecast (toString) ---");
console.log(typeof svalor); // String
console.log(svalor); // Saída: 10

/**
 * 3. TYPE ASSERTION (Afirmação de Tipo)
 * Você diz ao TS: "Eu sei o que estou fazendo, trate isso como X".
 * Isso NÃO muda o valor real, apenas engana o compilador.
 */

// Double Assertion: Forçando uma string a ser lida como number (Perigoso!)
// O TS normalmente não deixa converter string direto para number, então usamos <unknown> no meio.
nvalor = <number>(<unknown>svalor);

console.log("--- Assertion (Forçada) ---");
console.log(typeof nvalor); // CUIDADO: Vai imprimir 'string' no console, apesar do tipo ser 'number' no VS Code!
console.log(nvalor); // Saída: "20"

/**
 * 4. TRABALHANDO COM UNKNOWN
 * O tipo 'unknown' exige que você afirme o tipo ou valide antes de atribuir.
 */
uvalor = 10;

// Assertion simples (Sintaxe de <tipo>)
nvalor = <number>uvalor;

// Assertion com a sintaxe 'as' (Mais comum em React/JSX)
svalor = uvalor as string;

/**
 * 5. O PERIGO DAS ASSERTIONS INCORRETAS
 */
svalor = <string>uvalor; // uvalor é 10 (number), mas afirmamos que é string.
svalor += 10; // O JS vai concatenar (10 + 10 = "1010") em vez de somar!

console.log("--- Resultados Finais ---");
console.log("uvalor:", typeof uvalor, uvalor); // number 10
console.log("nvalor:", typeof nvalor, nvalor); // number 10
console.log("svalor:", typeof svalor, svalor); // string "1010" (Devido à concatenação)

/**
 * 6. CONCLUSÃO DIDÁTICA PARA O GITHUB
 * * - Use TYPECAST (Number(), .toString(), parseInt()) quando o valor REAL
 * precisa mudar na memória do computador.
 * * - Use TYPE ASSERTION (as Tipo, <Tipo>) quando você tem certeza do tipo,
 * mas o TypeScript não consegue deduzir sozinho (ex: dados de APIs externas).
 * * - NUNCA use Assertion para "mentir" para o compilador, pois o JavaScript
 * em tempo de execução ignorará a tipagem e poderá causar bugs (como o "1010" acima).
 */
