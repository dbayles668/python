from selenium import webdriver

caps = {
    'browserName': 'chrome'
}

driver = webdriver.Remote(
    command_executor='http://localhost:57205',
    desired_capabilities=caps
)
driver.quit()