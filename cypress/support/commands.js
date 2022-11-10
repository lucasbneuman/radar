//App Radar Login 
Cypress.Commands.add('loginApp',()=>{
    cy.visit("https://app.radar4.io/");
    cy.get("#email").type("emmanuel.ayala@accelone.com").should;
    cy.get("#password").type("test1234").should;
    cy.get(".MuiButton-label").click();
})

//Dev Radar Login 
Cypress.Commands.add('loginDev',()=>{
    cy.visit("https://dev.radar4.io/");
    cy.get("#email").type("emmanuel.ayala@accelone.com").should;
    cy.get("#password").type("test1234").should;
    cy.get(".MuiButton-label").click();
})