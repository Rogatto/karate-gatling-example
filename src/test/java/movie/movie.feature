Feature: Cadastrar novo filme
  Background:
    * url 'http://api-demov3.sensedia.com/fastmovie/v1/movies'
  Scenario: criar e recuperar novo filme
    Given request {description: 'De volta para o Futuro'}
    When method post
    Then status 201
    And match response == {id: '#notnull', description: 'De Volta para o Futuro'}

    Given path response.id
    When method get
    Then status 200
    And match response == {id: '#notnull', description: 'De Volta para o Futuro'}