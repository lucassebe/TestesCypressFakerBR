describe('Front test using faker.js', () => {
    const faker = require('faker-br');
    var customerName = faker.name.findName();
    var contactLastName = faker.name.lastName();
    var contactFirstName = faker.name.firstName();
    var phone = faker.phone.phoneNumber('8#9########');
    var adresssLine1 = faker.address.streetName();
    var adresssLine2 = faker.address.streetName();
    var city = faker.address.city();
    var state = faker.address.state();
    var postalcode = faker.address.zipCodeByState(state);
    var country = faker.address.country();
    var salesRepEmployeeNumber = faker.random.number({ min: 1000000 });
    var creditLimit = faker.random.number({ min: 1000000 });




    it('Visiting CRUD Demo', () => {
        cy.visit('https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap/add');
        cy.get('#field-customerName').type(customerName);
        cy.get('#field-contactLastName').type(contactLastName);
        cy.get('#field-contactFirstName').type(contactFirstName);
        cy.get('#field-phone').type(phone);
        cy.get('#field-addressLine1').type(adresssLine1);
        cy.get('#field-addressLine2').type(adresssLine2);
        cy.get('#field-city').type(city);
        cy.get('#field-state').type(state);
        cy.get('#field-postalCode').type(postalcode);
        cy.get('#field-country').type(country);
        cy.get('#field-salesRepEmployeeNumber').type(salesRepEmployeeNumber);
        cy.get('#field-creditLimit').type(creditLimit);
        cy.get('#save-and-go-back-button').click();
    })
})