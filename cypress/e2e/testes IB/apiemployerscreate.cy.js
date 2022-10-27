beforeEach(() => {
    cy.login();
});

describe('API Employee Create - Test', () => {
    it('API Employee Create - Test', () => {
        cy.api({
            auth: { bearer: window.localStorage.token },
            method: 'POST',
            url: '  https://cerusbank-portal-api-dev.uc.r.appspot.com/employees/create',
            body: {
                "name": "teste gustavo",
                "cpf": "85970583073",
                "email": "lucasssss@gmail.com",
                "cellphone": "85999988888",
                "gender": 0,
                "birth_date": "1997-12-22T02:00:00.000Z",
                "responsibility": "",
                "admission_date": "2022-09-12T14:38:07.198Z",
                "internal_code": "64645132123",
                "nationality": 1,
                "company_id": "924b154e62d645c09edc08dad76b03b8",
                "mother_full_name": "maemae"
            },
        }).should((res) => {
            expect(res.status).to.eq(200)
        })
    })
})