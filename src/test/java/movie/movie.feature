Feature: Cadastrar novo filme
  Background:
    * url baseUrl
    * def pathResource = 'movies'
  Scenario: criar e recuperar novo filme
    Given path pathResource
    And request {description: 'De volta para o Futuro'}
    When method post
    Then status 201
    And match response == {id: '#notnull', description: 'De Volta para o Futuro'}

    Given path pathResource + '/' + response.id
    When method get
    Then status 200
    And match response == {id: '#notnull', description: 'De Volta para o Futuro'}