# Cucumber Examples
This repository contains example code of using the [JavaScript Cucumber library](https://github.com/cucumber/cucumber-js) to write tests in your code. Specifically, it looks at using WebdriverIO and the node-oracledb connector enhance your automated testing.

## Basic Cucumber (basic-cucumber)
This contains basic examples of using Cucumber to test the functionality of a Wallet class. The tests are written in Gherkin in the `features` folder, and the actual steps are defined in `support/step-definitions`.

## Cucumber with WebdriverIO (cucumber-webdriverio)
Demonstrates using [WebdriverIO](http://webdriver.io/) to interact with webpages as part of tests. WebdriverIO is loaded into the `world` parameter and is used asynchronously with promises.

## Cucumber with WebdriverIO and node-oracledb (cucumber-webdriverio-db)
Adds [node-oracledb](https://github.com/oracle/node-oracledb) to the stack to demonstrate a test which checks for correct values in the database after completing. Note: this test will not work publicly.
