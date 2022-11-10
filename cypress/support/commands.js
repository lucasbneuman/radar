// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



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