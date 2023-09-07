const accID = 100
let accEmail = "myemail@gmail.com"
var accPassword = "12345"
accCity = "Delhi"
let accState;

// accID = 110 //  not allowed

accEmail = "youremail@gmail.com"
accPassword = "567890"
accCity = "Mumbai"

/* prefer not to use var 
    since it scope problems */

console.log(accID);
console.table([accID, accEmail, accPassword, accCity, accState]);