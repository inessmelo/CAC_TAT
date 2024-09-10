/// <reference types="Cypress" />

const { visible } = require("ansi-colors")
const { delay } = require("bluebird")

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
    })
    it('Validar o título da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Validar os campos obrigatórios', () => {
        cy.cadError()
    })

    it('Validar envio de formulário com sucesso', () => {
        cy.cadFormSuccess()
        cy.cadSuccess()
    })

    it('Validar envio de formulário com email inválido', () => {
        cy.cadFirstName('Teste')
        cy.cadLastName('QA')
        cy.cadEmail('teste#qa.com')
        cy.cadPraise('Aqui será um teste de qualidade')
        cy.cadError()
    })

    it('Validar texto no campo Telefone', () => {
        cy.cadPhoneInvalid('Teste', '')
    })

    it('Validar obrigatoriedade no campo Telefone', () => {
        cy.cadFirstName('Teste')
        cy.cadLastName('QA')
        cy.cadEmail('teste@qa.com')
        cy.cadPhone('21999999999')
        cy.cadPraise('Aqui será um teste de qualidade')
        cy.cadSuccess()
    })

    it('Limpar os campos obrigatorios', () => {
        cy.cadFirstName('Teste').clear().should('have.value', '')
        cy.cadLastName('QA').clear().should('have.value', '')
        cy.cadEmail('teste@qa.com').clear().should('have.value', '')
        cy.cadPhone('21999999999').clear().should('have.value', '')
        cy.cadPraise('Aqui será um teste de qualidade').clear().should('have.value', '')
        cy.cadError()
    })

    it('Validar cadastro selecionando um Produto Youtube', () => {
        cy.cadFirstName('Teste')
        cy.cadLastName('QA')
        cy.cadEmail('teste@qa.com')
        cy.cadPhone('21999999999')
        cy.cadProduct('youtube', 'youtube')
        cy.cadPraise('Aqui será um teste de qualidade')
        cy.cadSuccess()
    })

    it('Validar cadastro selecionando um Produto Mentoria', () => {
        cy.cadFirstName('Teste')
        cy.cadLastName('QA')
        cy.cadEmail('teste@qa.com')
        cy.cadPhone('21999999999')
        cy.cadProduct('Mentoria', 'mentoria')
        cy.cadPraise('Aqui será um teste de qualidade')
        cy.cadSuccess()
    })

    it('Validar cadastro selecionando um Produto Blog', () => {
        cy.cadFirstName('Teste')
        cy.cadLastName('QA')
        cy.cadEmail('teste@qa.com')
        cy.cadPhone('21999999999')
        cy.cadProduct(1, 'blog')
        cy.cadPraise('Aqui será um teste de qualidade')
        cy.cadSuccess()
    })

    it('Validar cadastro selecionando Atendimento Feedback', () => {
        cy.cadFirstName('Teste')
        cy.cadLastName('QA')
        cy.cadEmail('teste@qa.com')
        cy.cadPhone('21999999999')
        cy.cadProduct(1, 'blog')

        cy.get('input[type="radio"][value="feedback"]').should('be.visible')
            .check()
            .should('be.checked', 'feedback')

        cy.cadPraise('Aqui será um teste de qualidade')
        cy.cadSuccess()
    })

    it('Validar cadastro selecionando todos os Atendimentos', () => {
        cy.cadFirstName('Teste')
        cy.cadLastName('QA')
        cy.cadEmail('teste@qa.com')
        cy.cadPhone('21999999999')
        cy.cadProduct(1, 'blog')

        cy.get('input[type="radio"]').should('be.visible')
            .should('have.length', 3)
            .each(($radio) => {
                cy.wrap($radio).check()
            })
            .check().should('be.checked', 'feedback')

        cy.cadPraise('Aqui será um teste de qualidade')
        cy.cadSuccess()
    })


})
