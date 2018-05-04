describe('e2e test', function () {
 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })

    it('should have movie list', function () {
      cy.get('App').should('contain', 'MovieList')
    })
  
});