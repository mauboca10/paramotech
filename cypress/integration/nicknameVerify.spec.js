/// <reference types="cypress" />
import {home, profileElements} from '../fixtures/elements.json'
import {loginData} from '../fixtures/loginData.json'


describe('Verify Nickname in profile user info', () => {

    it('Should go to the profile settings menu', () => {
        cy.session('prueba', () => {
            //Visit Login page
            cy.visit('/user/login')
            
            //Accept pop up
            cy.contains("Got it").click()
            
            //Type user name and password
            cy.login(loginData.user, loginData.password)
            
            //Getting profile menu
            cy.contains(profileElements.userProfileBtn).click()
            cy.get(profileElements.goToProfileBtn).click()
            
            //Go to user profile setting page
            cy.contains(profileElements.profileSettingsBtn).click()
            
            //Verify nickname value
            cy.get(profileElements.nickName).should('have.value', 'passionate_winner_23203219')
        })   
    })
})