const accountId = 123456789;
let accountEmail = "test@gmail.com";
var accountPassword = "123456";
accountcity = "Pune";

// accountId = 123 // cant change the const value

accountEmail = "one@email.com";
accountPassword = "abc";
accountcity = "Mumbai";
let accountstate;

console.table([accountEmail, accountPassword, accountcity,accountstate]);

/*
   Prefer not use var
   because it is function scoped and not block scoped
*/