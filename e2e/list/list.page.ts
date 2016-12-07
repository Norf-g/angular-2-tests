import { browser, element, by, } from 'protractor';

const listPage = {
     currentHero: element(by.id('currentHero')),
     heroList: element(by.css('.heroes')),
     linkHeroes: element(by.id('linkHeroes')),
     btnDetail: element(by.id('btnDetail')),
     heroesContent: element(by.css('.heroes-content'))
}

export default listPage;