describe("Fluxo login", () => {
  const usuario = Cypress.env("user");
  const senha = Cypress.env("password");
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Logar usuário com sucesso - desktop", () => {
    cy.loginUser({
      user: usuario,
      password: senha,
      versao: "desktop",
    });
  });

  it("Logar usuário com sucesso - mobile", () => {
    cy.loginUser({
      user: usuario,
      password: senha,
      versao: "mobile",
    });
  });

  it("Tentar logar com campos vazios", () => {
    cy.loginEmpty();
  });

  it("Tentar logar com usuario e senha incorretos", () => {
    cy.loginIcorrect();
  });
});
