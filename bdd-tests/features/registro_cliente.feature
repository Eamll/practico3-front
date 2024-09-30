Feature: Registro de Usuario

  Scenario: Registro exitoso
    Given estoy en la página de registro
    When lleno el formulario de registro
    And envío el formulario
    Then debería ver un mensaje de éxito

  Scenario: Registro con campos requeridos faltantes
    Given estoy en la página de registro
    When lleno el formulario de registro con campos faltantes
    Then el botón de envío debería estar deshabilitado

  Scenario: Registro con un correo electrónico inválido
    Given estoy en la página de registro
    When lleno el formulario de registro con un correo electrónico inválido
    Then el botón de envío debería estar deshabilitado
