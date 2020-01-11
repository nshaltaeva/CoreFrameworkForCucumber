$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/project001_features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As user, I want to be able to login into restful booker\n  to test web services",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@F0001"
    }
  ]
});
formatter.scenario({
  "name": "Login Home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F0001"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the restful booker login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.userIsOnTheRestfulBookerLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the home page subtitles",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.userVerifyTheHomePageSubtitles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"API Docs\" links",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.userVerifiesThatLinks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F0001"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the restful booker login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.userIsOnTheRestfulBookerLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the home page subtitles",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.userVerifyTheHomePageSubtitles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Website\" links displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.userVerifiesThatLinksDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as (data table example)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F0001"
    },
    {
      "name": "@data_table_map"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the restful booker login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.userIsOnTheRestfulBookerLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user log in with following credentials",
  "rows": [
    {
      "cells": [
        "link1",
        "API Docs"
      ]
    },
    {
      "cells": [
        "link2",
        "Website"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogInWithFollowingCredentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "DDT example, Login as \u003crole\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@data_table_array"
    }
  ]
});
formatter.step({
  "name": "user is on the restful booker login page",
  "keyword": "When "
});
formatter.step({
  "name": "user logs website as \"\u003clinks\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "roles",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "links"
      ]
    },
    {
      "cells": [
        "API Docs"
      ]
    },
    {
      "cells": [
        "Website"
      ]
    }
  ]
});
formatter.scenario({
  "name": "DDT example, Login as \u003crole\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F0001"
    },
    {
      "name": "@data_table_array"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the restful booker login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.userIsOnTheRestfulBookerLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs website as \"API Docs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsWebsiteAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "DDT example, Login as \u003crole\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F0001"
    },
    {
      "name": "@data_table_array"
    }
  ]
});
