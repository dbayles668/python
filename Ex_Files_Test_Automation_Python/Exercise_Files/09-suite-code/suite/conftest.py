import pytest
from appium import webdriver
from os import path

CUR_DIR = path.dirname(path.abspath(__file__))
APP = path.join(CUR_DIR, 'TheApp.apk')
APPIUM = 'http://localhost:4723'

@pytest.fixture
def driver():
    CAPS = {
        'platformName': 'Android',
        'platformVersion': '10.0',
        'deviceName': 'Android Emulator',
        'automationName': 'UiAutomator2',
        'app': APP,
    }
    driver = webdriver.Remote(APPIUM, CAPS)
    yield driver
    driver.quit()