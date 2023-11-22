/*Texto no describe 'Login'

Texto do caso de teste 'Deve realizar o login com sucesso - cenário de  sucesso' 

Texto do caso de teste 'Deve retornar mensagem dos campos obrigatórios  - cenário de insucesso'*/


describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

    it("Deve realizar o login com sucesso- cenário de  sucesso", () => {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get('.oxd-button').click();
    
    });


    it("Deve retornar msg dos campos obrigatórios - cenário de insucesso", ()=> {
      cy.get(".oxd-button").click();
      cy.contains("Required");
      cy.contains("Required")

  })
})


