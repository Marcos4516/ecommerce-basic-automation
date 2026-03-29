Cypress.Commands.add("loginUser", (parms) => {
  cy.visit("/");
  cy.get("#user-name").should("be.visible").type(parms.user);
  cy.get("#password").should("be.visible").type(parms.password);
  cy.get("#login-button").should("be.visible").click();
});

Cypress.Commands.add("loginUser", (parms) => {
  cy.viewport(390, 844);
  cy.visit("/");
  cy.get("#user-name").should("be.visible").type(parms.user);
  cy.get("#password").should("be.visible").type(parms.password);
  cy.get("#login-button").should("be.visible").click();
});
