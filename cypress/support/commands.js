//Command for selecting currency value
Cypress.Commands.add('currencyOption', (option) => {
            cy.get(".form__section--registration > div:nth-of-type(3) > .input__wrapper").click().then(()=>{
                cy.get('.selectric-scroll').then(()=>{
                    switch (option) {
                        case "USD":
                            cy.get(".selectric-below [data-index='0']").click()
                            break;

                        case "EUR":
                            cy.get(".selectric-below [data-index='1']").click()
                            break;

                        case "ILS":
                            cy.get(".selectric-below [data-index='2']").click()
                            break; 

                        case "mLTC":
                            cy.get(".selectric-below [data-index='3']").click()
                            break;

                        case "mDOGE":
                            cy.get(".selectric-below [data-index='4']").click()
                            break;

                        case "mBCH":
                            cy.get(".selectric-below [data-index='5']").click()
                            break;

                        case "mETH":
                            cy.get(".selectric-below [data-index='6']").click()
                            break;

                        case "RUB":
                            cy.get(".selectric-below [data-index='7']").click()
                            break;

                        case "BYR":
                            cy.get(".selectric-below [data-index='8']").click()
                            break;
                    }
                        
                        
                })
                cy.contains('1000 EUR').should('be.visible')
            })
})

//Command for selecting Secret question option
Cypress.Commands.add('secretQuestion', (option) => {
    cy.get('.selectric--placeholder').click().then(()=>{
        cy.get('.selectric-items').then( () => {
            cy.get(".selectric-below [data-index=" + option + "]").last().click()
        })
    })
})

//Command for handle captchaV2
Cypress.Commands.add('clickRecaptcha', () => {
    cy.window().then(win => {
        win.document
            .querySelector("iframe[src*='recaptcha']")
            .contentDocument.getElementById("recaptcha-token")
            .click()
    })
})

//Command for doing successful Login
Cypress.Commands.add('login', (user, password) => {
        cy.get("[data-test='input-username']").type(user)
        cy.get("[data-test='input-password']").type(password)
        cy.get("[data-test= 'control-submit']").click()
})