*** Settings ***
Documentation  These are some web tests
Resource  ../Resources/Web/Common.robot
Resource  ../Resources/Web/AmazonApp.robot
Test Setup  Common.Begin Web Test
Test Teardown  Common.End Web Test

#Run the script:
#robot -d C:\Users\David\OneDrive\Desktop\python\robot-framework-test-automation-level-1-selenium-21986416\explore-libraries\Tests\Results C:\Users\David\OneDrive\Desktop\python\robot-framework-test-automation-level-1-selenium-21986416\explore-libraries\Tests\Web_Tests.robot

*** Variables ***
${BROWSER} =  chrome
${START_URL} =  https://www.amazon.ca
${SEARCH_TERM} =  Ferrari

*** Test Cases ***
Logged out user can search for products
    [Tags]  Web
    AmazonApp.Search for Products

Logged out user can add product to cart
    [Tags]  Web
    AmazonApp.Search for Products
    AmazonApp.Select Product from Search Results
    AmazonApp.Add Product to Cart
