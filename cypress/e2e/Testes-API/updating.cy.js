beforeEach(() => {
    cy.login();
});

it('API testing - sending a request', () => {
    cy.api({

        method: 'POST',
        cookie: { token: window.localStorage.token }, //use acoording to the api documentation. some cases are "auth"
        url: 'https://restful-booker.herokuapp.com/booking',
        body: {
            "firstname": "Alex",
            "lastname": "Guerra",
            "totalprice": 100,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },

            "additionalneeds": "Lunch"
        }
    }).should((response) => {
        expect(response.status).to.eq(200)
    })
})