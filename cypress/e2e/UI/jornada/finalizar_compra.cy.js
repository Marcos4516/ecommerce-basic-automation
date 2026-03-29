describe("Fluxo completo de compra do cliente - desktop", () => {
  const usuario = Cypress.env("user");
  const senha = Cypress.env("password");

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginUser({
      user: usuario,
      password: senha,
      versao: "desktop",
    });
  });

  it("Deve finalizar a compra", () => {
    cy.finalizePurchase();
  });
});

describe("Fluxo completo de compra do cliente - mobile", () => {
  const usuario = Cypress.env("user");
  const senha = Cypress.env("password");

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginUser({
      user: usuario,
      password: senha,
      versao: "mobile",
    });
  });

  it("Deve finalizar a compra", () => {
    cy.finalizePurchase();
  });
});
