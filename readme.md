### Setup do projeto ###

# Passos

1. Inicialização do projeto: npm init --yes
2. Instalação da última versão do Cypress: npm install -D cypress
3. Executar o comando para criação da estrutura padrão do Cypress via terminal na pasta raiz: npx cypress open
4. Apagar a pasta examples dentro do diretório Integration
5. Instalar a lib para definir os contratos (schemas) cy-spok: npm install -D bahmutov/cy-spok
6. Instalar a lib select tests para selecionar os testes: npm install -D cypress-select-tests

Para executar os testes, digitar no terminal:

Para executar com o navegador aberto: npm run test:open
Para executar em modo headless: npm run test:run
Para executar apenas os testes de contrato: npm run test:contract
Para executar apenas os testes funcionais: npm run test:functional

Tecnologias:
Cypress 