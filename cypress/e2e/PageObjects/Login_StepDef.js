import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given ('Usuario va a la pagina principal',()=>{
    cy.visit("/")
})