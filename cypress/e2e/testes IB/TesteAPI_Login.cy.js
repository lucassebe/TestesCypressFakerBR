it('IB Login - API', () => {
    cy.login({}).should((metodo) => {
        expect(metodo.status).to.eq(200)
        expect(metodo.body).is.not.empty
        expect(metodo.isOkStatusCode).is.true
        expect(metodo.body).to.have.property('status')
        expect(metodo.body.data).to.have.property('user')
        expect(metodo.body.data.user).to.have.property('cpf_cnpj')
        expect(metodo.body.data.user).to.have.property('cellphone')
        expect(metodo.body.data.user).to.have.property('email')
        expect(metodo.body.data.user).to.have.deep.property('name', 'Luciano')

    })
})