*** Settings ***
Library  SeleniumLibrary

*** Keywords ***
Verify Page Loaded
    Wait Until Page Contains  Back to results

Add to Cart
    Click Button  id=add-to-cart-button
    #Click Button  id=attachSiNoCoverage-announce