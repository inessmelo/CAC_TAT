// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('cadFirstName', (firstName) => {
    cy.get('#firstName').should('be.visible').type(firstName, { delay: 0 }).should('have.value', firstName)
})

Cypress.Commands.add('cadLastName', (lastName) => {
    cy.get('#lastName').should('be.visible').type(lastName, { delay: 0 }).should('have.value', lastName)
})

Cypress.Commands.add('cadEmail', (email) => {
    cy.get('#email').should('be.visible').type(email, { delay: 0 }).should('have.value', email)
})

Cypress.Commands.add('cadPhone', (phone) => {
    cy.get("label[for='phone']").should('be.visible', 'style="display: none;"')
    cy.get('#phone-checkbox').check().should('be.checked')
    cy.get("label[for='phone']").should("be.visible", 'style="display: inline;"', ' (obrigatório)')
    cy.get("#phone").should('be.visible').type(phone, { delay: 0 }).should('have.value', phone)
})

Cypress.Commands.add('cadPhoneInvalid', (phone, resultPhone) => {
    cy.get("label[for='phone']").should('be.visible', 'style="display: none;"')
    cy.get('#phone-checkbox').check().should('be.checked')
    cy.get("label[for='phone']").should("be.visible", 'style="display: inline;"', ' (obrigatório)')
    cy.get("#phone").should('be.visible').type(phone, { delay: 0 }).clear().should('have.value', resultPhone)
})

Cypress.Commands.add('cadProduct', (value, options) => {
    cy.get('#product').should('be.visible').select(value)
        .should('have.value', options)
})
/*
Cypress.Commands.add('cadAtend', (value, options) => {
    cy.get('input[type="radio"][value=value]').should('be.visible').check(value)
        .should('be.checked', options)
})
*/
Cypress.Commands.add('cadPraise', (praise) => {
    cy.get('#open-text-area').should('be.visible').type(praise, { delay: 0 }).should('have.value', praise)
})

Cypress.Commands.add('cadSuccess', () => {
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.get('span[class="success"]').should('be.visible', 'Mensagem enviada com sucesso.')
})

Cypress.Commands.add('cadError', () => {
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.get('span[class="error"]').should('be.visible', 'Valide os campos obrigatórios!')
})

Cypress.Commands.add('cadFormSuccess', () => {
    cy.get('#firstName').should('be.visible').type('Teste', { delay: 0 }).should('have.value', 'Teste')
    cy.get('#lastName').should('be.visible').type('QA', { delay: 0 }).should('have.value', 'QA')
    cy.get('#email').should('be.visible').type('teste@qa.com', { delay: 0 }).should('have.value', 'teste@qa.com')
    cy.get('#open-text-area').should('be.visible').type('Aqui será um teste de qualidade', { delay: 0 }).should('have.value', 'Aqui será um teste de qualidade')
    cy.get('button[type="submit"]').should('be.visible').click()
})
