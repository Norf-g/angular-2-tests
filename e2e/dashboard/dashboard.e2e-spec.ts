import DashboardPage from './dashboard.page';
import { browser, by } from 'protractor';

describe('Dashboard E2E Tests', function () {

    let sessionId:any;

    browser.getSession().then((session) => {
        sessionId = session.getId();
    });

    if (browser.params.souceLab) {
        afterAll((done) => {
            browser.params.souceLab.updateJob(sessionId, {
                build: browser.params.build
            }, done);
        });
    }

    beforeAll(function () {
        browser.ignoreSynchronization = false;
        browser.get('/');
    });

    it('Should be displayed 4 heroes', function () {
        expect(DashboardPage.hero.count()).toEqual(4);
    });

    it('SearchComponent should be displayed', function () {
        expect(DashboardPage.searchComponent.isDisplayed()).toBe(true);
    });

    it('Searched hero should be found', function () {
        DashboardPage.searchBox.sendKeys('Bombasto');
        expect(DashboardPage.searchResult.count()).toEqual(1);
    });

    it('It should go to edit', function () {
        DashboardPage.searchResult.first().click();
        expect(browser.getCurrentUrl()).toContain('detail');
    });

});