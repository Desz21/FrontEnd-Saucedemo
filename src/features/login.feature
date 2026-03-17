Feature: Login en Sauce Demo

  # Escenario positivo: usuario estándar puede ingresar
  Scenario: Login exitoso con usuario estándar
    Given el usuario está en la página de login
    When ingresa usuario "standard_user" y contraseña "secret_sauce"
    Then debe ver la página de inventario

  # Escenario negativo: usuario bloqueado no puede ingresar
  Scenario: Login fallido con usuario bloqueado
    Given el usuario está en la página de login
    When ingresa usuario "locked_out_user" y contraseña "secret_sauce"
    Then debe ver el mensaje de error "Epic sadface: Sorry, this user has been locked out."