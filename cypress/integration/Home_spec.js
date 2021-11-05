beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('App main display', () => {
  it('Should confirm true is equal to true', () => {
    expect(true).to.equal(true)
  });

});