describe('Wiris Quizzes demo page', () => {
    it('Visits the Wiris Quizes demo page', async () => {
        await browser.navigateTo('https://demo.wiris.com/quizzes/en/level3.html')

await browser.$('#tabauthoring').click();

await browser.$('#wrsUI_openStudio').click();

await browser.$('#wrsUI_validationOptionsButton').click();

await browser.$('#wrsUI_validationOptionsCustomGradingFunction').click();

await browser.$('#wrsUI_validationOptionsCustomGradingFunctionFunctionNameTextField > input[type=text]').setValue('gf')

await browser.$('#wrsUI_quizzesStudio > div.wrsUI_component.wrsUI_panel.wrsUI_activityContainer.wrsUI_borderPanelAtCenter > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelTopToBottom.wrsUI_activityPanel.wrsUI_panelSolid.wrsUI_quizzesStudioValidationOptions > div > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(2) > div.wrsUI_component.wrsUI_panel.wrsUI_borderPanel > div.wrsUI_component.wrsUI_panel.wrsUI_flowPanel.wrsUI_flowPanelLeftToRight.wrsUI_borderPanelAtEast > button').click();
await browser.pause(30000);
    });
});