from os import path
from appium import webdriver
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
    app = path.join(CUR_DIR, 'ApiDemos.apk')
    app_id = 'io.appium.android.apis'
    app_act1 = '.graphics.TouchPaint'
    app_act2 = '.text.Marquee'
    driver.install_app(app)
    driver.start_activity(app_id, app_act1)
    time.sleep(1)
    driver.start_activity(app_id, app_act2)
    time.sleep(1)
finally:
    driver.quit()
