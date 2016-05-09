export class AppRegistryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-registry-app h1')).getText();
  }
}
