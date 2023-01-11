# telemeter-e2e-tests

This project has been set up using [WebdriverIO](https://webdriver.io/docs/gettingstarted/).

It includes the following services (from running yarn create webdio .):

- slack integration (not configured).
- BrowserStack
      - - Local testing
- Chrome, Edge, Safari and Firefox profiles with their drivers.
- Eslint (for code styling).
- Example page objects.

## How to use

 When using the npx wdio command you can specify the config to use (see package.json). So for instance we could have capabilities which run on local browsers, one that runs on Browserstack, one that runs on AWS Device FArm, etc, especially for testing.

The services to use are specified in a file called `wdio.conf.js`, line 115.

Right now it is only set to chromedriver (local). So by running `npm test` you'll get the test in your local box, if you wanted to add browserstack you would just add 'browserstack' to this (or another) config services array, then the tests would run there. Maybe there is a better way, I don't know.
