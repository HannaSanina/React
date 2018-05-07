describe('e2e test', function () {
 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })

    it('preview should have image', function () {
      cy.get('.movieList').should('have', 'img')
    })

    it('should have movie list', function () {
      cy.get('.movieList').should('have.length.above', 1)
    })
  
});