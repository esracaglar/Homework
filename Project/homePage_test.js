/*Proje 1 - Test1 */ 

Feature('Check home page items');


Before((I) => { 
  I.amOnPage('https://www.sahibinden.com');
});

// Open www.sahibinden.com and verify items
Scenario('Check home page top menu items', (I, basePage) => {

 I.seeElement(basePage.logo);
 I.seeElement(basePage.searchText);
 I.seeElement(basePage.detailSearch);
 I.seeElement(basePage.login);
 I.seeElement(basePage.register);
 I.seeElement(basePage.newclassified);
 
});

// Check number of images
Scenario('Check number of images',(I, basePage) =>{
 
 I.seeNumberOfElements(basePage.numberOfImages,56);
 
});

// Check left menu items
Scenario('Check left menu items', (I, basePage) => {
 
 I.seeElement(basePage.vehicle);
 I.seeElement(basePage.automobile);
 I.seeElement(basePage.suv);
 I.seeElement(basePage.motorcycle);

});




