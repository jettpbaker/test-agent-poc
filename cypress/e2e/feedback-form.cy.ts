describe('Feedback Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('submits the form successfully with valid input', () => {
    cy.get('.name-input').type('Alice')
    cy.get('.email-input').type('alice@example.com')
    cy.get('.message-input').type('Great product!')
    cy.get('.submit-btn').click()

    cy.get('[data-testid="success-message"]').should('be.visible')
  })

  it('shows an error when submitting an empty form', () => {
    cy.get('.submit-btn').click()

    cy.get('[data-testid="error-message"]').should('be.visible')
    cy.get('[data-testid="success-message"]').should('not.exist')
  })

  it('shows an error when only some fields are filled', () => {
    cy.get('.name-input').type('Bob')
    cy.get('.submit-btn').click()

    cy.get('[data-testid="error-message"]').should('be.visible')
  })

  it('clears the form after successful submission', () => {
    cy.get('.name-input').type('Alice')
    cy.get('.email-input').type('alice@example.com')
    cy.get('.message-input').type('Great product!')
    cy.get('.submit-btn').click()

    cy.get('.name-input').should('have.value', '')
    cy.get('.email-input').should('have.value', '')
    cy.get('.message-input').should('have.value', '')
  })
})
