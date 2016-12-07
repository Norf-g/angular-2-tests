import ListPage from './list.page';
import { browser, by } from 'protractor';

describe('List E2E Tests', function () {
  let sessionId: any;

    browser.getSession().then((session) => {
        sessionId = session.getId();
    });
    
    afterAll((done) => {
        browser.params.souceLab.updateJob(sessionId, {
            build: browser.params.build
        }, done);
    });

 beforeAll(function () {
   browser.ignoreSynchronization = false;
   browser.get('/');
   ListPage.linkHeroes.click();
  });

 it('heroesContent should not be displayed', function () {
    expect(ListPage.heroesContent.isDisplayed()).toBe(true);
  });

  it('btnDetail should be displayed', function () {
    ListPage.heroList.all(by.xpath("./li")).get(0).click();
    expect(ListPage.currentHero.isDisplayed()).toBe(true);
    expect(ListPage.btnDetail.isDisplayed()).toBe(true);
  });
});