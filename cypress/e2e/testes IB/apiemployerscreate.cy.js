beforeEach(() => {
    cy.login();
});

describe('API Employee Create - Test', () => {
    const faker = require('faker-br');
    var randomcpf = faker.br.cpf();
    var randomname = faker.name.firstName('male') + ' ' + faker.name.lastName('male');
    var randommothername = faker.name.firstName('female') + ' ' + faker.name.lastName('female');
    var ranndomemail = faker.internet.email('lucas', 'sebe');
    var randomjobTitle = faker.name.jobTitle();
    var randominternalcode = faker.random.alpha(10);
    var randomphonenumber = faker.phone.phoneNumber('859########');

    it('API Employee Create - Test', () => {
        cy.api({
            auth: { bearer: window.localStorage.token },
            method: 'POST',
            url: '  https://cerusbank-portal-api-dev.uc.r.appspot.com/employees/valid-employee',
            body: {
                "company_id": "924b154e62d645c09edc08dad76b03b8",
                "employee_identifier": randomcpf
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
        cy.api({
            auth: { bearer: window.localStorage.token },
            method: 'POST',
            url: '  https://cerusbank-portal-api-dev.uc.r.appspot.com/employees/create',
            body: {
                "name": randomname,
                "cpf": randomcpf,
                "email": ranndomemail,
                "cellphone": randomphonenumber,
                "gender": "0",
                "birth_date": "1997-12-22T02:00:00.000Z",
                "responsibility": randomjobTitle,
                "admission_date": "2022-10-31T14:02:19.792Z",
                "internal_code": randominternalcode,
                "nationality": 1,
                "company_id": "924b154e62d645c09edc08dad76b03b8",
                "mother_full_name": randommothername
            },
        }).should((res) => {
            expect(res.status).to.eq(200)
        })
    })
})