import {Selector} from 'testcafe';

const dropdownElement = Selector("#dropdown")
const dropdownOptions = dropdownElement.find('option')

fixture("Dropdown")
    .page("https://the-internet.herokuapp.com")

test("Selecting item from dropdown", async t => {
    await t
        .navigateTo("/dropdown")
        .click(dropdownElement)
        .click(dropdownOptions.withText('Option 1'))
})