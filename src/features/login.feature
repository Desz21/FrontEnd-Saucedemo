Feature: Login en Sauce Demo

  # Scenario Outline corre el mismo escenario una vez por cada fila de la tabla Examples
  # Los <placeholders> se reemplazan con los valores de cada fila automáticamente
  Scenario Outline: Login con diferentes tipos de usuario
    Given el usuario está en la página de login
    When ingresa usuario "<usuario>" y contraseña "<password>"
    Then debe ver resultado "<resultado>"

    # Cada fila es una ejecución independiente del escenario
    Examples:
      | usuario           | password     | resultado  |
      | standard_user     | secret_sauce | inventario |
      | locked_out_user   | secret_sauce | bloqueado  |
      | invalid_user      | wrong_pass   | invalido   |