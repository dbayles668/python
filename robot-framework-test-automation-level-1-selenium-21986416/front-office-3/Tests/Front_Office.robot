*** Settings ***
Documentation  Talk about what this suite of tests does
Resource  ../Resources/FrontOfficeApp.robot
Resource  ../Resources/CommonWeb.robot
Test Setup  Begin Web Test
Test Teardown  End Web Test

# robot -d C:\Users\David\OneDrive\Desktop\python\robot-framework-test-automation-level-1-selenium-21986416\front-office-3\Results C:\Users\David\OneDrive\Desktop\python\robot-framework-test-automation-level-1-selenium-21986416\front-office-3\Tests\Front_Office.robot

*** Variables ***
${BROWSER} =  chrome
${URL} =  http://www.automationplayground.com/front-office

*** Test Cases ***
Should be able to access "Team" page
    [Documentation]  This is test 1
    [Tags]  test1
    FrontOfficeApp.Go to Landing Page
    FrontOfficeApp.Go to "Team" Page

"Team" page should match requirements
    [Documentation]  This is test 2
    [Tags]  test2
    FrontOfficeApp.Go to Landing Page
    FrontOfficeApp.Go to "Team" Page
    FrontOfficeApp.Validate "Team" Page