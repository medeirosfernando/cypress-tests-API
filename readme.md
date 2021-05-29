# Testes de API

Projeto desenvolvido para estudo pessoal no site - http://www.omdbapi.com/

# Tecnologias

  - Cypress @ 7.4.0
  - NPM @ 6.14.8

# Dependências

  - cy-spok
  - cypress-select-tests
  
# Desafio

  - Criar teste de contrato de um filme específico
  - Criar teste funcional para validar Título, Ano e Idioma do filme
  - Criar testes funcionais para filme inexistente
  
# Passos para executar o projeto

  - Clonar o repositório
  - Dentro do projeto, executar o comando [npm install]

Para executar os testes, digitar no terminal:

  Para executar com o navegador aberto:  
  - npm run test:open
  Para executar em modo headless: 
  - npm run test:run
  Para executar apenas os testes de contrato: 
  - npm run test:contract
  Para executar apenas os testes funcionais: 
  - npm run test:functional


# Passos realizados para criação e preparação do projeto.

Dentro de uma pasta, abrir o terminal (prompt) e realizar os seguintes comandos:

1. Inicialização do projeto: npm init --yes
2. Instalação da última versão do Cypress: npm install -D cypress
3. Executar o comando para criação da estrutura padrão do Cypress via terminal na pasta raiz: npx cypress open
4. Apagar a pasta examples dentro do diretório Integration
5. Instalar a lib para definir os contratos (schemas) cy-spok: npm install -D bahmutov/cy-spok
6. Instalar a lib select tests para selecionar os testes: npm install -D cypress-select-tests
