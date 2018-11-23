describe('My Sample Test', () => {
  it('Should open home page', () => {
    cy.visit('/');
  });

  it('Should open features page from homepage link', () => {
    cy.visit('/');
    cy.contains('Features').click();

    // Should be on a new URL which includes '/features'
    cy.url().should('include', '/features');
  });
});
