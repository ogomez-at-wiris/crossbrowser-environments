describe('Find an element', () => {
    it('Logins correctly', async () => {
        // act
        await browser.url('https://www.saucedemo.com/');

        // Arrange
        await (await $('#user-name')).setValue('standard_user');
        await (await $('#password')).setValue('secret_sauce');
        await (await $('#login-button')).click();

        // Assert
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
})


