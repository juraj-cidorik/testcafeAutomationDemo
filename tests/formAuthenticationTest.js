import {Selector} from 'testcafe';

fixture("The Internet Herokuapp")
    .page("https://the-internet.herokuapp.com/")

test.skip("Form authentication test", async t => {
    await t
        .navigateTo("/login")
})