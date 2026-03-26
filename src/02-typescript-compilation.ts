/*
COMPILAÇÃO DE ARQUIVOS TYPESCRIPT

Nesta aula aprendi como compilar arquivos TypeScript manualmente utilizando o comando `tsc`.

O TypeScript não é executado diretamente pelo navegador ou pelo Node.js. Por isso, é necessário
converter (compilar) os arquivos .ts em arquivos .js (JavaScript), que são os arquivos que 
realmente são executados.

COMANDO UTILIZADO:

tsc nome-do-arquivo.ts

Exemplo:
tsc aula02.ts

O que acontece ao executar esse comando:

1. O TypeScript lê o arquivo .ts informado
2. Compila (transforma) o código TypeScript em JavaScript
3. Gera um arquivo .js correspondente

Exemplo de resultado:
aula02.ts → aula02.js

IMPORTANTE:
- O arquivo .ts é o código fonte (onde programamos)
- O arquivo .js é o código final executável

OBSERVAÇÃO:
Quando existe um arquivo tsconfig.json no projeto, o comando `tsc` pode compilar todos os arquivos
automaticamente, seguindo as configurações definidas (como rootDir e outDir).

RESUMO:
Utilizei o comando `tsc nome-do-arquivo.ts` para transformar meu código TypeScript em JavaScript,
permitindo que ele possa ser executado corretamente.
*/

const vnome = "Bruno";
const vcanal = "CFBCursos";
const vcurso = "Type";

console.log(vnome);
console.log(vcanal);
console.log(vcurso);
