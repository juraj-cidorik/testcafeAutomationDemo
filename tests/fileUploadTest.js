import {Selector} from 'testcafe';

const fileUploadInput = Selector("input#file-upload")
const fileUploadButton = Selector('input#file-submit')

fixture("Upload")
    .page("https://the-internet.herokuapp.com")

test("File Upload Test", async t => {
    await t
        .navigateTo("/upload")
        .setFilesToUpload(fileUploadInput, '../resources/pic.jpg')
        .click(fileUploadButton);
}); 