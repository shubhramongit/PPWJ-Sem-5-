// Variables
const username = "Hello";                      // string
const loginPIN = 1234;                         // number
const bigUserID = 12345678901234567890n;      // bigint
const premiumMembership = true;                // boolean
const uniqueSymbolID = Symbol("uniqueID");    // symbol
let profilePicture;                            // undefined (not assigned)
const status = null;                           // null

// Print types
console.log(typeof username);          // "string"
console.log(typeof loginPIN);          // "number"
console.log(typeof bigUserID);         // "bigint"
console.log(typeof premiumMembership); // "boolean"
console.log(typeof uniqueSymbolID);   // "symbol"
console.log(typeof profilePicture);   // "undefined"
console.log(typeof status);            // "object" (special case for null)
