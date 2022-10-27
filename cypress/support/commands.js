import "cypress-localstorage-commands";
Cypress.Commands.add('login', () => {

    cy.api({
        method: 'POST',
        url: '  https://cerusbank-portal-api-dev.uc.r.appspot.com/auth',
        body: {
            "password": "bext2020",
            "username": "09678304430",
        },
    }).then(response => {
        window.localStorage.setItem('token', response.body.data.token)
    })
});