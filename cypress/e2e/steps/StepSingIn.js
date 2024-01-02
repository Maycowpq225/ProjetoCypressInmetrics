import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RestRequests from "../../support/RestRequests.js" // Importando a classe do caminho do arquivo passado

const restRequests = new RestRequests();
const urlApiSignIn = "https://barrigarest.wcaquino.me/signin";

Given("realizo o login com um usuario inexistente", function () {

    const jsonSignIn = {
        "email": "emailinexistente@hotmail.com", 
        "senha": "qualqueSenhaErrada", 
        "redirecionar": false
    }

    restRequests.doPostRequestWithBody(jsonSignIn, urlApiSignIn).then((jsonResponse) => {
        cy.writeFile("cypress/fixtures/endPointSingIn/responses/responseLoginRealizado.json", JSON.stringify(jsonResponse));
    });
});

When("realizo o login com o usuario criado anteriormente", function () {
    cy.readFile('cypress/fixtures/EndPointCadastroUsuarios/requests/criarUsuarioBodyRequest.json').then((jsonUsuario) => {
        const jsonSignIn = {
            "email": jsonUsuario.email, 
            "senha": jsonUsuario.senha, 
            "redirecionar": false
        }
    
        restRequests.doPostRequestWithBody(jsonSignIn, urlApiSignIn).then((jsonResponse) => {
            cy.writeFile("cypress/fixtures/endPointSingIn/responses/responseLoginRealizado.json", JSON.stringify(jsonResponse));
        });
    })
});