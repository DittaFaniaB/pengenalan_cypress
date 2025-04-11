describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
 })

  it('[TC001] User berhasil membuka page login', () => {
    var logo = cy.get('.login_logo');
    logo.should('be.visible');
  })
  it.skip('[TC002] Berhasil Login dengan credential yang benar', () => {
    
  })
  it('[TC002] User berhasil Login dengan credential yang benar', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.app_logo').should('be.visible');
  })
  it('[TC003] User tidak dapat login dengan field kosong', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required');
  })
})