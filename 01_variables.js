const accountId = 123456;
let accountEmail = "sachin@google.com";
var accountPassword = "12345";
accountCity = "Bangalore";

//accountId = 2; // not allowed

accountEmail = "hc@hc.com"
accountPassword = "abcd"
accountCity = "New York"

console.log(accountId); 

/* prefer not to use var
beacuse of issue in block scope and functional scope */

console.table([ accountId, accountEmail, accountPassword, accountCity]);

