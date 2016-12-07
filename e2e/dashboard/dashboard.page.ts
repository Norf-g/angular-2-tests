import { browser, element, by, } from 'protractor';

class DashboardPage {
    public hero: any;
    public searchComponent: any;
    public searchBox: any;
    public searchResult: any;
    constructor() {
        this.hero = element.all(by.css('.hero'));
        this.searchResult = element.all(by.css('.search-result'));
        this.searchComponent = element(by.id('search-component'));
        this.searchBox = element(by.id('search-box'));
    }
}

export default new DashboardPage;