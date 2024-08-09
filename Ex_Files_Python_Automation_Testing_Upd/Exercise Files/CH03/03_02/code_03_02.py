from selenium import webdriver
import time
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By

driver= webdriver.Firefox()
driver.get("file:///C:/Users/David/OneDrive/Desktop/python/Ex_Files_Python_Automation_Testing_Upd/Exercise%20Files/CH03/03_02/html_code_03_02.html")

select= Select(driver.find_element(By.NAME, 'numReturnSelect'))
select.select_by_index(4)
time.sleep(2)
select.select_by_visible_text("200")
time.sleep(2)
select.select_by_value("250")
time.sleep(2)

options = select.options
print(len(options))
i = 0
while i < len(options):
    print(options[i].get_property("value"))
    i = i + 1

submit_button = driver.find_element(By.NAME, 'continue')
submit_button.submit();
time.sleep(2)

driver.close()
