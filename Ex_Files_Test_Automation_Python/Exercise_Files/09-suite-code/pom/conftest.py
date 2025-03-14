import pytest
from appium import webdriver
from os import path
from appium.options.android import UiAutomator2Options
from views.home_view import HomeView

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
    options = UiAutomator2Options()
    options.load_capabilities(CAPS)
    driver = webdriver.Remote(APPIUM, options=options)
    yield driver
    driver.quit()


@pytest.fixture
def home(driver):
    return HomeView(driver)
