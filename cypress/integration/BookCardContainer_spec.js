describe('BookCardContainer view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/books')
  });

  it('Should be able to view all books in a chosen category', () => {
    cy.intercept('GET', 'https://openlibrary.org/subjects/kids.json', {
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
    cy.get('button').contains('Children').click()
    cy.get('.book-cover-img')
      .should('be.visible')
      .should('have.length', 3)
  });

  beforeEach(() => {
    cy.intercept('GET', 'https://openlibrary.org/subjects/biography.json', {
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
    cy.get('button').contains('Biography').click()
  });

  it('Should be able to change genres by selecting a button on the navigation bar', () => {
    cy.get('.book-cover-img')
      .should('be.visible')
      .should('have.length', 4)
  });

  it('Should be able to see book covers flip over and reveal the title and author', () => {
    cy.get('img[alt="Rat in the Hat"]').trigger('mouseover')
    cy.get('.book-card-back').contains('Rat in the Hat')
      .should('have.class', 'book-title')
    cy.get('.book-card-back').contains('Gracie')
      .should('have.class', 'book-authors')
  });

  it('Should be able to click on a book cover and be linked to a new page with that book\'s details', () => {
    cy.intercept('GET', 'https://openlibrary.org/works/OL107195W.json', {
      statusCode: 201,
      body: {
        description: 'This is a great book description!',
        title: 'Rat in the Hat',
        covers: [6, 8, 9, 10],
        first_publish_date: '1957',
        links: ['www.wikipedia.com', 'www.google.com']
      }
    })
    cy.get('img[alt="Rat in the Hat"]').click()
    cy.get('.book-detail-styling')
      .get('.title').contains('Rat in the Hat').should('be.visible')
      .get('.publish-date').contains('1957').should('be.visible')
      .get('.links').contains('Links outside of A Novel Idea').should('be.visible')
    cy.get('.description').should('contain','This is a great book')
    cy.get('.book-cover').should('be.visible')
  });

  it('Should be redirected to an error page with a 404 status code', () => {
    cy.visit('http://localhost:3000/error')
    cy.intercept('GET', 'https://openlibrary.org/bananas.json', {
      statusCode: 404,
      body: {
        message: 'Oh no! The server is down'
      }
    })
    cy.get('h1').should('contain', 'This is embarrasing!')
  });
});
