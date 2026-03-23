/**
 * ESTUDO DE TIPAGEM EM ARRAYS E VARIÁVEIS
 */

// 1. Inferência de Tipos (Tipo Implícito)
// O TS define o tipo com base nos valores iniciais: (string | number | boolean)[]
let listaMista = ["JavaScript", "TypeScript", "C++", 100, true];
listaMista.push("Arduino");
listaMista.push(2); // Funciona porque 'number' faz parte da inferência inicial
listaMista.push(false);

// -------------------------------------------------------------------------------

// 2. Tipagem Explícita (Recomendado para clareza)
// Aqui garantimos que o array aceite APENAS strings
let cursos: string[] = ["JavaScript", "TypeScript", "C++"];
let valores: number[] = [10, 100, 2026];

cursos.push("Arduino");
// cursos.push(10); // Erro de compilação: O tipo 'number' não é atribuível ao tipo 'string'

// --------------------------------------------------------------------------------

// 3. Union Types (União de Tipos)
// Usado quando a variável pode ter mais de um tipo definido, mas não "qualquer coisa"
let identificador: string | number;
identificador = "Rafael";
identificador = 2026;

// ---------------------------------------------------------------------------------

// 4. O Tipo 'any' (Use com moderação!)
// Basicamente desativa a checagem de tipos. Útil em migrações de JS para TS.
let dadoFlexivel: any;
dadoFlexivel = "Texto";
dadoFlexivel = 10;
dadoFlexivel = { objeto: true };

console.log({ listaMista, cursos, valores, identificador });
