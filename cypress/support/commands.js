import "cypress-localstorage-commands"; //import local storage commands to save your authentication token

Cypress.Commands.add('login', () => {

    cy.api({ //you can use cy.request as well but i prefer use https://github.com/bahmutov/cy-api to see the request on the cypress board.
        method: 'POST',
        url: '  https://restful-booker.herokuapp.com/auth',
        body: {
            "username": "admin",
            "password": "password123"
        },
    }).then(response => {
        window.localStorage.setItem('token', response.body.token) //save token to future requests
    })
});