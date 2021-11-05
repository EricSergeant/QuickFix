// import App from '.../src/Components/App/App.tsx';

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
      // .should('have.value')



  });

  it.skip('Should be able to change genres by selecting a button on the navigation bar', () => {

  });

  it.skip('Should see the selected genre highlighted in green', () => {

  });

  it.skip('Should be able to see book covers flip over and reveal the title and author', () => {

  });

  it.skip('Should be able to click on a book cover and be linked to a new page with that book\'s details', () => {

  });
});
