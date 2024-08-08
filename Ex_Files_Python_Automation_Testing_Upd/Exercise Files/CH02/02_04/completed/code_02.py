from selenium import webdriver
from selenium.webdriver.common.by import By

driver= webdriver.Edge()
driver.get("file:///C:/Users/David/OneDrive/Desktop/python/Ex_Files_Python_Automation_Testing_Upd/Exercise%20Files/CH02/html_code_02.html")
login_form_absolute = driver.find_element(By.XPATH, "/html/body/form[1]")
login_form_relative = driver.find_element(By.XPATH, "//form[1]")
login_form_id = driver.find_element(By.XPATH, "//form[@id='loginForm']")
print("My login form is:")
print(login_form_absolute.get_property("id"))
print(login_form_relative.get_property("id"))
print(login_form_id.get_property("id"))
driver.close()
