from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

@given('estoy en la página de registro de ventas')
def step_given_estoy_en_la_pagina_de_registro_de_ventas(context):
    context.driver = webdriver.Chrome()  # Asegúrese de tener ChromeDriver instalado y la ruta configurada
    context.driver.get("http://localhost:4200/registro-venta")  # Actualice la URL a su componente de registro de ventas

@when('selecciono un cliente válido')
def step_when_selecciono_un_cliente_valido(context):
    cliente_dropdown = context.driver.find_element(By.ID, "cliente")
    cliente_dropdown.click()
    client_option = WebDriverWait(context.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//li[contains(text(), 'John Doe')]"))
    )
    client_option.click()

@when('selecciono un método de pago')
def step_when_selecciono_un_metodo_de_pago(context):
    metodo_pago_dropdown = context.driver.find_element(By.ID, "metodo_pago")
    metodo_pago_dropdown.click()
    metodo_option = WebDriverWait(context.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//li[contains(text(), 'Tarjeta de Crédito')]"))
    )
    metodo_option.click()

@when('agrego un producto con cantidad y precio')
def step_when_agrego_un_producto_con_cantidad_y_precio(context):
    add_button = context.driver.find_element(By.CSS_SELECTOR, "button[label='Agregar Producto']")
    add_button.click()
    time.sleep(1)
    producto_dropdown = context.driver.find_element(By.ID, "producto_0")
    producto_dropdown.click()
    product_option = WebDriverWait(context.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//li[contains(text(), 'Producto A')]"))
    )
    product_option.click()
    cantidad_input = context.driver.find_element(By.ID, "cantidad_0")
    cantidad_input.send_keys("5")
    precio_input = context.driver.find_element(By.ID, "precio_unitario_0")
    precio_input.send_keys("20")

@when('envío el formulario de venta')
def step_when_envio_el_formulario_de_venta(context):
    submit_button = context.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    submit_button.click()
    time.sleep(2)  # Espere a que el formulario sea procesado y se muestre la respuesta

@then('debería ver un mensaje de éxito en venta')
def step_then_deberia_ver_un_mensaje_de_exito_en_venta(context):
    messages = context.driver.find_elements(By.CLASS_NAME, 'p-toast-message')
    assert any("Venta registrada correctamente" in message.text for message in messages)
    context.driver.quit()

@when('intento enviar el formulario sin seleccionar un cliente')
def step_when_intento_enviar_el_formulario_sin_seleccionar_un_cliente(context):
    submit_button = context.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    submit_button.click()

@then('el botón de envío debería estar deshabilitado en venta')
def step_then_el_boton_de_envio_deberia_estar_deshabilitado_en_venta(context):
    submit_button = context.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    assert not submit_button.is_enabled()
    context.driver.quit()

@when('agrego un producto con cantidad insuficiente')
def step_when_agrego_un_producto_con_cantidad_insuficiente(context):
    add_button = context.driver.find_element(By.CSS_SELECTOR, "button[label='Agregar Producto']")
    add_button.click()
    time.sleep(1)
    producto_dropdown = context.driver.find_element(By.ID, "producto_0")
    producto_dropdown.click()
    product_option = WebDriverWait(context.driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//li[contains(text(), 'Producto A')]"))
    )
    product_option.click()
    cantidad_input = context.driver.find_element(By.ID, "cantidad_0")
    cantidad_input.send_keys("0")
    precio_input = context.driver.find_element(By.ID, "precio_unitario_0")
    precio_input.send_keys("20")
