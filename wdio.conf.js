import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    runner: 'local',
    hostname: "trial.perfectomobile.com",
    path: "/nexperience/perfectomobile/wd/hub",
    port: 443,
    protocol: "https",
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Windows',
        browserName: 'chrome',
        browserVersion: 'latest',
        'perfecto:options': {
            securityToken: process.env.PERFECTO_TOKEN,
        },
    }],
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    services: [
        ['browserstack', {
        }]
    ],
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
