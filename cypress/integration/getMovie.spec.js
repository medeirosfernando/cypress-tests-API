/// <reference types="cypress" />

import req from '../support/api/requests'
import assertions from '../support/api/assertions'
import schemas from '../support/api/schemas'

context('Movie', () => {

  it('should validated the contract of the GET Movie @contract', () => {
    req.getMovie().then(getMovieResponse => {
      assertions
      .validateContractOf(
        getMovieResponse, 
        schemas
        .getMovieSchema()
      )
      assertions
      .shouldHaveStatus(
        getMovieResponse, 
        200
      )
    })
  })

  it('should validated the data of response @functional', () => {
    req.getMovie().then(getMovieResponseData => {
      assertions
      .shouldHaveTitle(
        getMovieResponseData, 
        "The Social Network"
        )
      assertions
      .shouldHaveYear(
        getMovieResponseData, 
        "2010"
      )
      assertions
      .shouldHaveLanguage(
        getMovieResponseData, 
        "English, French"
      )
    })
  })
})