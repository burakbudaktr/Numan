

export function firstNumber(number1) {
    cy.get('#number1Field').type(number1)
}

export function SecondNumber(number2) {
    cy.get('#number2Field').type(number2)
}

export function selectBuild(build) {
    cy.get('#selectBuild').select(build)
}

export function selectOperation(operations) {
    cy.get('#selectOperationDropdown').select(operations)
}