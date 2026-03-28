describe("Validar fretes - desktop", () => {
  const usuario = Cypress.env("user");
  const senha = Cypress.env("password");

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginUser({
      user: usuario,
      password: senha,
    });
  });

  it.only("validar shipping", () => {
    cy.validateShippingFlow({
      validar: "frete",
      nome: "Marcos",
      sobrenome: "Montenegro",
      cep: "74495220",
    });
  });

  it.only("validar price", () => {
    cy.validateShippingFlow({
      validar: "preço",
      nome: "Marcos",
      sobrenome: "Montenegro",
      cep: "74495220",
    });
  });
});

describe("Validar fretes - mobile", () => {
  it("validar shipping", () => {});

  it("validar price", () => {});
});
