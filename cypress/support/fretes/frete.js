Cypress.Commands.add("validateShippingFlow", (parms) => {
  if (
    (!parms.validar && !parms.nome && !parms.sobrenome && !parms.cep) ||
    (parms.validar !== "frete" && parms.validar !== "preço")
  ) {
    throw new Error(
      `Valor incorreto, o '${parms.validar}' não é aceitável, insira "frete" ou "preço".`,
    );
  } else if (parms.validar === "frete") {
    cy.goToShipping();
    cy.get('[data-test="firstName"]').should("be.visible").type(parms.nome);
    cy.get('[data-test="lastName"]').should("be.visible").type(parms.sobrenome);
    cy.get('[data-test="postalCode"]').should("be.visible").type(parms.cep);
    cy.get('[data-test="continue"]').should("be.visible").click();
    cy.get('[data-test="inventory-item"]')
      .should("contain.text", "Sauce Labs Backpack")
      .and("be.visible");
  } else if (parms.validar === "preço") {
    cy.goToShipping();
    cy.get('[data-test="firstName"]').should("be.visible").type(parms.nome);
    cy.get('[data-test="lastName"]').should("be.visible").type(parms.sobrenome);
    cy.get('[data-test="postalCode"]').should("be.visible").type(parms.cep);
    cy.get('[data-test="continue"]').should("be.visible").click();
    cy.get('div[data-test="total-label"]').should("be.visible");
  }
});



