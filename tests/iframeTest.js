import {Selector} from 'testcafe';

const iframeElement = Selector("iframe[id='mce_0_ifr']");
const contentElement = Selector("body[id='tinymce']");
const inputText = "Testcafe";

fixture('The Internet Herokuapp')
    .page("https://the-internet.herokuapp.com/")

test("Iframe test", async t => {
    await t
        .navigateTo("/iframe")
        .switchToIframe(iframeElement)
        .selectEditableContent(contentElement)
        .typeText(contentElement, inputText)
        .expect(contentElement.textContent).contains(inputText)
        .switchToMainWindow();
});