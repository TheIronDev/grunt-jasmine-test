'use strict';

describe("Person", function(){
	var john;

	beforeEach(function() {
		john = new Person("John", "Doe", "HomeAway");	
	});

	it("should have a valid email address", function() {		
		expect(john.getEmailAddress()).toEqual("jdoe@homeaway.com");
	});
	it("should have a job", function() {		
		expect(john.isEmployed()).toBeTruthy();
	});
});