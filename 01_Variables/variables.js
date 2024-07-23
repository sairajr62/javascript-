const account_id=144553
let accountEmail="sairaj56@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// account_id=12456// not allowed
accountEmail="hc@hc.com"
accountPassword="5678945"
accountCity="Mumbai"

/*PREFER not to use var because issues in block and Functional scope  */
console.log(account_id);
console.table([account_id, accountEmail, accountPassword, accountCity,accountState]);