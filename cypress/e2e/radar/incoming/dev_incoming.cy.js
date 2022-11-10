describe('Test Dev Radar' , () => {
  //LOGIN
  beforeEach(() => {
  cy.loginDev()
  });
  //TEST 3091
  it('Ask a Question - Submit question', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click();
    cy.get('.MuiInputBase-root > #question').type('Whats is Python?')
    cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
  
  });
 //TEST 3092
  it('Ask a Question - Confirm Expertise', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click();
    cy.get('.MuiInputBase-root > #question').type('Whats is Python?') .as ('ques')
    cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.wait(6000)
    cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiButton-label').click()
     //falta confirmar el popup de enviado
  });
//TEST: 3150, 3151,  Falta porque no aparecen las experiencias
  
//TEST 3136
  it('Ask a Question - More than 10 seconds searching expert', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="questionsLink"] > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()
    cy.contains('quest').should('be.visible')
    cy.get('.jss115 > .MuiCardContent-root > .MuiGrid-container > .jss83 > .MuiGrid-item > .jss92').should('be.visible')
  });
//TEST 3095
  it('Ask a Question - No expertise identified', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click()
    cy.get('.MuiInputBase-root > #question').type('234,4333 l:8888888888')
    cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.wait(5000)//espera, no deja modificar la pregunta
  });

 //TEST: 3137 No se puede avanzar porque 3095 no avanza
//TEST 4599 no aparecen el mensaje 'No experts found'
  it.only('Ask a Question - No experts found', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="questionsLink"] > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()
    
  
  });


})
