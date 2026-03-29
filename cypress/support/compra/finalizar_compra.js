Cypress.Commands.add("finalizePurchase", () => {
  cy.goToCheckout({
    validar: "frete",
    nome: "Marcos",
    sobrenome: "Montenegro",
    cep: "74495220",
  });
  cy.get('[data-test="finish"]').should("be.visible").click();
  cy.contains("h2", "Thank you for your order!").should("be.visible");
});
