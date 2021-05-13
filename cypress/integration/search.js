describe('Search elements', ()=>{
  beforeEach(()=>{
      cy.visit('/'); /*Para que vaya a la url que está en cypress.json */
  })
  it('Search for elements with multiple results', ()=>{
    cy.fixture('index').then((index)=>{
      cy.get(index.searchBox).type('dress');
      cy.get(index.searchButton).click();
    })
    cy.fixture('searchResult').then((searchResult)=>{
      cy.get(searchResult.title).should('contain','dress');
    })
  })
  it('Search for elements with no results', ()=>{
    cy.fixture('index').then((index)=>{
      cy.get(index.searchBox).type('superman');
      cy.get(index.searchButton).click();
    })
    cy.fixture('searchResult').then((searchResult)=>{
      cy.get(searchResult.alert).should('contain','No results were found for your search');
    })
  })
})
