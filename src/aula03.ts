/*
CONFIGURAÇÃO DO TYPESCRIPT (tsconfig.json)

Nesta etapa utilizei o comando `tsc --init` para criar o arquivo tsconfig.json,
que é responsável por definir como o TypeScript irá funcionar no projeto.

Esse arquivo pode ser entendido como o "cérebro" do projeto, pois controla:
- Onde estão os arquivos TypeScript
- Para onde o código compilado será enviado
- Como a compilação deve acontecer

CONFIGURAÇÕES UTILIZADAS:

"rootDir": "./src"
Define a pasta onde ficam os arquivos fonte do projeto.
Ou seja, todo o código TypeScript (.ts) deve ser escrito dentro da pasta "src".

"outDir": "./build"
Define a pasta onde o TypeScript irá gerar os arquivos JavaScript (.js) após a compilação.
Ou seja, todo código convertido será enviado para a pasta "build".

FLUXO DO PROJETO:

Eu escrevo o código em TypeScript dentro da pasta "src",
o TypeScript compila esse código,
e gera arquivos JavaScript prontos dentro da pasta "build".

Exemplo de fluxo:
src/index.ts  → (compilação) →  build/index.js

ANALOGIA SIMPLES:
- src = onde o código é criado (cozinha)
- build = onde o código final pronto é entregue (prato pronto)

IMPORTÂNCIA:
Essa separação mantém o projeto organizado, evita misturar arquivos .ts com .js
e segue um padrão profissional utilizado no mercado.
*/
