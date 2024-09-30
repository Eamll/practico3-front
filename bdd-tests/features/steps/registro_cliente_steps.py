from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

@given('estoy en la página de registro')
def step_given_estoy_en_la_pagina_de_registro(context):
    context.driver = webdriver.Chrome()  # Asegúrese de tener ChromeDriver instalado y la ruta configurada
    context.driver.get("http://localhost:4200/")  # Actualice la URL a su aplicación Angular

@when('lleno el formulario de registro')
def step_when_lleno_el_formulario_de_registro(context):
    context.driver.find_element(By.ID, "nombre").send_keys("John Doe")
    context.driver.find_element(By.ID, "ci_nit").send_keys("123456789")
    context.driver.find_element(By.ID, "email").send_keys("john.doe@example.com")

@when('envío el formulario')
def step_when_envio_el_formulario(context):
    context.driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    time.sleep(2)  # Espere a que el formulario sea procesado y se muestre la respuesta

@then('debería ver un mensaje de éxito')
def step_then_deberia_ver_un_mensaje_de_exito(context):
    messages = context.driver.find_elements(By.CLASS_NAME, 'p-toast-message')
    assert any("Cliente registrado correctamente" in message.text for message in messages)
    context.driver.quit()

@when('lleno el formulario de registro con campos faltantes')
def step_when_lleno_el_formulario_de_registro_con_campos_faltantes(context):
    context.driver.find_element(By.ID, "nombre").send_keys("")
    context.driver.find_element(By.ID, "ci_nit").send_keys("123456789")
    context.driver.find_element(By.ID, "email").send_keys("")

@when('lleno el formulario de registro con un correo electrónico inválido')
def step_when_lleno_el_formulario_de_registro_con_un_correo_electronico_invalido(context):
    context.driver.find_element(By.ID, "nombre").send_keys("John Doe")
    context.driver.find_element(By.ID, "ci_nit").send_keys("123456789")
    context.driver.find_element(By.ID, "email").send_keys("not-an-email")

@then('el botón de envío debería estar deshabilitado')
def step_then_el_boton_de_envio_deberia_estar_deshabilitado(context):
    submit_button = context.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    assert not submit_button.is_enabled()  # El botón debería estar deshabilitado
    context.driver.quit()
