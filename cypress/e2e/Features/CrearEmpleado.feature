Feature: Pruebas de Login
  Background:
    Given El usuario se autentica con usuario "Admin" y password "admin123"


  Scenario: Login exitoso
    When El usuario va a la opcion pip y da click en add para agregar empleado
    And El usuario llena los campos de agregar usuario
    Then El usuario realiza una búsqueda del nuevo empleado