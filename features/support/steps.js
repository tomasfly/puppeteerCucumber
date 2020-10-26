const {When, Then, And, Given} = require("cucumber")
const expect = require("chai").expect
const puppeteer = require("puppeteer")

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given("The browser is open", async function(){
    this.browser = await puppeteer.launch({headless:false})
    this.page = await this.browser.newPage();
})

When('open player list', async function () {
    await this.page.goto("https://node.test.betserver.es/frontapp/players")
});

When('click on Show Transactions', async function () {
    await this.page.waitForXPath("/html/body/app-root/div/app-player/div/table/tbody/tr[1]/td[3]")
    const element = await this.page.$x("/html/body/app-root/div/app-player/div/table/tbody/tr[1]/td[3]")
    await element[0].click()
});

Then('transactions are displayed', async function () {
    const element = await this.page.$("h1");
    const text = await (await element.getProperty('textContent')).jsonValue();
    expect(text).to.contain('Transactions of');
    this.browser.close()
});