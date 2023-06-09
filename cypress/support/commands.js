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
            })
})

//Select Category of Contacts form
Cypress.Commands.add('category', (option) => {
    cy.get('.label').click().then(()=>{
        cy.get('.selectric-scroll').then(()=>{
            switch (option) {
                case "Financial questions":
                    cy.get(".selectric-below [data-index='1']").click()
                    break;

                case "Game rules":
                    cy.get(".selectric-below [data-index='2']").click()
                    break;

                case "Technical questions":
                    cy.get(".selectric-below [data-index='3']").click()
                    break; 

                case "Bonuses":
                    cy.get(".selectric-below [data-index='4']").click()
                    break;
            }     
        })
    })
})