describe('API Balance - Test', () => {
    beforeEach(() => {
        cy.login
    });

    it('API SALDO', () => {
        const token = Cypress.env('token');
        const authorization = 'bearer ${ token }';
        const options = {
            method: 'POST',
            url: '  https://cerusbank-portal-api-dev.uc.r.appspot.com/accounts/balance',
            headers: { authorization },
            body: {
                "company_id": "924b154e62d645c09edc08dad76b03b8",
                "date_final": "2022-07-22T14:49:37.388Z",
                "date_initial": "2022-07-22T14:49:37.388Z"
            }
        }
    })
})

//npm run test
//npx cypress run --record --key ab8b57fd-a6ec-4737-bf34-d23f3a62f305