from selenium import webdriver
import time

driver = webdriver.Chrome()
driver.get('https://selenium.dev')
time.sleep(200)

driver.close()
