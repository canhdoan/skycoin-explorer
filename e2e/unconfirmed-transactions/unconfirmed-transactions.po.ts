import { browser, by, element } from 'protractor';

export class UnconfirmedTransactionsPage {

  getNumberOfTransactions() {
    return element(by.css('.element-details > div:nth-of-type(1) > div'))
      .getText()
      .then(text => Number(text));
  }

  getSize() {
    return element(by.css('.element-details > div:nth-of-type(2) > div'))
      .getText()
      .then(text => Number(text.split(' ')[0]));
  }

  getTimestampValidity(index: number) {
    return element(by.css('.element-details > div:nth-of-type(' + index + ') > div'))
      .getText()
      .then(text => !isNaN((new Date(text)).getTime()));
  }

}