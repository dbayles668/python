from os import path
from appium import webdriver
from appium.options.android import UiAutomator2Options

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
    print(driver.execute_script("mobile: deviceInfo"))
finally:
    driver.quit()
