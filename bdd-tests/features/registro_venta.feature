Feature: Registro de Ventas

  Scenario: Registro de venta exitoso
    Given estoy en la página de registro de ventas
    When selecciono un cliente válido
    And selecciono un método de pago
    And agrego un producto con cantidad y precio
    And envío el formulario de venta
    Then debería ver un mensaje de éxito en venta

  Scenario: Registro de venta con campos obligatorios faltantes
    Given estoy en la página de registro de ventas
    When intento enviar el formulario sin seleccionar un cliente
    Then el botón de envío debería estar deshabilitado

  Scenario: Registro de venta con cantidad de producto insuficiente
    Given estoy en la página de registro de ventas
    When selecciono un cliente válido
    And selecciono un método de pago
    And agrego un producto con cantidad insuficiente
    Then el botón de envío debería estar deshabilitado

