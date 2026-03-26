/**
 * ESTUDO DE OBJETOS TIPADOS
 * Substituindo o tipo genérico 'object' por uma estrutura definida (Type Alias).
 */

// 1. Definimos a "forma" (shape) do objeto
type Usuario = {
  nome: string;
  idade: number;
  status?: string; // O '?' indica que o status é opcional
};

// 2. Aplicamos o tipo ao criar o objeto
let dados: Usuario = {
  nome: "Rafael",
  idade: 32,
  status: "Ativo",
};

// Agora o TypeScript "enxerga" o que tem dentro!
console.log(`Nome do usuário: ${dados.nome}`);
console.log(`Tipo no JS: ${typeof dados}`); // Retornará "object"
console.log("Dados completos:", dados);

// ---

// Exemplo de flexibilidade: Criando outro usuário sem o status (graças ao '?')
let segundoUsuario: Usuario = {
  nome: "Ana",
  idade: 28,
};

console.log(segundoUsuario);

/**
 * EXTRA: LISTA DE OBJETOS (ARRAY DE TYPES)
 * Usando o Type Alias 'Usuario' para criar uma lista segura.
 */

const listaUsuarios: Usuario[] = [
  dados,
  segundoUsuario,
  { nome: "Carlos", idade: 40, status: "Inativo" },
];

console.log("Total de usuários cadastrados:", listaUsuarios.length);

// Percorrendo a lista de forma segura
listaUsuarios.forEach((u) => {
  console.log(`Usuário: ${u.nome} | Idade: ${u.idade}`);
});

/**
 * ESTUDO DE OBJETOS: TIPAGEM INLINE
 * Definimos a estrutura do objeto diretamente na declaração da variável.
 */

let dados2: { nome: string; idade: number; status: string } = {
  nome: "Rafael",
  idade: 32,
  status: "Ativo",
};

// 1. Acesso Seguro (Diferente do tipo 'object', aqui o TS conhece as chaves)
console.log(`O usuário ${dados2.nome} está com status: ${dados2.status}`);

// 2. Demonstração de Erro (O TS impediria as linhas abaixo):
// dados2.nome = 123;       // ❌ Erro: O tipo 'number' não pode ser atribuído ao tipo 'string'.
// dados2.sobrenome = "Silva"; // ❌ Erro: A propriedade 'sobrenome' não existe no tipo definido.

// 3. Exibição no Console
console.log("Objeto completo:", dados2);
console.log("Tipo no JavaScript (Runtime):", typeof dados2);
