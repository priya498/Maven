@sanity
Feature: log-in and log-out
Scenario:  verify the  successfull log-out  
Given   user should be on facebook log-in page.
When    user enter the valid "vpriyamay30@yahoo.co.in "and "Niki31Shara26RF"
And     click on log-in button
Then    switch to alert click dismiss
When     click on log-out button
Then    the page title should be "Facebook - Log In or Sign Up "
