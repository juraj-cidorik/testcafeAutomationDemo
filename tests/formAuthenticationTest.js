import {Selector} from 'testcafe';

const usernameInput = Selector('input#username');
const passwordInput = Selector('input#password');
const button = Selector('button');
const logoutLink = Selector('a[href="/logout"]');
const successMessage = Selector('div.success');

fixture("Form authentication login and logout")
    .page("https://the-internet.herokuapp.com/")

test("Form authentication login/logout test", async t => {
    const user = "tomsmith";
    const pwd = "SuperSecretPassword!";
    await t
        .navigateTo("/login")
        .typeText(usernameInput, user)
        .typeText(passwordInput, pwd)
        .click(button)
        .expect(successMessage.innerText).contains("You logged into a secure area!")
        .click(logoutLink)
        .expect(successMessage.innerText).contains("You logged out of the secure area!")
});
