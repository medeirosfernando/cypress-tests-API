class Assertions {
  shouldHaveStatus(response, status){
    expect(response.status, `Status is ${status}`).to.eq(status)
  }

  shouldHaveTitle(response, title){
    expect(response.body.Title, `Title is ${title}`).to.eq(title)
  }

  shouldHaveYear(response, year){
    expect(response.body.Year, `Year is ${year}`).to.eq(year)
  }

  shouldHaveLanguage(response, language){
    expect(response.body.Language, `Language is ${language}`).to.eq(language)
  }

  validateContractOf(response, schema) {
    return cy.wrap(response.body)
      .should(
        schema
      )
  }

  shouldIncorrectMessage(response, message){
    expect(response).to.eq(message)
  }

  shouldInvalidMessage(response, message){
    expect(response).to.eq(message)
  }

  shouldEmptyMessage(response, message){
    expect(response).to.eq(message)
  }

  shouldgetUndefinedMessage(response, message){
    expect(response.body).to.contain(message)
  }

  shouldgetInjectionMessage(response, message){
    expect(response).to.eq(message)
  }
}

export default new Assertions()