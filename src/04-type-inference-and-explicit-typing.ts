// Declaração de variável com inferência de tipo
let nome = "Rafael";
// O TypeScript entende automaticamente que 'nome' é do tipo string

let valor = 0;
// O TypeScript infere que 'valor' é do tipo number
// number inclui: int, float, binário, hexadecimal

// nome = 0;
// ❌ Erro: não pode atribuir number a uma variável string

// valor = "rafaels";
// ❌ Erro: não pode atribuir string a uma variável number

// Reatribuição com tipos corretos
nome = "Catarino";
valor = 100;

console.log(nome);
// Exibe: Catarino

console.log(valor);
// Exibe: 100

// Declaração com tipagem explícita
let novoNome: string;
// Aqui você está FORÇANDO o tipo string

let novoValor: number;
// Aqui você está FORÇANDO o tipo number

// novoNome = 0;
// ❌ Erro: tipo number não pode ser atribuído a string

// novoValor = "catarino";
// ❌ Erro: tipo string não pode ser atribuído a number

// Atribuições corretas
novoNome = "Rafael";
novoValor = 200;

console.log(novoNome);
// Exibe: Rafael

console.log(novoValor);
// Exibe: 200
