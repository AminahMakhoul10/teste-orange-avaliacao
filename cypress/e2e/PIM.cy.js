/*Texto no describe 'Colaboradores' 
Texto do caso de teste 'Deve cadastrar um funcionário com sucesso'
Texto do caso de teste 'Deve editar o sobrenome de um funcionário com sucesso'
Texto do caso de teste 'Deve excluir um funcionário com sucesso'

*/

describe('Colaboradores', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('.oxd-button').click();
  })



  it("Deve cadastrar um funcionário com sucesso" , () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("João")
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Roberto");
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("Da Silva");
    cy.get('.oxd-button--secondary');

  });

  it("Deve editar o sobrenome de um funcionário com sucesso", () =>{
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();
    cy.get(':nth-child(2) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon');
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Ferreira");

  })

  it("Deve excluir um funcionário com sucesso", () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();
    cy.get(':nth-child(18) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
    cy.get('.oxd-button--label-danger').click();

  })
})