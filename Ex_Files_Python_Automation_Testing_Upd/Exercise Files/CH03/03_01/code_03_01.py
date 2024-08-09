from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

driver= webdriver.Edge()
driver.get("http://python.org")

search = driver.find_element(By.NAME,'q')
search.clear()
search.send_keys("pycon")
search.send_keys(Keys.RETURN)
time.sleep(4)

driver.close()
