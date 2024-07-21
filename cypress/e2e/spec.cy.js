describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('index.html')


    // Get an input, type into it
    cy.get('#username.form-control').type('chris')

    //  Verify that the value has been updated
    cy.get('#start-game-button.btn.btn-primary').click();

    cy.get('#go-button.btn.btn-success').click();
    
    cy.get('#game-history').contains('chris')


  })
})