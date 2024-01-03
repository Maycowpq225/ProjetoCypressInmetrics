# Projeto do Curso de Cypress da Inmetrics: Automatização de apis

# Objetivo:

O projeto tem como objetivo realizar a automatização de dois endpoints da API, localizados no domínio 'https://barrigarest.wcaquino.me'. Cada feature/funcionalidade desenvolve dois testes: um positivo,       representando um cenário de sucesso, e um negativo, simbolizando um caso de falha.

# Features e Testes Desenvolvidos:
- Feature: Cadastro de Usuário
    - Teste 1 - Criação de Usuário:
    Este teste realiza a criação de um novo usuário no sistema. Utilizando um JSON com os dados do usuário, o teste verifica se o sistema é capaz de processar e criar corretamente um novo registro.

    - Teste 2 - Criação de Usuário com E-mail Duplicado:
    Neste teste, o objetivo é verificar o comportamento do sistema ao tentar criar um usuário com um e-mail que já foi cadastrado anteriormente. A expectativa é que o sistema impeça a criação e apresente uma mensagem ou resposta adequada.

- Feature: Login
    - Teste 3 - Login Válido:
    Este teste realiza um login válido utilizando uma massa de dados previamente criada. O objetivo é garantir que o sistema consiga autenticar corretamente um usuário existente e retorne um resultado de sucesso.

    - Teste 4 - Login com Usuário Inexistente:
    Neste teste, é realizada uma tentativa de login utilizando um usuário que não está cadastrado no sistema. O propósito é confirmar que o sistema bloqueia o acesso a usuários inexistentes e fornece uma resposta apropriada.

# Integração entre Features:

Dado que as funcionalidades envolvem o cadastro de usuário e o login, foi implementada uma integração entre as features. Essa integração permite a criação de um usuário durante a execução do teste de cadastro e, posteriormente, a realização do login com as credenciais recém-criadas.

# Conclusão

 O projeto visa garantir a robustez e confiabilidade das operações de cadastro e login do sistema, utilizando a ferramenta Cypress para automatizar os testes. A integração entre as features proporciona uma abordagem abrangente, testando diferentes cenários e validando a interação entre as funcionalidades relacionadas.

