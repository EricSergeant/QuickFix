beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('App main display', () => {
  it('Should confirm true is equal to true', () => {
    expect(true).to.equal(true)
  });

  // it('Clicking on a link should take user to books', () => {
  //   cy.get('.home-page-btn').click({ multiple: true })
  //   cy.get('.book-card-grid').should('be.visible')
  //   cy.get('.book-cover-img').should('be.visible')
  //   // cy.contains('https://covers.openlibrary.org/b/id/7424001-L.jpg')
  //   cy.location().should((loc) => {
  //     expect(loc.href).to.eq('http://localhost:3000/books')
  //   })
  // });


  it('Clicking on history should take user to books', () => {
    // cy.get('.home-page-btn').click()
    cy.get('[id=history]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    // cy.contains('7424001')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
  });

  it('Clicking on biography should take user to books', () => {
    cy.get('[id=biography]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
  });

  it('Clicking on children should take user to books', () => {
    cy.get('[id=children]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
  });

  // it('Clicking on biography should take user to that display of books', () => {

  // });


  // it('User should see a grid of movies containing posters on page load', () => {
  //   cy.contains('Movie time')
  //   cy.get('.CardContainer')
  //     .should('be.visible')
  // });

});