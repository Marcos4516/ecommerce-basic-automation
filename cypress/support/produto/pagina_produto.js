Cypress.Commands.add("goToProduct", (parms) => {
  if (
    !parms.versao ||
    (parms.versao !== "desktop" && parms.versao !== "mobile")
  ) {
    throw new Error(
      `Valor incorreto, o '${parms.versao}' não é aceitável, insira "desktop" ou "mobile"`,
    );
  } else if (parms.versao === "desktop") {
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]')
      .should("be.visible")
      .click();
    cy.location("pathname").should("eq", "/inventory-item.html");
  } else if (parms.versao === "mobile") {
    cy.viewport(390, 844);
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]')
      .should("be.visible")
      .click();
    cy.location("pathname").should("eq", "/inventory-item.html");
  }
});

Cypress.Commands.add("validadeInfProduct", (parms) => {
  if (
    !parms.versao ||
    (parms.versao !== "desktop" && parms.versao !== "mobile")
  ) {
    throw new Error(
      `Valor incorreto, o '${parms.versao}' não é aceitável, insira "desktop" ou "mobile"`,
    );
  } else if (parms.versao === "desktop") {
    cy.get('[data-test="inventory-item-name"]').should("be.visible");
    cy.log(`Título do produto visível na tela!`);
    cy.get('[data-test="inventory-item-desc"]').should("be.visible");
    cy.log(`sub-descrição do produto visível na tela`);
    cy.get('[data-test="inventory-item-price"]').should("be.visible");
    cy.log(`Preço do produto visível na tela!`);
    cy.get('[data-test="add-to-cart"]').should("be.visible");
    cy.log(`Botão de adicionar no carrinho visível na tela!`);
  } else if (parms.versao === "mobile") {
    cy.viewport(390, 844);
    cy.get('[data-test="inventory-item-name"]').should("be.visible");
    cy.log(`Título do produto visível na tela!`);
    cy.get('[data-test="inventory-item-desc"]').should("be.visible");
    cy.log(`sub-descrição do produto visível na tela`);
    cy.get('[data-test="inventory-item-price"]').should("be.visible");
    cy.log(`Preço do produto visível na tela!`);
    cy.get('[data-test="add-to-cart"]').should("be.visible");
    cy.log(`Botão de adicionar no carrinho visível na tela!`);
  }
});
