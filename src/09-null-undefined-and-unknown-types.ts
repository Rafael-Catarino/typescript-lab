/**
 * 1. NULL e UNDEFINED
 * * - Undefined: Significa que uma variável foi declarada, mas ainda não recebeu um valor.
 * - Null: É uma atribuição intencional de "valor vazio".
 */

let vnome: string | null;
// Aqui dizemos que vnome pode ser uma string OU ser explicitamente nula.

vnome = null;
console.log("Null:", vnome);

vnome = "Rafael";
console.log("String:", vnome);

/**
 * 2. ANY (Cuidado!)
 * * O 'any' remove a checagem de tipo do TypeScript.
 * Use apenas quando for estritamente necessário migrar código JS legado.
 */

let vnome2: any;
vnome2 = "Rafael";
vnome2 = 10; // O TS não reclama, mas isso pode causar erros em funções de string.
console.log("Any:", vnome2);

/**
 * 3. UNKNOWN (A alternativa segura ao Any)
 * * O 'unknown' aceita qualquer valor, mas o TypeScript não permite que você
 * use esse valor antes de verificar o que ele realmente é (Type Guard).
 */

let vnome3: unknown;
vnome3 = 10;
vnome3 = "Texto";

// Erro comum:
// let vnum1: number = vnome3;
// O código acima daria erro porque o TS não sabe se vnome3 é realmente um number.

// Maneira correta de usar Unknown (Type Guard):
if (typeof vnome3 === "number") {
  let vnum1: number = vnome3;
  console.log("Unknown validado como number:", vnum1);
}

/**
 * 4. UNDEFINED (O estado natural de variáveis vazias)
 */

// Caso A: Variável declarada sem atribuição
let vTeste: string | undefined;
console.log("Valor inicial (sem atribuir):", vTeste); // Saída: undefined

// Caso B: Atribuição explícita
vTeste = undefined;
console.log("Atribuído como undefined:", vTeste);

/**
 * COMPARATIVO ANALÓGICO:
 * - Undefined: A caixa ainda não foi aberta (nem sabemos o que tem dentro).
 * - Null: A caixa foi aberta e confirmamos que está vazia.
 */

console.log("Null é igual a Undefined?");
console.log(null == undefined); // true  (Valores semelhantes em JavaScript)
console.log(null === undefined); // false (Tipos diferentes: estritamente diferentes)

/**
 * RESUMO RÁPIDO:
 * - null: "Eu sei que este valor está vazio por escolha".
 * - undefined: "Este valor ainda não existe ou não foi definido".
 * - unknown: "Pode ser qualquer coisa, preciso conferir antes de usar".
 */

// Exemplo:

function saudacao(nome?: string) {
  // O ponto de interrogação torna 'nome' string | undefined
  console.log("Olá, ", nome);
}
saudacao(); // Imprime: Olá, undefined
