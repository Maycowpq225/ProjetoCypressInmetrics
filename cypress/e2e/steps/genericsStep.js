import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Then ('o response {string} deve conter o status code {int}', (jsonPathName, statusCode) => {
    cy.readFile('cypress/fixtures/' + jsonPathName).then((json) => {
        expect(json.status).to.eq(statusCode, "Response body contains correct status code");
      });
})

Then ('o response {string} deve conter a mensagem {string}', (jsonPathName, message) => {
  cy.readFile('cypress/fixtures/' + jsonPathName).then((json) => {
    expect(JSON.stringify(json)).contains(message, "Response body contains the message: " + message)
   }); 
})


