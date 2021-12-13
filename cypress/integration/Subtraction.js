import * as globalNavigations from '../support/globalNavigations'
import * as basicCalculatorHomePage from '../support/basicCalculatorHomePage'

describe('Subtraction Operator', () => {

    beforeEach(() => {
        globalNavigations.basicCalculatorPage()
       })
 
     it('Subtraction Test with positive numbers', () => {
         var number1=8;
         var number2=9;
         cy.scrollTo(0, 900)
         basicCalculatorHomePage.selectBuild('8')
         basicCalculatorHomePage.firstNumber(number1)
         basicCalculatorHomePage.SecondNumber(number2)
         basicCalculatorHomePage.selectOperation('Subtract')
         cy.get('#calculateButton').click()
         cy.get('#numberAnswerField').should('have.value', (number2-number1))
     });
 
     it('Subtraction  test with negative numbers', () => {
         var number1=-8;
         var number2=-9;
         cy.scrollTo(0, 900)
         basicCalculatorHomePage.selectBuild('8')
         basicCalculatorHomePage.firstNumber(number1)
         basicCalculatorHomePage.SecondNumber(number2)
         basicCalculatorHomePage.selectOperation('Subtract')
         cy.get('#calculateButton').click()
         cy.get('#numberAnswerField').should('have.value', (number2-number1))
     });
 
     it('Subtraction  Test with negative and positive numbers', () => {
         var number1=-8;
         var number2=9;
         cy.scrollTo(0, 900)
         basicCalculatorHomePage.selectBuild('8')
         basicCalculatorHomePage.firstNumber(number1)
         basicCalculatorHomePage.SecondNumber(number2)
         basicCalculatorHomePage.selectOperation('Subtract')
         cy.get('#calculateButton').click()
         cy.get('#numberAnswerField').should('have.value', (number2-number1))
     });
})