import { Angular2crudPage } from './app.po';

describe('angular2crud App', function() {
  let page: Angular2crudPage;

  beforeEach(() => {
    page = new Angular2crudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
