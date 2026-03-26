/**
 * AULA: ENUMS NO TYPESCRIPT
 * O Enum é um recurso exclusivo do TS que gera um objeto real no JavaScript final.
 */

// 1. Enum Numérico (Padrão)
// Se você não definir valores, o primeiro é 0, o segundo é 1, etc.
enum DiasDaSemana {
  Domingo = 1, // Definimos o início como 1
  Segunda, // Automaticamente será 2
  Terca, // 3
  Quarta, // 4
  Quinta, // 5
  Sexta, // 6
  Sabado, // 7
}

console.log("Valor do domingo:", DiasDaSemana.Domingo); // Saída: 1
console.log("Nome do dia 4:", DiasDaSemana[4]); // Saída: "Quarta" (Mapeamento Reverso)

// 1.1. Enum Numérico com Mapeamento Reverso
// O TS permite acessar o NOME pelo VALOR e o VALOR pelo NOME.
enum Dias {
  domingo = 0,
  segunda = 1,
  terca = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,
}

console.log(Dias.domingo); // Saída: 0 (Acesso por propriedade)
console.log(Dias["quarta"]); // Saída: 3 (Acesso por chave string)
console.log(Dias[2]); // Saída: "terca" (Acesso reverso pelo índice)

// Integração com Objeto Nativo Date
const d = new Date();
// d.getDay() retorna o número do dia (0-6). O Enum traduz isso para o nome!
console.log(`Hoje é: ${Dias[d.getDay()]}`);

// -------------------------------------------------------------------------------

// 2. Enum de Strings (Valores Literais)
// Útil para códigos de cores, status de banco de dados ou rotas.
// Nota: Enums de string NÃO possuem mapeamento reverso automático.
enum Cores {
  branco = "#fff",
  preto = "#000",
  vermelho = "#f00",
  verde = "#0f0",
  azul = "#00f",
}
console.log(Cores.vermelho); // Saída: "#f00"

// 2.1. Enum de String (Muito comum em APIs e Status)
// Diferente do numérico, aqui precisamos dar valor a todos.
enum StatusPedido {
  Aguardando = "AGUARDANDO_PAGAMENTO",
  Enviado = "PRODUTO_ENVIADO",
  Entregue = "PRODUTO_ENTREGUE",
  Cancelado = "PEDIDO_CANCELADO",
}

let meuPedido: StatusPedido = StatusPedido.Aguardando;

if (meuPedido === StatusPedido.Aguardando) {
  console.log("O status atual é:", StatusPedido.Aguardando);
}

// -------------------------------------------------------------------------------

// 3. Enum com Valores Customizados (Escalabilidade)
enum TipoUsuario {
  USER = 10,
  ADMIN = 100,
  SUPER = 1000,
}

// Usando o Enum como um TIPO de variável
const tp: TipoUsuario = TipoUsuario.USER;
console.log(tp); // Saída: 10

// 4. Enum Heterogêneo (Misto) - Menos comum, mas possível
enum Resposta {
  Nao = 0,
  Sim = "SIM",
}

// -------------------------------------------------------------------------------

// exemplo pratico:

enum StatusVenda {
  Pendentes = 1,
  Aprovada = 2,
  Cancelada = 3,
}

function processarVenda(status: StatusVenda) {
  if (status === StatusVenda.Aprovada) {
    console.log("Liberando produtos para entrega...");
  } else if (status === StatusVenda.Pendentes) {
    console.log("Aguardando confirmação do banco.");
  } else {
    console.log("Venda não realizada.");
  }
}

processarVenda(StatusVenda.Aprovada); // Seguro e legível!
