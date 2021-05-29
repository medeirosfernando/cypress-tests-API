/// <reference types="cypress" />

import req from '../support/api/requests'
import assertions from '../support/api/assertions'

context('Inexistent Movie', () => {

  it('should search for a non-existent movie id @functional', () => {
    req.getInexistentMovie().then(getMovieResponseInexistent => {
      assertions
      .shouldIncorrectMessage(
        getMovieResponseInexistent
        .body
        .Error,
        "Error getting data."
      )
      assertions
      .shouldIncorrectMessage(
        getMovieResponseInexistent
        .body
        .Response, 
        "False"
      )
    })
  })

  it('should search for an empty movie id @functional', () => {
    req.getEmptyMovie().then(getMovieResponseEmpty => {
      assertions
      .shouldIncorrectMessage(
        getMovieResponseEmpty
        .body
        .Error,
        "Incorrect IMDb ID."
      )
      assertions.shouldIncorrectMessage(
        getMovieResponseEmpty
        .body
        .Response, 
        "False"
      )
    })
  })

  it('should search for an incorrect movie id @functional', () => {
    req.getIncorrectMovie().then(getMovieResponseIncorrect => {
      assertions
      .shouldIncorrectMessage(
        getMovieResponseIncorrect
        .body
        .Error,
        "Incorrect IMDb ID."
      )
      assertions
      .shouldIncorrectMessage(
        getMovieResponseIncorrect
        .body
        .Response, 
        "False"
      )
    })
  })

  it('should search for an injection movie id @functional', () => {
    req.getInjectionMovie().then(getMovieResponseInjection => {
      assertions
      .shouldHaveStatus(
        getMovieResponseInjection, 
        403
      )
    })
  })

  it('should search for an undefined movie id @functional', () => {
    req.getUndefinedMovie().then(getMovieResponseUndefined => {
      assertions
      .shouldgetUndefinedMessage(
        getMovieResponseUndefined, 
        "Conversion from string \"TT0000001\" to type 'Double' is not valid."
      )
    })
  })

  it('Not identified', () => {
    cy.log('Blinking API')
    /* Ao realizar testes no site da API não passando o IMDb ID, algumas vezes a resposta é 
    "{"Response":"False","Error":"Something went wrong."}", porém em outras a respostas é 
    "{"Response":"False","Error":"Incorrect IMDb ID."}"
    Por esta razão não foi feito o teste para este cenário
    */
  });  
})