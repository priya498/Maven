$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/cucumbers.feature");
formatter.feature({
  "line": 2,
  "name": "log-in and log-out",
  "description": "",
  "id": "log-in-and-log-out",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "verify the  successfull log-out",
  "description": "",
  "id": "log-in-and-log-out;verify-the--successfull-log-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user should be on facebook log-in page.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter the valid \"vpriyamay30@yahoo.co.in \"and \"Niki31Shara26RF\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "switch to alert click dismiss",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on log-out button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the page title should be \"Facebook - Log In or Sign Up \"",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Code.user_should_be_on_facebook_log_in_page()"
});
formatter.result({
  "duration": 14709592853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vpriyamay30@yahoo.co.in ",
      "offset": 22
    },
    {
      "val": "Niki31Shara26RF",
      "offset": 52
    }
  ],
  "location": "Test_Code.user_enter_the_valid_and(String,String)"
});
formatter.result({
  "duration": 1306490219,
  "status": "passed"
});
formatter.match({
  "location": "Test_Code.click_on_ok_button()"
});
formatter.result({
  "duration": 182994175,
  "status": "passed"
});
formatter.match({
  "location": "Test_Code.switch_to_alert_click_dismiss()"
});
formatter.result({
  "duration": 17792718349,
  "status": "passed"
});
formatter.match({
  "location": "Test_Code.click_on_log_out_button()"
});
formatter.result({
  "duration": 13987070556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook - Log In or Sign Up ",
      "offset": 26
    }
  ],
  "location": "Test_Code.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 34206442,
  "status": "passed"
});
});