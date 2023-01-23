import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    runner: 'local',
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    hostname: 'hub.lambdatest.com',
    path: '/wd/hub',
    screenshotPath: "./errorShots/",
    buildName: 'test build',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [
        {
            "LT:Options": {
                browserName: "chrome",
                version: "latest",
                name: "Silly test for checking the dashboard",
                platform: 'windows10',
                build: "Jan 17th build by ogomez-at-wiris"
            }
        }],
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    services: [
        ['lambdatest', {
            tunnel: false,
            lambdatestOpts: {
                logFile: "tunnel.log"
            }

        }]
    ], framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
