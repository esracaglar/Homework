'use strict';
const frisby = require('frisby');
const testHost = 'http://services.groupkt.com/country';


it('Get all countries', function (done) {
 
  frisby.get(testHost + '/get/all')
    .expect('header', 'Content-Type', 'application/json;charset=UTF-8')
	.expect('status', 200)
    .expect('json', {
         "RestResponse" : {
          "messages" : [ "Total [249] records found." ],
		  "result" : [ {
		  "name" : "Turkey",
		  "alpha2_code" : "TR",
          "alpha3_code" : "TUR"}]
		 }
      })
	 
     .done(done);
});