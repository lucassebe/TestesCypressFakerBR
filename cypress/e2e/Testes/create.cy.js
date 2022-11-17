beforeEach(() => { //use to get the token acess. we don't need to use on this endpoint
    cy.login();
});

describe('API testing - creating requests using faker.js', () => {
    const faker = require('faker-br'); //be sure that you're importing faker on your e2e.js file   
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var price = faker.random.float(3);

    it('API testing - sending a request', () => {
        cy.api({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                "firstname": firstName,
                "lastname": lastName,
                "totalprice": price,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },

                "additionalneeds": "Breakfast"
            }
        })
    })
})