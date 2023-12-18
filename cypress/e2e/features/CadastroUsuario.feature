Feature: Cadastro de usuario

    Scenario Outline: Cadastro de usuario com sucesso
    Given que criamos um novo usuario
    When realizamos a chamada da api de cadastro com o usuario criado
    Then o status code deve 201
    And o body retornado deve conter o contrato correto

    Scenario Outline: Cadastro de usuario com email existente
    Given que criamos um novo usuario
    When realizamos a chamada da api de cadastro com o usuario criado
    And realizamos a chamada da api de cadastro com o mesmo usuario ja criado
    Then o status code deve 500
    And validar a mensagem "already exists." dentro response body
