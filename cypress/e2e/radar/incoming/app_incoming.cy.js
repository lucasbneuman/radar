describe('Incoming Request - APP' , () => {
  //LOGIN
  beforeEach(() => {
    cy.loginApp()
  });
  //TEST 3091
  it('"3091" Ask a Question - Submit question', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click();
    cy.get('.MuiInputBase-root > #question').type('Whats is Python?')
    cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
  
  });
 //TEST 3092
  it.only('"3092" Ask a Question - Confirm Expertise', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click();
    cy.get('.MuiInputBase-root > #question').type('Whats is Python?').then(($quest)=>{
        const textQuest = $quest.text()
        cy.log(textQuest)
    })   
    cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.wait(6000)
    cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiButton-label').click()
     
  });
  
//TEST 3136
  it('"3136" Ask a Question - More than 10 seconds searching expert', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="questionsLink"] > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()      
    cy.get('.MuiContainer-root').contains("Whats is Python?")
    cy.get('.jss129 > .MuiCardContent-root > .MuiGrid-container > .jss111 > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click()
  });
//TEST 3095
  it('"3095"Ask a Question - No expertise identified', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click()
    cy.get('.MuiInputBase-root > #question').type('234,4333 l:8888888888')
    cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.wait(6000)
    //Queda en espera, no deja modificar la pregunta
  });

  //TEST 3199
  it('"3199" Outgoing Questions - Without pending/active questions', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click()
    cy.get('.MuiContainer-root').contains("You don't have pending questions")
    cy.get('.Mui-selected > .MuiTab-wrapper').click()
    cy.get('.MuiContainer-root').contains("You don't have active questions")
  });
//TEST 3201
  it('"3201" Outgoing Questions - With pending/active read and unread question',() => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > .jss28 > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()
    cy.get('.Mui-selected > .MuiTab-wrapper').click()    
  })
//TEST 3207
  it('"3207" Outgoing Questions - Open pending question (waiting expert)', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="questionsLink"] > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()
    cy.get('.MuiCardContent-root > .MuiGrid-container').click()
  });

//TEST 3210 Error
//TEST 3212 Error
//TEST 3213

//TEST 3200
//TEST 3202
//TEST 3203
//TEST 3204
//TEST 3205
//TEST 4596
//TEST 4397
//TEST 4598
//TEST 3206
//TEST 3211


 //TEST: 3137 No se puede avanzar porque 3095 no avanza
//TEST 4599 no aparecen el mensaje 'No experts found'
  it('Ask a Question - No experts found', () => {
    cy.get('.jss51 > :nth-child(1) > .MuiList-root > .jss28 > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()

  });
reportar: 'mochawesome'
})
