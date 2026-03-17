Feature: Flujo de compra en Sauce Demo

  Background:
    # El Background se ejecuta antes de cada escenario del feature
    Given el usuario está en la página de login
    And ingresa usuario "standard_user" y contraseña "secret_sauce"

  Scenario: Agregar producto al carrito
    When agrega un producto al carrito
    Then el carrito debe mostrar 1 producto

  Scenario: Completar proceso de compra
    When agrega un producto al carrito
    And va al carrito
    And procede al checkout
    And completa los datos de envío "John" "Doe" "12345"
    And confirma la compra
    Then debe ver el mensaje de confirmación "Thank you for your order!"