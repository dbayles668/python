from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Firefox()
driver.get('https://selenium-blog.herokuapp.com/signup')

login_form = driver.find_element(By.ID, "user_username")
email_form = driver.find_element(By.ID, "user_email")
passwd_form = driver.find_element(By.ID, "user_password")
submit_form = driver.find_element(By.ID, "submit")

login_form.send_keys("davestest9")
email_form.send_keys("dbayles9@sympatico.ca")
passwd_form.send_keys("Y0gs0gg0th9")
submit_form.submit();

time.sleep(10)

try:
    success_flash = driver.find_element(By.ID, "flash_success")
except:
    print("login failed")    
else:
    print(success_flash.get_attribute("innerHTML"))
driver.close()