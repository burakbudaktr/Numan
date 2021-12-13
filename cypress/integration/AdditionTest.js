import * as globalNavigations from '../support/globalNavigations'
import * as basicCalculatorHomePage from '../support/basicCalculatorHomePage'


describe('Addition Operator', () => {

    beforeEach(() => {
       globalNavigations.basicCalculatorPage()
      })

    it('Addititon Test with positive numbers', () => {
        var number1=8;
        var number2=9;
        cy.scrollTo(0, 900)
        basicCalculatorHomePage.selectBuild('8')
        basicCalculatorHomePage.firstNumber(number1)
        basicCalculatorHomePage.SecondNumber(number2)
        basicCalculatorHomePage.selectOperation('Add')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', (number2+number1))
    });

    it('Addititon test with negative numbers', () => {
        var number1=-8;
        var number2=-9;
        cy.scrollTo(0, 900)
        basicCalculatorHomePage.selectBuild('8')
        basicCalculatorHomePage.firstNumber(number1)
        basicCalculatorHomePage.SecondNumber(number2)
        basicCalculatorHomePage.selectOperation('Add')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', (number2+number1))
    });

    it('Addititon Test with negative and positive numbers', () => {
        var number1=-8;
        var number2=9;
        cy.scrollTo(0, 900)
        basicCalculatorHomePage.selectBuild('8')
        basicCalculatorHomePage.firstNumber(number1)
        basicCalculatorHomePage.SecondNumber(number2)
        basicCalculatorHomePage.selectOperation('Add')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', (number2+number1))
    });
})