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

  it("filtrar por preço maior", () => {});

  it("filtrar por preço menor", () => {});

  it("filtrar por A a Z", () => {});

  it("filtrar por Z a A", () => {});
});

describe("Validar filtros de produtos - mobile", () => {
  it("filtrar por preço maior", () => {});

  it("filtrar por preço menor", () => {});

  it("filtrar por A a Z", () => {});

  it("filtrar por Z a A", () => {});
});
