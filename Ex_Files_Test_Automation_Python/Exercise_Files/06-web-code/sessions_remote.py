from selenium import webdriver
from appium.options.android import UiAutomator2Options

CAPS = {
    'browserName': 'Chrome',
    'automationName': 'UiAutomator2'
}
options = UiAutomator2Options()
options.platformVersion = '10'
options.load_capabilities(CAPS)
driver = webdriver.Remote(
    command_executor='http://localhost:4723',
    options=options
)
driver.quit()