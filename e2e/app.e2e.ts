import { AppRegistryPage } from './app.po';

describe('app-registry App', function() {
  let page: AppRegistryPage;

  beforeEach(() => {
    page = new AppRegistryPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app-registry works! dgun-app-registry works!');
  });
});
