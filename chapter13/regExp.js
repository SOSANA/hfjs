/**
 * The key to understanding regular expressions is learning how to read the search patterns. 
 * These search patterns are the most complex part of regular expressions, so we’ll work 
 * through the two examples here, and you’ll have to explore the rest on your own.
 * Refer to appendix p.612
*/

var phoneNumber = new RegExp(/^\d{3}-?\d{4}$/);
var amyHome = "555-1212";
var result = amyHome.match(phoneNumber);
console.log(result);

var invalid = "5556-1212";
var result2 = invalid.match(phoneNumber);
console.log(result2);
