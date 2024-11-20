*** Settings ***
Library  SeleniumLibrary
Library  Saucelabs

*** Variables ***

*** Keywords ***
Begin Web Test
    Open Browser  about:blank  ${BROWSER}   remote_url=${REMOTE_URL}  desired_capabilities=${DESIRED_CAPABILITIES}
    Run keyword if  '${REMOTE_URL} != ''
    ...  Update Saucelabs Test Name
    ...  ${SUITE_NAME}: ${TEST_NAME}
    ...  ${TEST_STATUS}  ${TEST_TAGS}  ${REMOTE_URL}    
    # Maximize Browser Window

End Web Test
    Run keyword if  '${REMOTE_URL} != ''
    ...  Update Saucelabs Test Result
    ...  ${SUITE_NAME}: ${TEST_NAME}
    ...  ${REMOTE_URL}
    Close Browser