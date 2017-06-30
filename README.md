### E2E Test using Nightwatch

## Nightwatch

Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver).

#### How to install

1. Install webdriver manager

`npm install -g webdriver-manager`

2. Install Nightwatch

`npm install -g nightwatch`


#### How to run

All your test suites are located in `tests` folder. You can execute the test runner by using following command:

`nightwatch tests/simplifya-login.js`


3. Export following environment variables

`SIMPLIFYA_LOGIN_EMAIL=youremail@gmail.com`

`SIMPLIFYA_LOGIN_PASSWORD=yourpassword`
