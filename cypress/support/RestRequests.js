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
    
}
export default RestRequests