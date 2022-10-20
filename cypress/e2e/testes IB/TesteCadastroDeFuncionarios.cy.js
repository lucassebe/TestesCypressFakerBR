import CadastroFactory from '../factories/CadastroFactory'
describe('Cadastro de Funcionários', () => {

    before(() => {
        cy.visit('https://ib-homol.cerusbank.com.br/login')
    })

    it('Cadastro de Funcionarios', () => {
        var deliver = CadastroFactory.deliver();
        cy.get('[type="text"]').type('096.783.044-30');
        cy.get('.my-3 > .form-control').type('bext2020');
        cy.get('.col-md-8 > .mt-3').click();
        cy.wait(4000); // desperation wait
        cy.get('.p-1 > :nth-child(3)').click();
        cy.get('.d-flex > :nth-child(9) > .dropdown-toggle').click();
        cy.get('#collapsehome-8 > [href="employees"]').click();
        cy.get('[href="employee-new"]').click();
        cy.get('.d-flex > .form-control').type(deliver.cpf);
        cy.get(':nth-child(1) > :nth-child(1) > .form-control').type(deliver.nome);
        cy.get(':nth-child(4) > .form-control').type(deliver.email);
        cy.get(':nth-child(5) > .form-control').type(deliver.telefone);
        cy.get('#motherFullName').type("Não Informado");
        cy.get(':nth-child(7) > .form-control').type(deliver.cpf);
        cy.get('#birthDate').type(deliver.nascimento);
        cy.get('.row.mt-3 > :nth-child(1) > .btn').click();

    })




})



//npm run test
//npx cypress run --record --key ab8b57fd-a6ec-4737-bf34-d23f3a62f305