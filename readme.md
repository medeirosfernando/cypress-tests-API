![cy](https://user-images.githubusercontent.com/25454762/120259418-5008ad80-c26a-11eb-926e-ef0f258a000e.png)

# Testes de API com Cypress

## Projeto desenvolvido para estudo pessoal

- [Site](http://www.omdbapi.com/)

## Tecnologias

Este projeto utiliza as seguintes tecnologias:

- [Cypress 7.4.0](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
- [NodeJs 14.15.0](https://nodejs.org/en/)
- [NPM 7.13.0](https://docs.npmjs.com/cli/v7/commands/npm-install)

## Dependências

Instale as dependências:

  - [cy-spok](https://github.com/bahmutov/cy-spok)
  - [cypress-select-tests](https://www.npmjs.com/package/cypress-select-tests)
  
## Desafio
```sh
  - Criar teste de contrato de um filme específico
  
  - Criar teste funcional para validar Título, Ano e Idioma do filme
  
  - Criar testes funcionais para filme inexistente
```

## Passos para executar o projeto

> Dentro de uma pasta, abrir o terminal (prompt) e realizar os seguintes comandos:
> 
> Inicialização do projeto: npm init --yes
> 
> Instalação da última versão do Cypress: npm install -D cypress
> 
> Executar o comando para criação da estrutura padrão do Cypress via terminal na pasta raiz: npx cypress open
> 
> Apagar a pasta examples dentro do diretório Integration

## Execução dos testes:

| Passos para configuração e execução do projeto | Comando                    |
| ---------------------------------------------- | ---------------------------|
| Instalação das dependências                    | `npm install`              |
| Execução dos testes modo open                  | `npm run test:open`        |
| Execução dos testes modo headless              | `npm run test:run`         |
| Execução dos testes de contrato                | `npm run test:contract`    |
| Execução dos testes funcionais                 | `npm run test:functional`  |

## Gifs animados dos testes sendo executados

- Modo open
![cypress-test-API-open](https://user-images.githubusercontent.com/25454762/120086748-0d9f6f00-c0b8-11eb-8916-88d7eb2cdbae.gif)

- Modo headless

![cypress-test-API](https://user-images.githubusercontent.com/25454762/120086750-142de680-c0b8-11eb-8ef3-1e1c45414be5.gif)

`Desafie-se diariamente contrapondo o aceite de que tudo está perfeito.` `Nando Medeiros`
