Feature: Login

    Scenario Outline: Realizar login com um usuario valido
    Given que criamos um novo usuario e salvamos em um json
    When realizado o request da api de cadastro passando o json do usuario criado
    And realizo o login com o usuario criado anteriormente
    Then o response 'endPointSingIn/responses/responseLoginRealizado.json' deve conter o status code 200
    And o response 'endPointSingIn/responses/responseLoginRealizado.json' deve conter a mensagem '"token":'

    Scenario Outline: Realizar login com um usuario inexistente
    Given realizo o login com um usuario inexistente
    Then o response 'endPointSingIn/responses/responseLoginRealizado.json' deve conter o status code 400
    And o response 'endPointSingIn/responses/responseLoginRealizado.json' deve conter a mensagem 'Problemas com o login do usuário'