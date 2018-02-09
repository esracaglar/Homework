/*Proje 1 - Test2 */ 

Feature('SearchPage');

 var minimum='1998';
 var maximum='1999';
 var grey='Gri';
 var security= 'Çekiş Kontrolü';
 
Before((I) => { 
  I.amOnPage('https://www.sahibinden.com');
 
});


Scenario('Detailed search with given values', (I, basePage) => {
 
 // Click on detailed search then select given motorcycles model
 I.click(basePage.detailSearch);
 I.click(basePage.vehicles);
 I.waitForElement(basePage.motorcycles, 10); // secs
 I.click(basePage.motorcycles);
 I.amOnPage(basePage.mt07ABS);
 // Fill min and max years
 I.fillField(basePage.minYear,minimum);
 I.fillField(basePage.maxYear,maximum);
 I.scrollTo(basePage.minYear, 120, 100);
 // Select color as grey
 I.waitForElement(basePage.color);
 I.click(basePage.color);
 I.click(grey);
 I.scrollTo(basePage.color, 120, 100);
 // Select security as Çekiş Kontrolü
 I.click(security);
 I.click(basePage.searchButton);
 I.waitForText(basePage.notFound,10);
 
});