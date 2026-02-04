describe('Task List', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('adds a new task', () => {
    cy.get('[data-testid="task-input"]').type('Buy groceries')
    cy.get('.add-task-btn').click()

    cy.get('[data-testid="task-item"]').should('have.length', 1)
    cy.get('.task-text').first().should('have.text', 'Buy groceries')
  })

  it('displays the correct task count', () => {
    cy.get('[data-testid="task-count"]').should('have.text', '0 tasks')

    cy.get('[data-testid="task-input"]').type('Task one')
    cy.get('.add-task-btn').click()
    cy.get('[data-testid="task-count"]').should('have.text', '1 task')

    cy.get('[data-testid="task-input"]').type('Task two')
    cy.get('.add-task-btn').click()
    cy.get('[data-testid="task-count"]').should('have.text', '2 tasks')
  })

  it('toggles a task as completed', () => {
    cy.get('[data-testid="task-input"]').type('Walk the dog')
    cy.get('.add-task-btn').click()

    cy.get('[data-testid="toggle-task"]').first().click()
    cy.get('.task-text').first().should('have.class', 'completed')
  })

  it('un-toggles a completed task', () => {
    cy.get('[data-testid="task-input"]').type('Walk the dog')
    cy.get('.add-task-btn').click()

    cy.get('[data-testid="toggle-task"]').first().click()
    cy.get('.task-text').first().should('have.class', 'completed')

    cy.get('[data-testid="toggle-task"]').first().click()
    cy.get('.task-text').first().should('not.have.class', 'completed')
  })

  it('deletes a task', () => {
    cy.get('[data-testid="task-input"]').type('Read a book')
    cy.get('.add-task-btn').click()
    cy.get('[data-testid="task-item"]').should('have.length', 1)

    cy.get('[data-testid="delete-task"]').first().click()
    cy.get('[data-testid="task-item"]').should('have.length', 0)
    cy.get('[data-testid="task-count"]').should('have.text', '0 tasks')
  })
})
