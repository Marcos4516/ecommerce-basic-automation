describe("Validar filtros de produtos - desktop", () => {
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

  it("filtrar por preço maior", () => {
    cy.filterProducts({
      preco: "maior",
    });
  });

  it("filtrar por preço menor", () => {
    cy.filterProducts({
      preco: "menor",
    });
  });

  it("filtrar por A a Z", () => {
    cy.filterProducts({
      ordem: "AZ",
    });
  });

  it("filtrar por Z a A", () => {
    cy.filterProducts({
      ordem: "ZA",
    });
  });
});

describe("Validar filtros de produtos - mobile", () => {
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

  it("filtrar por preço maior", () => {
    cy.filterProducts({
      preco: "maior",
    });
  });

  it("filtrar por preço menor", () => {
    cy.filterProducts({
      preco: "menor",
    });
  });

  it("filtrar por A a Z", () => {
    cy.filterProducts({
      ordem: "AZ",
    });
  });

  it("filtrar por Z a A", () => {
    cy.filterProducts({
      ordem: "ZA",
    });
  });
});
