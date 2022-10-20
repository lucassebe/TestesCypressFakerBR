it('API Cadastro de Funcionários', () => {
    cy.request({
        method: 'POST',
        url: '  https://cerusbank-portal-api-dev.uc.r.appspot.com/employees/create',
        auth: {
            'bearer': 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDZXJ1cyBCYW5rIEFQSSIsInN1YiI6IjA5Njc4MzA0NDMwIiwiaWF0IjoxNjU4OTQ1ODg2LCJleHAiOjE2NTg5NDc2ODZ9.YbRNDr--bKvZkdRPcwJtzlqynIcq1gYZ2jP6MOuxggQ',
        },
        body: {
            "admission_date": "",
            "birth_date": "",
            "cellphone": "",
            "company_id": "924b154e62d645c09edc08dad76b03b8",
            "cpf": "",
            "email": "",
            "gender": "",
            "internal_code": "",
            "mother_full_name": "",
            "name": "",
            "nationality": "",
            "responsibility": ""
        }
    }).should((metodo) => {
        expect(metodo.status).to.eq(200)
        expect(metodo.body).is.not.empty
        expect(metodo.body).to.have.property('cpf')
    })
})