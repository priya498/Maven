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
  "duration": 22825303313,
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
  "duration": 1175285487,
  "status": "passed"
});
formatter.match({
  "location": "Test_Code.click_on_ok_button()"
});
formatter.result({
  "duration": 54528906,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"u_0_2\"]\"}\n  (Session info: chrome\u003d80.0.3987.149)\n  (Driver info: chromedriver\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 48 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027NikiPC\u0027, ip: \u0027192.168.1.134\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63394}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\Niki\\AppData\\Local\\Temp\\scoped_dir11108_931768135}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d80.0.3987.149, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: abe1d13e0780baf7e7b0f16aeeda6e9a\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"u_0_2\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepdefinition.Test_Code.click_on_ok_button(Test_Code.java:39)\r\n\tat ✽.And click on log-in button(./Features/cucumbers.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Test_Code.user_should_be_able_to_log_in_sucessfully()"
});
formatter.result({
  "status": "skipped"
});
});