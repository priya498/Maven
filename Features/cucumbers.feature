Feature: facebook log-in functionality
Scenario:  verify the  successfull log-in with valid credentials. 
Given   user should be on facebook log-in page.
When    user enter the valid "vpriyamay30@yahoo.co.in "and "Niki"
And     click on log-in button
Then    user should be able to log-in sucessfully

Scenario Outline: for data driven testing we have to give scenario outline
Given   user should be on facebook log-in page.
When    user enter the valid "<email> "and "<password>"
And     click on log-in button
Then    user should be able to log-in sucessfully
Examples:
 
| email | password |
 | vpriyamay30@yahoo.co.in | june |
 | sahasra@gmail.com | may |
 
