/*Proje 1 - Test3 */ 
const assert = require('assert')

Feature('Compare results');

Before((I) => { 
  I.amOnPage('https://www.sahibinden.com');
 
});

// Create a data table for storing test data
let accounts = new DataTable(['search','result']); 
  
accounts.add(['Yamaha MT07','35 ilan']);
accounts.add(['Yamaha MT09','14 ilan']);
accounts.add(['Yamaha MT25','55 ilan']);

// Compare search results with data table values
Data(accounts).Scenario('Compare search results for Yamaha',function*(I, current, basePage){
  
  // Search data table values 
  I.waitForElement(basePage.searchText,10); // 10 sec
  I.waitForElement(basePage.mainSearchButton,10); 
  I.fillField(basePage.searchText, current.search); 
  I.click(basePage.mainSearchButton);
  
  // Assert that number of results are correct
  I.waitForElement(basePage.motorcycleyamaha,10); 
  I.click(basePage.motorcycleyamaha); 
  I.waitForElement(basePage.searchResult,10); 
  let value = yield I.grabTextFrom(basePage.searchResult); 
  assert.equal(value, current.result);
 
});
