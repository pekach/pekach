import { PekachPage } from './app.po';

describe('pekach App', () => {
  let page: PekachPage;

  beforeEach(() => {
    page = new PekachPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
