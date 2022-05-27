/// <reference types="cypress" />
import {home, registerEl} from '../fixtures/elements.json'
import {registerData} from '../fixtures/registerData.json'

let newEmail
let newUserLogin


describe('Register User', () => {

    before(() => {
        let max = 1000;
        cy.task("randomNumber", max ).then(number => {
            let numberRandom = number
            let numberstring = numberRandom.toString()
            newEmail = registerData.email + numberstring + "@gmail.com"
            newUserLogin = registerData.userLogin + numberstring
        })
    })
  
    it('Should register new user successfully', () => {
        cy.session('Register', () => {
            //Visit home page
            cy.visit("/")

            //Accept pop up
            cy.contains("Got it").click()
            
            //Click on sing up botton
            cy.get(home.singUpBtn).click()
            
            //Verify URL - -  Registration page
            cy.url().should('eq', 'https://demo.casino/user/registration')
            
            //Verify switch Email is enabled
            cy.get(registerEl.email).should("be.enabled")
            
            //Type user email
            cy.get(registerEl.email).type(newEmail)
            
            //Type user password
            cy.get(registerEl.password).type(registerData.password)
            
            //Reeconfirmate user password 
            cy.get(registerEl.reenterPassword).type(registerData.reenterPassword)
            
            //Select EUR currency
            cy.currencyOption('EUR')
            
            //Accept Terms and Conditions
            cy.get(registerEl.checkTyC).click()
            
            //Select secret question -- 
            cy.secretQuestion(4)
            
            //Verify if box of secret question input is enabled
            cy.get(registerEl.answerToSecretQuestion).should('be.enabled')
            
            //Type response for secret question
            cy.get(registerEl.answerToSecretQuestion).type(registerData.answerSecretQuestion)
            
            //Type name user alias
            cy.get(registerEl.userLogin).type(newUserLogin)
            
            //Submit form
            cy.get(registerEl.createAccountBtn).click()
            
            //Verify successful seregistry 
            cy.contains('Congratulations!').should("have.class", "notification__title")
        })
    })
  })