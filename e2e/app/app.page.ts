import { browser, element, by, } from 'protractor';

const appPage = {
    linkHeroes: element(by.id('linkHeroes')),
    heroesContent: element(by.css('.heroes-content'))
}

export default appPage;