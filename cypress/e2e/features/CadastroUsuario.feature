Feature: Cadastro de usuario

    Scenario Outline: Cadastro de usuario com sucesso
    Given que criamos um novo usuario e salvamos em um json
    When realizado o request da api de cadastro passando o json do usuario criado
    Then o response 'EndPointCadastroUsuarios/responses/criarUsuarioJsonResponse.json' deve conter o status code 201
    And o response 'EndPointCadastroUsuarios/responses/criarUsuarioJsonResponse.json' deve conter a mensagem '"statusText":"Created"'

   Scenario Outline: Cadastro de usuario com email existente
    Given que criamos um novo usuario e salvamos em um json
    When realizado o request da api de cadastro passando o json do usuario criado
    And realizado o request da api de cadastro passando o json do usuario criado
    Then o response 'EndPointCadastroUsuarios/responses/criarUsuarioJsonResponse.json' deve conter o status code 500
    And o response 'EndPointCadastroUsuarios/responses/criarUsuarioJsonResponse.json' deve conter a mensagem 'already exists.'