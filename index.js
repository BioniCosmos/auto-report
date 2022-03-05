const { Builder, By, until } = require('selenium-webdriver')
const fs = require('fs');

(async () => {
    try {
        const driver = await new Builder().forBrowser('chrome').build()

        await driver.get('https://yqtb.sut.edu.cn/login/base')
        await driver.manage().window().setRect({ width: 393, height: 851 });

        const account = await driver.findElement(By.xpath('/html/body/div/div[2]/div[2]/div[3]/input'))
        const password = await driver.findElement(By.xpath('/html/body/div/div[2]/div[2]/div[4]/input'))
        const login = await driver.findElement(By.xpath('/html/body/div/div[2]/div[2]/div[5]/button'))

        await account.sendKeys('*********')
        await password.sendKeys('*********')
        await login.click()

        await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[2]/div[2]/div/div[3]/ul/li[1]'), 10000, 'Timeout', 5000)).click()

        const postScript = fs.readFileSync('./post.js')
        await driver.executeScript(postScript.toString())
        await driver.quit()
    } catch (err) {
        console.error(err)
    }
})()
