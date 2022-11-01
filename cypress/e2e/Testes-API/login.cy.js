it('Login API with valid data', () => {
    cy.login({

    }).should((response) => {
        expect(response.status).to.eq(200)

    })
})