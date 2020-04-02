$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/cucumbers.feature");
formatter.feature({
  "line": 1,
  "name": "facebook log-in functionality",
  "description": "",
  "id": "facebook-log-in-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "verify the  successfull log-in with valid credentials.",
  "description": "",
  "id": "facebook-log-in-functionality;verify-the--successfull-log-in-with-valid-credentials.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user should be on facebook log-in page.",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the valid \"vpriyamay30@yahoo.co.in \"and \"Niki\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user should be able to log-in sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Code.user_should_be_on_facebook_log_in_page()"
});
formatter.result({
  "duration": 29198670607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vpriyamay30@yahoo.co.in ",
      "offset": 22
    },
    {
      "val": "Niki",
      "offset": 52
    }
  ],
  "location": "Test_Code.user_enter_the_valid_and(String,String)"
});
formatter.result({
  "duration": 1352464861,
  "status": "passed"
});
formatter.match({
  "location": "Test_Code.click_on_ok_button()"
});
formatter.result({
  "duration": 739013191,
  "status": "passed"
});
formatter.match({
  "location": "Test_Code.user_should_be_able_to_log_in_sucessfully()"
});
formatter.result({
  "duration": 5878613563,
  "status": "passed"
});
});