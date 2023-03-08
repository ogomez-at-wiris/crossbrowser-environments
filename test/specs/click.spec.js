describe('Wiris Quizzes demo page', () => {
    it('Visits the Wiris Quizes demo page', async () => {
        await browser.navigateTo('https://demo.wiris.com/quizzes/en/level3.html')
        await browser.$('#tabauthoring').click();
        await browser.$('#wrsUI_openStudio').waitForDisplayed({timeout: 5000})
        await browser.$('#wrsUI_openStudio').waitForClickable({timeout: 5000})
        await browser.$('#wrsUI_openStudio').click();
        await browser.$('#wrsUI_addNewSimpleRandomVariableButton').click();
        await browser.$('#wrsUI_basicRandomVariableName0').click();
        //await browser.keys('ieeepa');
        /* await browser.$('#wrsUI_basicRandomVariableName0').setValue('sol')
        await browser.$('#wrsUI_validationOptionsButton').click();
        await browser.$('#wrsUI_validationOptionsCustomGradingFunction').click();
        await browser.$('#wrsUI_validationOptionsCustomGradingFunctionFunctionNameTextField > input[type=text]').setValue('gf');
        await browser.$('#wrsUI_quizzesStudio > div.wrsUI_component.wrsUI_panel.wrsUI_activityContainer.wrsUI_borderPanelAtCenter > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelTopToBottom.wrsUI_activityPanel.wrsUI_panelSolid.wrsUI_quizzesStudioValidationOptions > div > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(2) > div.wrsUI_component.wrsUI_panel.wrsUI_borderPanel > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelLeftToRight.wrsUI_borderPanelAtEast > button').click();
        await browser.pause(5000);
        await browser.$('#wrsUI_variableOptionsCalcMe > div > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelTopToBottom.wrsUI_sheetBox.wrsUI_borderPanelAtWest.wrsUI_menuHidden > div > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelLeftToRight.wrsUI_sheetItems > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelLeftToRight.wrsUI_focused > div.wrsUI_calcSheet > div > div.wrsUI_lineBox.wrsUI_algorithmBox.wrsUI_first.wrsUI_currentChild > div.wrsUI_container.wrsUI_lineMain.wrsUI_currentChild > div > div > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code > div:nth-child(4) > pre').click();
        selector.focus();
        browser.keys('hola tu puta madre')*/
        
        await browser.pause(10000);
    });
});