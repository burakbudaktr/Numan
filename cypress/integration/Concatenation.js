import * as globalNavigations from '../support/globalNavigations'
import * as basicCalculatorHomePage from '../support/basicCalculatorHomePage'

describe('Concatenation Operator', () => {

    beforeEach(() => {
        globalNavigations.basicCalculatorPage()
      })

    it('Concatenation test with positive numbers', () => {
        var number1=8;
        var number2=9;
        cy.scrollTo(0, 900)
        basicCalculatorHomePage.selectBuild('8')
        basicCalculatorHomePage.firstNumber(number1)
        basicCalculatorHomePage.SecondNumber(number2)
        basicCalculatorHomePage.selectOperation('Concatenate')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', (`${number2}${number1}`))

    });

    it('Concatenation test with neagative numbers', () => {
        var number1=-8;
        var number2=-9;
        cy.scrollTo(0, 900)
        basicCalculatorHomePage.selectBuild('8')
        basicCalculatorHomePage.firstNumber(number1)
        basicCalculatorHomePage.SecondNumber(number2)
        basicCalculatorHomePage.selectOperation('Concatenate')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', (`${number2}${number1}`))

    });

    it('Concatenation test with positive and negative numbers', () => {
        var number1=8;
        var number2=-9;
        cy.scrollTo(0, 900)
        basicCalculatorHomePage.selectBuild('8')
        basicCalculatorHomePage.firstNumber(number1)
        basicCalculatorHomePage.SecondNumber(number2)
        basicCalculatorHomePage.selectOperation('Concatenate')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', (`${number2}${number1}`))

    });
})