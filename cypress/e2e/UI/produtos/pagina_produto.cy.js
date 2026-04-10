describe("Fluxo página do produto - desktop", () => {
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

  it("Validar informações na página do produto", () => {
    cy.goToProduct({ versao: "desktop" });
    cy.validadeInfProduct({ versao: "desktop" });
  });
});

describe("Fluxo página do produto - mobile", () => {
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

  it("Validar informações na página do produto", () => {
    cy.goToProduct({ versao: "mobile" });
    cy.validadeInfProduct({ versao: "mobile" });
  });
});
