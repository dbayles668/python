from appium.webdriver.common.mobileby import MobileBy
from selenium.common.exceptions import TimeoutException

from views.base_view import BaseView


class EchoView(BaseView):
    MESSAGE_INPUT = (MobileBy.ACCESSIBILITY_ID, 'messageInput')
    SAVE_BUTTON = (MobileBy.ACCESSIBILITY_ID, 'messageSaveBtn')
    MESSAGE_LABEL = (MobileBy.ACCESSIBILITY_ID, 'savedMessage')
    
    def save_message(self, message):
        self.wait_for(self.MESSAGE_INPUT).send_keys(message)
        self.find(self.SAVE_BUTTON).click()

    def read_message(self, message):
        LOOK_FOR = (MobileBy.ACCESSIBILITY_ID, message)
        try:
            return self.wait_for(LOOK_FOR).text
        except TimeoutException:
            return None

    def nav_back(self):
        from views.home_view import HomeView
        self.driver.back()
        return HomeView(self.driver)
