describe('Wiris Quizzes demo page', () => {
    it('Visits the Wiris Quizes demo page', async () => {
        await browser.navigateTo('https://demo.wiris.com/quizzes/en/level3.html')
        await browser.$('#tabauthoring').click();
        await browser.$('#wrsUI_openStudio').waitForDisplayed({timeout: 5000})
        await browser.$('#wrsUI_openStudio').click();
        await browser.$('#wrsUI_addNewSimpleRandomVariableButton').click();
        await browser.pause(5000);
        await browser.$('#wrsUI_basicRandomVariableName0').click();
        await browser.keys('ei');
        await browser.pause(10000);
    });
});