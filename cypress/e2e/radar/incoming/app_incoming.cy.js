describe('Incoming Request - APP' , () => {
  //LOGIN
  beforeEach(() => {
    cy.loginApp()
  });
 
  //TEST C3200
  it('"C3200" Incoming Requests - Without pending/active requests', ()=>{
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > .jss28 > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()

  });


  //TEST C3202. Le falta
  it('"C3202" Incoming Requests - With pending/active read and unread requests', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > .jss28 > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()

  });

  //TEST C3203
  it('"C3203" Incoming Requests - Open pending unread requests', () => {
    cy.contains('unread').
  });
  //TEST C3204
  //TEST C3205
  //TEST C4596
  //TEST C4397
  //TEST C4598
  //TEST C3206
  //TEST C3211

})
reportar: 'mochawesome'

