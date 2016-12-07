import { browser, element, by } from 'protractor';
import AppPage from './app.page';

describe('App E2E Tests', function () {

  let expectedMsg = 'Tour of Heroes';
  const linkHeroes = element(by.id('linkHeroes'));
  const heroesContent = element(by.css('.heroes-content'));
  let sessionId: any;

    browser.getSession().then((session) => {
        sessionId = session.getId();
    });
    
    afterAll((done) => {
        browser.params.souceLab.updateJob(sessionId, {
            build: browser.params.build
        }, done);
    });

  browser.get('/');

  it('H1 should have: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
