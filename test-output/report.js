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
  "duration": 19180893681,
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
  "duration": 1317846069,
  "status": "passed"
});
formatter.match({
  "location": "Test_Code.click_on_ok_button()"
});
formatter.result({
  "duration": 1701144111,
  "status": "passed"
});
formatter.match({
  "location": "Test_Code.user_should_be_able_to_log_in_sucessfully()"
});
formatter.result({
  "duration": 7453284320,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7.40 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027NikiPC\u0027, ip: \u0027192.168.1.134\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60928}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\Niki\\AppData\\Local\\Temp\\scoped_dir8984_1240695218}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d79.0.3945.130, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9b11c7d26fc523c00a5686ef507c55f7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:326)\r\n\tat stepdefinition.Test_Code.user_should_be_able_to_log_in_sucessfully(Test_Code.java:45)\r\n\tat ✽.Then user should be able to log-in sucessfully(./Features/cucumbers.feature:6)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "for data driven testing we have to give scenario outline",
  "description": "",
  "id": "facebook-log-in-functionality;for-data-driven-testing-we-have-to-give-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user should be on facebook log-in page.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter the valid \"\u003cemail\u003e \"and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able to log-in sucessfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "facebook-log-in-functionality;for-data-driven-testing-we-have-to-give-scenario-outline;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 15,
      "id": "facebook-log-in-functionality;for-data-driven-testing-we-have-to-give-scenario-outline;;1"
    },
    {
      "cells": [
        "vpriyamay30@yahoo.co.in",
        "june"
      ],
      "line": 16,
      "id": "facebook-log-in-functionality;for-data-driven-testing-we-have-to-give-scenario-outline;;2"
    },
    {
      "cells": [
        "sahasra@gmail.com",
        "may"
      ],
      "line": 17,
      "id": "facebook-log-in-functionality;for-data-driven-testing-we-have-to-give-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "for data driven testing we have to give scenario outline",
  "description": "",
  "id": "facebook-log-in-functionality;for-data-driven-testing-we-have-to-give-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user should be on facebook log-in page.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter the valid \"vpriyamay30@yahoo.co.in \"and \"june\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able to log-in sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Code.user_should_be_on_facebook_log_in_page()"
});
formatter.result({
  "duration": 4940292348,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 13 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027NikiPC\u0027, ip: \u0027192.168.1.134\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60998}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\Niki\\AppData\\Local\\Temp\\scoped_dir10668_1451418865}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d79.0.3945.130, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b6233db93e783688bdea3781a9e5ef7d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:945)\r\n\tat stepdefinition.Test_Code.user_should_be_on_facebook_log_in_page(Test_Code.java:25)\r\n\tat ✽.Given user should be on facebook log-in page.(./Features/cucumbers.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "vpriyamay30@yahoo.co.in ",
      "offset": 22
    },
    {
      "val": "june",
      "offset": 52
    }
  ],
  "location": "Test_Code.user_enter_the_valid_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Code.click_on_ok_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Code.user_should_be_able_to_log_in_sucessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "for data driven testing we have to give scenario outline",
  "description": "",
  "id": "facebook-log-in-functionality;for-data-driven-testing-we-have-to-give-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user should be on facebook log-in page.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter the valid \"sahasra@gmail.com \"and \"may\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able to log-in sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Code.user_should_be_on_facebook_log_in_page()"
});
formatter.result({
  "duration": 4484348160,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d79.0.3945.130)\n  (Driver info: chromedriver\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 988 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027NikiPC\u0027, ip: \u0027192.168.1.134\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61032}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\Niki\\AppData\\Local\\Temp\\scoped_dir960_2082501751}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d79.0.3945.130, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 24f7f0902de92b8c96b3e46e0a8e3401\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat stepdefinition.Test_Code.user_should_be_on_facebook_log_in_page(Test_Code.java:24)\r\n\tat ✽.Given user should be on facebook log-in page.(./Features/cucumbers.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sahasra@gmail.com ",
      "offset": 22
    },
    {
      "val": "may",
      "offset": 46
    }
  ],
  "location": "Test_Code.user_enter_the_valid_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Code.click_on_ok_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Code.user_should_be_able_to_log_in_sucessfully()"
});
formatter.result({
  "status": "skipped"
});
});