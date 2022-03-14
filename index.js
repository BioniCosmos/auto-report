const fs = require('fs')
const args = require('minimist')(process.argv.slice(2))
const { Builder, By, until } = require('selenium-webdriver')
const { Options } = require('selenium-webdriver/chrome');

(async () => {
    try {
        const options = new Options().addArguments(
            '--no-sandbox',
            '--headless',
            '--disable-dev-shm-usage'
        )
        const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build()

        await driver.get('https://yqtb.sut.edu.cn/login/base')
        await driver.manage().window().setRect({ width: 393, height: 851 });

        const account = await driver.findElement(By.xpath('/html/body/div/div[2]/div[2]/div[3]/input'))
        const password = await driver.findElement(By.xpath('/html/body/div/div[2]/div[2]/div[4]/input'))
        const login = await driver.findElement(By.xpath('/html/body/div/div[2]/div[2]/div[5]/button'))

        await account.sendKeys(args.account)
        await password.sendKeys(args.password)
        await login.click()

        await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[2]/div[2]/div/div[3]/ul/li[1]'), 10000, 'Timeout', 5000)).click()

        const form = JSON.parse(Buffer.from(args.form, 'base64'))
        const postScript = fs.readFileSync('./post.js').toString()
        await driver.executeScript(postScript.replace('<form>', JSON.stringify(form)))
        await driver.quit()
    } catch (err) {
        console.error(err)
    }
})()
