describe('Wiris Quizzes demo page', () => {
    it('Visits the Wiris Quizes demo page', async () => {
        await browser.navigateTo('https://demo.wiris.com/quizzes/en/level3.html')
        await browser.$('#tabauthoring').click();
        await browser.$('#wrsUI_openStudio').waitForDisplayed({ timeout: 5000 })
        await browser.$('#wrsUI_openStudio').click();
        await browser.$('#wrsUI_addNewSimpleRandomVariableButton').click();
        await browser.$('#wrsUI_basicRandomVariableName0').waitForDisplayed({ timeout: 5000 });
        await browser.$('#wrsUI_basicRandomVariableName0').click();
        await browser.keys('sol');
        await browser.$('#wrsUI_basicRandomVariableMin0').click();
        await browser.keys('1');
        await browser.$('#wrsUI_basicRandomVariableMax0').click();
        await browser.keys('10');
        //await browser.pause(6000)
        const editor = await browser.$('#wrsUI_mainMathField > div > div > div.wrs_formulaDisplayWrapper > div.wrs_formulaDisplay > div > input');
        editor.waitForDisplayed();
        editor.click();
        await browser.pause(1000);
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
        //await browser.debug();
        await browser.pause(6000);
        await browser.keys('#sol');
        await browser.pause(6000);
        await browser.$('#wrsUI_variableOptionsButton').click();
        await browser.pause(4000);
        const calcmeTextArea = await browser.$('#wrsUI_variableOptionsCalcMe > div > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelTopToBottom.wrsUI_sheetBox.wrsUI_borderPanelAtWest > div > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelLeftToRight.wrsUI_sheetItems > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelLeftToRight.wrsUI_focused > div.wrsUI_calcSheet > div > div.wrsUI_lineBox.wrsUI_algorithmBox.wrsUI_first.wrsUI_currentChild > div.wrsUI_container.wrsUI_lineMain.wrsUI_currentChild > div > div > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code');
        calcmeTextArea.waitForDisplayed();
        calcmeTextArea.click();
    });
});
