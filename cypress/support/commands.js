import "cypress-localstorage-commands"; //import local storage commands to save your authentication token

Cypress.Commands.add('login', () => {

    cy.api({ //you can use cy.request as well but i prefer use https://github.com/filiphric/cypress-plugin-api to see the request on the cypress board.
        method: 'POST',
        url: Cypress.env('URL_TEST') + '/auth',
        body: {
            "username": Cypress.env("username"),
            "password": Cypress.env("password")
        },
    }).then(response => {
        window.localStorage.setItem('token', response.body.token) //save token to future requests
    })
});