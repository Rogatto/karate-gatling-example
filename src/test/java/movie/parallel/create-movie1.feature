Feature: Cadastrar novo filme
  Background:
    * url baseUrl
    * def pathUrl = 'movies'

  Scenario: criar e recuperar novo filme
    Given request {description: 'De volta para o Futuro'}
    And path pathUrl
    When method post
    Then status 201
    And match response == {id: '#notnull', description: 'De Volta para o Futuro'}

    Given path pathUrl + '/' + response.id
    When method get
    Then status 200
    And match response == {id: '#notnull', description: 'De Volta para o Futuro'}