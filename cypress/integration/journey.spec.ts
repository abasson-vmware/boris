describe('Creating a Boris diagram', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#new-service-form')
      .get('.service-name')
      .type('A service')

    cy.get('#new-service-form').submit()

    cy.contains('A service')
  })
})
