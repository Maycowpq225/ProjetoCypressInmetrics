import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given ('que criamos um novo usuario', () => {
    cy.gerarNomeAleatorio().then(nome => {
        cy.gerarEmailAleatorio(nome).then(email => {
            cy.gerarSenhaAleatoria().then(senha => {

                const bodyUsuario = {
                    'nome': nome,
                    'email': email,
                    'senha': senha,
                    'redirecionar': false,
                  };
            
                cy.writeFile('cypress/fixtures/cadastroUsuariosBodyRequests/criarUsuarioBodyRequest.json', bodyUsuario);
            });
        });
    });
});

When ('realizamos a chamada da api de cadastro com o json do usuario criado', () => {

    

})
