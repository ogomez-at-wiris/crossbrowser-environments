describe('Wiris Quizzes demo page', () => {
    it('Visits the Wiris Quizes demo page', async () => {
        await browser.maximizeWindow();
        await browser.navigateTo('https://demo.wiris.com/quizzes/en/level3.html')
        await browser.$('#tabauthoring').click();
        await (await browser.$('#wrsUI_openStudio').waitForDisplayed({ timeout: 5000 }))
        await (await browser.$('#wrsUI_openStudio').click());
        await (await browser.$('#wrsUI_addNewSimpleRandomVariableButton').click());
        await (await browser.$('#wrsUI_basicRandomVariableName0').waitForDisplayed({ timeout: 5000 }));
        await (await browser.$('#wrsUI_basicRandomVariableName0').click());
        await browser.keys('sol');
        await (await browser.$('#wrsUI_basicRandomVariableMin0').click());
        await browser.keys('1');
        await (await browser.$('#wrsUI_basicRandomVariableMax0').click());
        await browser.keys('10');
        const editor = await browser.$('#wrsUI_mainMathField > div > div > div.wrs_formulaDisplayWrapper > div.wrs_formulaDisplay > div > input');
        await editor.waitForExist();
        await editor.click();
        await browser.pause(1000);
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');

        await browser.pause(6000);
        await browser.keys('#sol');
        await browser.pause(6000);
        await browser.$('#wrsUI_variableOptionsButton').click();
        await browser.pause(4000);
        await browser.debug();
        const calcmeTextArea = await browser.$('.wrsUI_focused');
        await calcmeTextArea.waitForDisplayed();
        await calcmeTextArea.click();
        await browser.debug();
    });
});
