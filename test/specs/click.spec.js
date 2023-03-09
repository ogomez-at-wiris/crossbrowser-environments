describe('Wiris Quizzes demo page', () => {
    it('Visits the Wiris Quizes demo page', async () => {
        await browser.navigateTo('https://demo.wiris.com/quizzes/en/level3.html')
        await browser.$('#tabauthoring').click();
        await browser.$('#wrsUI_openStudio').waitForDisplayed({timeout: 5000})
        await browser.$('#wrsUI_openStudio').click();
        await browser.$('#wrsUI_addNewSimpleRandomVariableButton').click();
        await browser.$('#wrsUI_basicRandomVariableName0').waitForDisplayed({timeout: 5000});
        await browser.$('#wrsUI_basicRandomVariableName0').click();
        await browser.keys('sol');
        await browser.$('#wrsUI_basicRandomVariableMin0').click();
        await browser.keys('1');
        await browser.$('#wrsUI_basicRandomVariableMax0').click();
        await browser.keys('10');
        //await browser.pause(6000)
        //await browser.$('#wrsUI_mainMathField > div > div > div.wrs_formulaDisplayWrapper > div.wrs_formulaDisplay > span.wrs_container').click();
        await browser.pause(10000);
    });
});
