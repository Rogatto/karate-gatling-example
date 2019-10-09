Feature: Alterar filme
  Background:
    * url baseUrl
    * def pathUrl = 'movies/1'
    * def json = {description: 'American Pie 3'}

  Scenario: alterar filme
    Given request json
    And path pathUrl
    When method put
    Then status 200
    And match response == {id: '#notnull', description: 'American Pie 3'}