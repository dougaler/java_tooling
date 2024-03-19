/* eslint-disable no-undef */
describe(`Testing Name Entry and Dropdown Selection`, () => {
  it(`Types name, selects dropdown choice, and verifies number of log entries`, () => {
    const name = `Zach McIntosh`;
    const selectedChoice = `Rock`;

    // will be different for submission
    cy.visit(`http://localhost/`);

    cy.get(`#username`).type(name); //inputs const name

    cy.get(`#start-game-button`).click();

    let initialHistory;
    cy.get(`#game-history`).then($gameHistory => {
      initialHistory = $gameHistory.text();
    });

    cy.get(`#user-selection`).select(selectedChoice); //selects certain choice

    cy.get(`#go-button`).click();
    
    //confirms history log has the inputted name and also checks to make sure it has added a new log by comparing the old string with the new one.
    cy.get(`#game-history`)
      .should(`not.have.text`, initialHistory)
      .and(`contain`, `${name}`);
  });
});