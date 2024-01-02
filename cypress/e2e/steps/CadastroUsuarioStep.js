import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import RestRequests from "../../support/RestRequests.js"

const restRequests = new RestRequests();
const registerAccountAPI = 'https://barrigarest.wcaquino.me/usuarios';

Given ('que criamos um novo usuario e salvamos em um json', () => {
     cy.gerarNomeAleatorio().then(nome => {
         cy.gerarEmailAleatorio(nome).then(email => {
             cy.gerarSenhaAleatoria().then(senha => {

                 const bodyUsuario = {
                     'nome': nome,
                     'email': email,
                     'senha': senha,
                     'redirecionar': "false",
                   };
            
                 cy.writeFile('cypress/fixtures/EndPointCadastroUsuarios/requests/criarUsuarioBodyRequest.json', bodyUsuario);
             });
         });
     });
});

 When ('realizado o request da api de cadastro passando o json do usuario criado', () => {
    cy.readFile("cypress/fixtures/EndPointCadastroUsuarios/requests/criarUsuarioBodyRequest.json").then(requestJsonCriarUsuario => {
        restRequests.doPostRequestWithBody(JSON.stringify(requestJsonCriarUsuario), registerAccountAPI).then((response) => {
            cy.writeFile('cypress/fixtures/EndPointCadastroUsuarios/responses/criarUsuarioJsonResponse.json', JSON.stringify(response));
        });
    })
 })

