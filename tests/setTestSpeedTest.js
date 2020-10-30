import {Selector} from 'testcafe';

const iframeElement = Selector("iframe[id='mce_0_ifr']");
const contentElement = Selector("body[id='tinymce']");
const inputText = "Testcafe";

fixture('Variable speed of test')
    .page("https://the-internet.herokuapp.com/")

test("Test with speed set to slow", async t => {
    await t
        .navigateTo("/iframe")
        .setTestSpeed(0.1)
        .switchToIframe(iframeElement)
        .selectEditableContent(contentElement)
        .typeText(contentElement, inputText)
        .expect(contentElement.textContent).contains(inputText)
        .switchToMainWindow();
});