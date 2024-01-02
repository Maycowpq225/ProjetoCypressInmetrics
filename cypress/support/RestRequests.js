class RestRequests {
    
    doPostRequestWithBody(bodyRequest, resource) {
        return cy.request({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: bodyRequest,
            url: resource,
            failOnStatusCode: false
        })
    }   
    
    requisacaoGetAtributoUrl(id, url) {
        response = cy.request({
            method: 'GET',
            url: url + '/' + id, //url da api a ser feito o request
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        });
        return response;
    }

    // metodo incompleto
    requisicaoGetComParametros() {
        reponse = cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        })
    }

    requisicaoGetComHeader(keyHeader, valueHeader) {
        return cy.request({
            method: 'GET',  // tipo de metodo a ser utilizado na requisão, pode ser do tipo "POST", "GET", "PUT", "DELETE"
            headers: { //headers passados para a api
                keyHeader: valueHeader
            },
            url: url, //url da api a ser feito o request
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        })
    }
}
export default RestRequests