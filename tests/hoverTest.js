import {Selector} from 'testcafe';

const figure = Selector("div.figure");
const figureCaption = Selector("div.figcaption h5");

fixture('Hovers')
    .page("https://the-internet.herokuapp.com/")

test("Test hover over element", async t => {
    await t
        .navigateTo("/hovers")
        .hover(figure)
        .expect(figureCaption.innerText).contains("user1", "User caption does not match expected value");
});