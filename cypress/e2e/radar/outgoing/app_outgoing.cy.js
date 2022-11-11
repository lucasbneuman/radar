describe('Outgoing Question - APP' , () => {
    //LOGIN
    beforeEach(() => {
        cy.loginApp()
    });

    //TEST C3199
    it('"C3199" Outgoing Questions - Without pending/active questions', () => {
        cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="askLink"] > .MuiListItem-root').click()
        cy.get('.MuiContainer-root').contains("You don't have pending questions")
        cy.get('.Mui-selected > .MuiTab-wrapper').click()
        cy.get('.MuiContainer-root').contains("You don't have active questions")
    });
    
    //TEST C3201
    it('"C3201" Outgoing Questions - With pending/active read and unread question',() => {
        cy.get('.jss51 > :nth-child(1) > .MuiList-root > .jss28 > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()
        cy.get('.Mui-selected > .MuiTab-wrapper').click()    
    })
    
    //TEST C3207
    it('"C3207" Outgoing Questions - Open pending question (waiting expert)', () => {
        cy.get('.jss51 > :nth-child(1) > .MuiList-root > [name="questionsLink"] > .MuiGrid-container > .MuiGrid-root > .MuiListItem-root').click()
        cy.get('.MuiCardContent-root > .MuiGrid-container').click()
    });

    //TEST 3210 Error
    //TEST 3212 Error
    //TEST 3213


})