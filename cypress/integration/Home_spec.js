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


  it('Clicking on biography should take user to books', () => {
    cy.get('[id=biography]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
    cy.get('img[src="https://covers.openlibrary.org/b/id/7322697-L.jpg"]').should('be.visible')
  });

  it('Clicking on children should take user to books', () => {
    cy.get('[id=children]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
    cy.get('img[src="https://covers.openlibrary.org/b/id/8235491-L.jpg"]').should('be.visible')

  });


  it('Clicking on fiction should take user to books', () => {
    cy.get('[id=fiction]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
    cy.get('img[src="https://covers.openlibrary.org/b/id/8157718-L.jpg"]').should('be.visible')
  });

  it('Clicking on history should take user to books', () => {
    // cy.get('.home-page-btn').click()
    cy.get('[id=history]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    // cy.contains('7424001')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
    cy.get('img[src="https://covers.openlibrary.org/b/id/5601773-L.jpg"]').should('be.visible')
  });

  it('Clicking on nonfiction should take user to books', () => {
    cy.get('[id=nonfiction]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
    cy.get('img[src="https://covers.openlibrary.org/b/id/8236245-L.jpg"]').should('be.visible')
  });

  it('Clicking on poetry should take user to books', () => {
    cy.get('[id=poetry]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
    cy.get('img[src="https://covers.openlibrary.org/b/id/5992814-L.jpg"]').should('be.visible')
  });

  it('Clicking on romance should take user to books', () => {
    cy.get('[id=romance]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
    cy.get('img[src="https://covers.openlibrary.org/b/id/5048643-L.jpg"]').should('be.visible')
  });

  it('Clicking on self-help should take user to books', () => {
    cy.get('[id=self-help]').click()
    cy.get('.book-card-grid').should('be.visible')
    cy.get('.book-cover-img').should('be.visible')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/books')
    })
    cy.get('img[src="https://covers.openlibrary.org/b/id/48454-L.jpg"]').should('be.visible')
  });


});