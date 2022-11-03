describe('Books', () => {
  it('can list, show, create, edit & delete books', () => {
    // List Books
    cy.visit('/').get('[data-cy=link-to-books]').click()

    //Create Books
    cy.get('[href="/libros/crear"]').click()
      .get('[data-cy=input-book-title]')
      .type('New Book from Cypress')
      .get('[data-cy=btn-submit-book]').click()
      .get('[data-cy=book-list]')
      .contains('New Book from Cypress')
    
    // Show Books
    cy.get('[data-cy^=link-to-visit-book-]')
      .last()
      .click()
      .get('h1')
      .should('contain.text', 'New Book from Cypress')
      .get('[href="/libros"]').click()

    //Edit Book
    cy.get('[data-cy^=link-to-edit-book-]')
      .last()
      .click()
      .get('[data-cy=input-book-title]')
      .clear()
      .type('Book Edited by Cypress')
      .get('[data-cy=btn-submit-book]')
      .click()
      .get('[data-cy=book-list]')
      .contains('Book Edited by Cypress')

    // Delete Book
    cy.get('[data-cy^=link-to-delete-book-]')
      .last()
      .click()
      .get('[data-cy^=link-to-visit-book-]')
      .last()
      .should('not.contain.text', 'Book Edited by Cypress')
      

  })
})