'use strict';
// Cluttering up the global namespace for simplicity sakes.
var Person = function(firstName, lastName, company){
	this.firstName = firstName;
	this.lastName = lastName;
	this.company = company;
};
Person.prototype.getEmailAddress = function() {
	return (this.firstName.charAt(0)+this.lastName+'@'+this.company+".com").toLowerCase();
};
Person.prototype.isEmployed = function() {
	return this.company !== '';
}