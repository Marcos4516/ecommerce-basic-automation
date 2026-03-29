describe("Validar fretes - desktop", () => {
  const usuario = Cypress.env("user");
  const senha = Cypress.env("password");

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginUser({
      user: usuario,
      password: senha,
      versao: "desktop"
    });
  });

  it("validar shipping", () => {
    cy.validateShippingFlow({
      validar: "frete",
      nome: "Marcos",
      sobrenome: "Montenegro",
      cep: "74495220",
    });
  });

  it("validar price", () => {
    cy.validateShippingFlow({
      validar: "preço",
      nome: "Marcos",
      sobrenome: "Montenegro",
      cep: "74495220",
    });
  });
});

describe("Validar fretes - mobile", () => {
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

  it("validar shipping", () => {
    cy.validateShippingFlow({
      validar: "frete",
      nome: "Marcos",
      sobrenome: "Montenegro",
      cep: "74495220",
    });
  });

  it("validar price", () => {
    cy.validateShippingFlow({
      validar: "preço",
      nome: "Marcos",
      sobrenome: "Montenegro",
      cep: "74495220",
    });
  });
});
