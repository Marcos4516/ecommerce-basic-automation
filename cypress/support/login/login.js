Cypress.Commands.add("loginUser", (parms) => {
  if (
    (!parms.user && !parms.password && !parms.versao) ||
    (parms.versao !== "desktop" && parms.versao !== "mobile")
  ) {
    throw new Error(
      `Valor incoretto, o '${parms.versao}' não é aceitável, insira "desktop" ou "mobile".`,
    );
  } else if (parms.versao === "desktop") {
    cy.visit("/");
    cy.get("#user-name").should("be.visible").type(parms.user);
    cy.get("#password").should("be.visible").type(parms.password);
    cy.get("#login-button").should("be.visible").click();
  } else if (parms.versao === "mobile") {
    cy.viewport(390, 844);
    cy.visit("/");
    cy.get("#user-name").should("be.visible").type(parms.user);
    cy.get("#password").should("be.visible").type(parms.password);
    cy.get("#login-button").should("be.visible").click();
  }
});

Cypress.Commands.add("loginEmpty", () => {
  cy.visit("/");
  cy.get('[data-test="login-button"]');
  cy.get(".error-message-container").should("be.visible");
  cy.log(`informatico de erro apresentou na tela!`);
});

Cypress.Commands.add("loginIcorrect", () => {
  cy.visit("/");
  cy.visit("/");
  cy.get("#user-name").should("be.visible").type("incorreto");
  cy.get("#password").should("be.visible").type("incorreto");
  cy.get("#login-button").should("be.visible").click();
  cy.get('[data-test="error"]').should("be.visible");
});
