Cypress.Commands.add("filterProducts", (parms) => {
  if (
    (!parms.ordem && !parms.preco) ||
    (parms.ordem !== "AZ" &&
      parms.ordem !== "ZA" &&
      parms.preco !== "maior" &&
      parms.preco !== "menor")
  ) {
    throw new Error(
      `Valor incorreto, o '${(parms.ordem, parms.preco)}' não é aceitável, insira "AZ" ou "ZA" para 'ordem' e "maior" ou "menor" para 'preco'.`,
    );
  } else if (parms.ordem === "AZ") {
    cy.location("pathname").should("eq", "/inventory.html");
    cy.get('[data-test="product-sort-container"]')
      .should("be.visible")
      .select("Name (A to Z)");
    cy.get(
      '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]',
    )
      .eq(0)
      .should("contain.text", "Sauce Labs Backpack")
      .and("be.visible");
  } else if (parms.ordem === "ZA") {
    cy.location("pathname").should("eq", "/inventory.html");
    cy.get('[data-test="product-sort-container"]')
      .should("be.visible")
      .select("Name (Z to A)");
    cy.get(
      '[data-test="item-3-title-link"] > [data-test="inventory-item-name"]',
    )
      .eq(0)
      .should("contain.text", "Test.allTheThings() T-Shirt (Red)")
      .and("be.visible");
  } else if (parms.preco === "maior") {
    cy.location("pathname").should("eq", "/inventory.html");
    cy.get('[data-test="product-sort-container"]')
      .should("be.visible")
      .select("Price (high to low)");
    cy.get('div[data-test="inventory-item-price"]')
      .eq(0)
      .should("contain.text", "49.99")
      .and("be.visible");
  } else if (parms.preco === "menor") {
    cy.location("pathname").should("eq", "/inventory.html");
    cy.get('[data-test="product-sort-container"]')
      .should("be.visible")
      .select("Price (low to high)");
    cy.get('div[data-test="inventory-item-price"]')
      .eq(0)
      .should("contain.text", "7.99")
      .and("be.visible");
  }
});
