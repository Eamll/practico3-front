Feature: Registro de Ventas

  Scenario: Registro de venta exitoso
    Given estoy en la página de registro de ventas
    When selecciono un cliente válido
    And selecciono un método de pago
    And agrego un producto con cantidad y precio
    And envío el formulario de venta
    Then debería ver un mensaje de éxito en venta

