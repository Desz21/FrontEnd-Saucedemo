Feature: Flujo de compra en Sauce Demo

  Background:
    Given el usuario está en la página de login
    And ingresa usuario "standard_user" y contraseña "secret_sauce"

  # Prueba agregar diferentes cantidades de productos
  Scenario Outline: Agregar productos al carrito
    When agrega "<cantidad>" productos al carrito
    Then el carrito debe mostrar "<cantidad>" productos

    Examples:
      | cantidad |
      | 1        |
      | 2        |

  # Prueba el checkout con diferentes datos de envío
  Scenario Outline: Completar compra con diferentes datos de envío
    When agrega un producto al carrito
    And va al carrito
    And procede al checkout
    And completa los datos de envío "<nombre>" "<apellido>" "<codigo>"
    And confirma la compra
    Then debe ver el mensaje de confirmación "Thank you for your order!"

    Examples:
      | nombre  | apellido | codigo |
      | John    | Doe      | 12345  |
      | María   | García   | 28001  |
      | Carlos  | López    | 15000  |