from selenium import webdriver
from selenium.webdriver.common.by import By
driver= webdriver.Edge()
driver.get("file:///C:/Users/David/OneDrive/Desktop/python/Ex_Files_Python_Automation_Testing_Upd/Exercise%20Files/CH02/html_code_02.html")
username = driver.find_element(By.NAME, 'username')
print("My input element is:")
print(username.get_property("name"))
driver.close()
