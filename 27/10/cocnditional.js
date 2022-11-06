

// Facebbok will allow acces is credentials are correct else gives error

let username="john.Doe";
let password="Password123";

let providedUsername="john.Doe";
let providedPassword="Password1234";

const isUserAlareadyLoggedIn=true;

const result = username==providedUsername && password==providedPassword // true or false

// if expression to check if result is ttrue or false and takes actions accordinlgly
if(result){
    // body of  if condition.
    // this will ececute when result is true.
    console.log ("AccesS IS Granted");

}
else if (isUserAlareadyLoggedIn){
    console.log("Access is Granted as user is already loggged in");
}
else
{
     console.log("Incorrect Credentials");
}
