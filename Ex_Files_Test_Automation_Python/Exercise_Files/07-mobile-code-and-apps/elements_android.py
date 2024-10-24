from os import path
from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from appium.options.android import UiAutomator2Options
import time

CUR_DIR = path.dirname(path.abspath(__file__))
APP = path.join(CUR_DIR, 'TheApp.apk')
APPIUM = 'http://localhost:4723'
CAPS = {
    'platformName': 'Android',
    'platformVersion': '10.0',
    'deviceName': 'Android Emulator',
    'automationName': 'UiAutomator2',
    'app': APP,
}    
options = UiAutomator2Options()
options.load_capabilities(CAPS)

driver = webdriver.Remote(APPIUM,  options=options)
try:
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located(
        (MobileBy.ACCESSIBILITY_ID, 'Echo Box'))).click()  
    wait.until(EC.presence_of_element_located(
        (MobileBy.ACCESSIBILITY_ID, 'messageInput'))).send_keys('Hello')
    driver.find_element(MobileBy.ACCESSIBILITY_ID, 'messageSaveBtn').click()
    saved = driver.find_element(MobileBy.XPATH, '//android.widget.TextView[@content-desc != ""]').text
    assert saved == 'Hello'
    driver.back()

    wait.until(EC.presence_of_element_located(
        (MobileBy.ACCESSIBILITY_ID, 'Echo Box'))).click()
    driver.find_element(MobileBy.ACCESSIBILITY_ID, 'Hello')
finally:
    driver.quit()
