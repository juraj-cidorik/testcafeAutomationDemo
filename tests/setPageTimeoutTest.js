import {Selector} from 'testcafe';

const iframeElement = Selector("iframe[id='mce_0_ifr']");
const contentElement = Selector("body[id='tinymce']");
const inputText = "Testcafe";

fixture('Set Timeout')
    .page("https://the-internet.herokuapp.com/")

test("Test with custom timeout", async t => {
    await t
        .setPageLoadTimeout(8)
        .navigateTo("/iframe");
});