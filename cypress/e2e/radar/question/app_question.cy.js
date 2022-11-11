describe('Ask a Question - APP' , () => {
    //LOGIN
    beforeEach(() => {
      cy.loginApp()
    });
    
    //TEST C3091
    it('"C3091" Ask a Question - Submit question', () => {
        cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click();
        cy.get('.MuiInputBase-root > #question').type('Whats is Python?')
        cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
    });

    //TEST C3092
    it.only('"C3092" Ask a Question - Confirm Expertise', () => {
        cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').   click();
        cy.get('.MuiInputBase-root > #question').type('Whats is Python?').then(($quest)=>{
            const textQuest = $quest.text()
                cy.log(textQuest)
            })   
        cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(6000)
        cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiButton-label').click()
     
    });

    //TEST C3150
    //TEST C3151

    //TEST C3136
    it('"C3136" Ask a Question - More than 10 seconds searching expert', () => {
        cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="questionsLink"] > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()      
        cy.get('.MuiContainer-root').contains("Whats is Python?")
        cy.get('.jss129 > .MuiCardContent-root > .MuiGrid-container > .jss111 > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click()
    });

    //TEST C3095
    it('"C3095"Ask a Question - No expertise identified', () => {
        cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click()
        cy.get('.MuiInputBase-root > #question').type('234,4333 l:8888888888')
        cy.get('.MuiFormGroup-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(6000)
        //Queda en espera, no deja modificar la pregunta
    });

    //TEST C3137
    //TEST C4599
})