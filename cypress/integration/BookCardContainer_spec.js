describe('BookCardContainer view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/books')
  });

  it('Should be able to view all books in a chosen category', () => {
    cy.intercept('GET', 'https://openlibrary.org/subjects/biography.json', {
      statusCode: 201,
      body: {
        name: 'biography',
        works: [
          {title: 'Brown Bear', cover_id: 1, key: '/works/OL503666W', authors:[{name: 'Nico'}]},
          {title: 'Hungry Caterpillar', cover_id: 2, key: '/works/OL362702W', authors:[{name: 'Kody'}]},
          {title: 'Cat in the Hat', cover_id: 3, key: '/works/OL107195W', authors:[{name: 'Renee'}]}
        ]
      }
    })
    cy.get('button').contains('Biography').click()
    cy.get('.book-cover-img')
      .should('be.visible')
      .should('have.length', 3)
  });

  it('Should be able to change genres by selecting a button on the navigation bar', () => {
    cy.intercept('GET', 'https://openlibrary.org/subjects/children.json', {
      statusCode: 201,
      body: {
        name: 'children',
        works: [
          {title: 'Red Bear', cover_id: 4, key: '/works/OL503666W', authors:[{name: 'Sam'}]},
          {title: 'Hungry Pig', cover_id: 5, key: '/works/OL362702W', authors:[{name: 'Sara'}]},
          {title: 'Rat in the Hat', cover_id: 6, key: '/works/OL107195W', authors:[{name: 'Gracie'}]},
          {title: 'Little Blue Truck', cover_id: 7, key: '/works/OL107196W', authors:[{name: 'Papa'}]}
        ]
      }
    })
    cy.get('button').contains('Children').click()
    cy.get('.book-cover-img')
      .should('be.visible')
      .should('have.length', 4)
    // cy.get('.book-card').contains('cover_id').trigger('mouseover')
  });

  it.skip('Should see the selected genre highlighted in green', () => {

  });

  it.skip('Should be able to see book covers flip over and reveal the title and author', () => {
    // cy.get('.book-cover-image').trigger('mouseover')

  });

  it.skip('Should be able to click on a book cover and be linked to a new page with that book\'s details', () => {

  });

  it.skip('Should be redirected to an error page with a 500 status code', () => {

  });
});
