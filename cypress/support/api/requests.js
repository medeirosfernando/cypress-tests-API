class Requests {
  getMovie(){
    return cy.request({
      method: 'GET',
      url: `${Cypress.config().baseUrl}?i=${Cypress.config().parameters.id_do_filme}&apikey=${Cypress.config().parameters.api_key}`
    })
  } 

  getInexistentMovie(){
    return cy.request({
      method: 'GET',
      url: `${Cypress.config().baseUrl}?i=${Cypress.config().parameters.id_do_filme_inexistente}&apikey=${Cypress.config().parameters.api_key}`
    })
  }

  getIncorrectMovie(){
    return cy.request({
      method: 'GET',
      url: `${Cypress.config().baseUrl}?i=${Cypress.config().parameters.id_do_filme_incorreto}&apikey=${Cypress.config().parameters.api_key}`
    })
  } 

  getEmptyMovie(){
    return cy.request({
      method: 'GET',
      url: `${Cypress.config().baseUrl}?i=${Cypress.config().parameters.id_do_filme_vazio}&apikey=${Cypress.config().parameters.api_key}`
    })
  }

  getUndefinedMovie(){
    return cy.request({
      method: 'GET',
      url: `${Cypress.config().baseUrl}?i=${Cypress.config().parameters.id_do_filme_indefinido}&apikey=${Cypress.config().parameters.api_key}`
    })
  }

  getInjectionMovie(){
    return cy.request({
      method: 'GET',
      url: `${Cypress.config().baseUrl}?i=${Cypress.config().parameters.id_do_filme_injection}&apikey=${Cypress.config().parameters.api_key}`,
      failOnStatusCode: false
    })
  }
}

export default new Requests()