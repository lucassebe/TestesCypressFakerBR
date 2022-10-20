before(() => {
    cy.visit('https://ib-homol.cerusbank.com.br/login')
})

it('Logar no IB', () => {
    cy.get('[type="text"]').type('096.783.044-30');
    cy.get('.input-group > .form-control').type('bext2020');
    cy.get('.col-md-8 > .mt-3').click();
    cy.wait(5000); // desperation wait
    cy.get('.p-1 > :nth-child(3)').click();
    cy.get('.d-flex > :nth-child(3) > .nav-link').click();
    cy.get('.px-2').click();
    cy.get('.px-2').should('be.enabled')
})