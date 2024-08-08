from selenium import webdriver
from selenium.webdriver.common.by import By

driver= webdriver.Edge()
driver.get("file:///C:/Users/David/OneDrive/Desktop/python/Ex_Files_Python_Automation_Testing_Upd/Exercise%20Files/CH02/html_code_02.html")
login_form = driver.find_element(By.ID, "loginForm")
print("My login form element is:")
print(login_form.tag_name)
driver.close()
