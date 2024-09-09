# Conhecendo a Aplicação
A aplicação se chama Central de Atendimento ao Cliente TAT - [CAC TAT](https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html) - e foi desenvolvida usando HTML, CSS e JavaScript.

## Funcionalidades da aplicação
A Aplicação CAC TAT simula o envio de mensagens para uma central de atendimento ao cliente.

### Campos obrigatórios
Os seguintes campos são obrigatórios e devem ser preenchidos antes do envio do formulário:

- Nome (campo do tipo de texto)
- Sobrenome (campo do tipo de texto)
- E-mail (campo do tipo e-mail, com validação)
- Como podemos te ajudar? Algum elogio ou feedback para nós? (campo de área de texto)

### Outros campos
Além dos campos obrigatórios, o “cliente” pode inserir:

- Telefone (campo do tipo número)
- Produto (campo suspenso com as opções: Blog, Cursos, Mentoria ou YouTube)
- Tipo de atendimento (campos do tipo radio com as opções: Ajuda, Elogio ou Feedback)
- Meio de contato preferencial (caixa de seleção com as opções: E-mail e/ou Telefone)
- Adicione um anexo (campo do tipo arquivo)

### Regras dos meios de contato preferenciais
- Quando a caixa de seleção do telefone é marcada, o input do número de telefone torna-se obrigatória
- Ao desmarcar a caixa de seleção do telefone, a inserção do número de telefone deixa de ser obrigatória


### Política de Privacidade
Ao clicar no link [Política de Privacidade](https://cac-tat-v3.s3.eu-central-1.amazonaws.com/privacy.html) na parte inferior da página, ela abre em uma nova aba do navegador.

### Mensagens
⚠️ Caso haja algum problema relacionado aos campos obrigatórios, a seguinte mensagem é exibida com fundo roxo: `Validar os campos obrigatórios!`

✅ Quando o formulário é enviado com sucesso, a seguinte mensagem é exibida com fundo cinza: `Mensagem enviada com sucesso.` Além disso, todos os campos voltam ao seu estado inicial.

> Ambas as mensagens são exibidas por apenas três segundos. Depois disso, elas desaparecem.


---
# Pré-requisitos
Para rodar a automação no seu computar, há sistemas que precisam estar instalados e conhecimentos prévios necessários, os quais são listados abaixo.


## Sistemas
Antes de começar, certifique-se de que os seguintes sistemas estejam instalados em seu computador.

- git (2.42.1 no momento da redação deste artigo)
- Node.js (v20.13.1 no momento da redação deste artigo)
- npm (10.8.1 no momento da redação deste artigo)
- Visual Studio Code (v1.90.2 no momento da redação deste artigo) ou alguma outra IDE de sua preferência

> **Obs. 1**: Recomendo usar as mesmas versões ou versões mais recentes de suporte de longo prazo (LTS) dos sistemas listados acima.   
> **Obs. 2**: Ao instalar o Node.js, o npm é instalado junto. 🎉   
> **Obs. 3**: Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` em seu terminal de linha de comando.   
> **Obs. 4**: Deixei links para os instaladores na lista de requisitos acima, caso você ainda não os tenha instalados.  


---
# Instalando
1. Na raiz do projeto, execute o comando npm install cypress@13.12.0 --save-dev (ou npm i cypress@13.12.0 -D para a versão curta).    
2. Execute o comando npx cypress open para abrir o Cypress pela primeira vez e deixe-o guiá-lo na criação de uma suite de testes de ponta a ponta (E2E).    
3. Por fim, com a Cypress App aberta, crie um arquivo chamado CAC-TAT.cy.js e feche a Cypress App.    

> Obs. 2: Quando iniciado pela primeira vez, o Cypress cria automaticamente o arquivo `cypress.config.js` e o diretório `cypress/`, com seus subdiretórios `e2e/`, `fixtures/` e `support/`, com seus respectivos arquivos.

## Configuração Extra
- Atualize o arquivo `cypress.config.js` da seguinte maneira.

```javascript
  const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
})
```