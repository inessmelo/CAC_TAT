/// <reference types="Cypress" />

const { visible } = require("ansi-colors")

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
    })
    it('verifica o título da aplicação', () => {
        cy.title().sho
    })
})
