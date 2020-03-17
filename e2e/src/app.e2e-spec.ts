import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display message saying Yukihira Resturant", () => {
    page.navigateTo("/");
    expect(page.getParagraphText("app-root-h1")).toEqual("Resturant Yukihira");
  });

  it("should navagate to about us page by clicking on the link", () => {
    page.navigateTo("/");
    let navlink = page.getAllElements("a").get(1);
    navlink.click();

    expect(page.getParagraphText("h3")).toBe("About Us");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
  it("it should enter a new comment for the first dish", () => {
    page.navigateTo("/dishdetail/0");

    const newAuthor = page.getElement("input[type=text]");
    newAuthor.sendKeys("Test Author");

    const newComment = page.getElement("textarea");
    newComment.sendKeys("Test Comment");

    const newSubmitButton = page.getElement("button[type=submit]");
    newSubmitButton.click();

    browser.pause();
  });
});
