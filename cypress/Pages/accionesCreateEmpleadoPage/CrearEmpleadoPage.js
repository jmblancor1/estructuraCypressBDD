class CrearEmpleadoPage{
    static visitarUrl(){
        cy.visit("/auth/login")
    }
    static login(usuario,password){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(usuario)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
        cy.get('.oxd-button').click()
    }
    static accederPip(){
        cy.visit("/pim/viewEmployeeList")
    }
    static irBotonAdd (){
        cy.get('.orangehrm-header-container > .oxd-button').click()
    }
    static diligenciarCrearEmpleado(){
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Alexander')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Eduardo')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ramirez')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
            .type('0985')
        cy.get('.oxd-switch-input').click()
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('AlexEduardo')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('a123456')
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('a123456')

    }
    static clickBotonSave(){
        cy.get('.oxd-button--secondary').click()
    }
    static consultarEmpleadoId(){
        cy.get(':nth-child(2) > .oxd-input').type('0985')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('have.text','0985')
    }


}
export default CrearEmpleadoPage