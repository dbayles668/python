message = 'Hello'

def test_echo_box_displays_message_back(home):
    echo = home.nav_to_echo_box()

    echo.save_message(message)
    if echo.read_message(message) is None:
        assert echo.read_message(message) is None
    else:  
        assert echo.read_message(message) == message
    home = echo.nav_back()

    echo = home.nav_to_echo_box()
    assert echo.read_message(message) == message


def test_saved_message_is_initially_empty(home):
    echo = home.nav_to_echo_box()
    assert echo.read_message(message) is None
