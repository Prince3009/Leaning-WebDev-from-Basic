/* Logical operator are of three types:
1. Logical AND - &&
2. Logical OR - ||
3. Logical NOT - !
*/

/* Logical opertors for truthy and falsey values
Truthy values - "SomeValue"
Falsey values - "", 0, null, undefined
*/

const firstName = "Prince";
const nickName = "";

console.log(firstName && nickName); // false because nickName is empty string

console.log(firstName || nickName); // true because firstName is not empty string

//If both values are falsey values in OR operation then it will return last falsey value or first truthy values

//And in AND operation it will return first falsey value or last truthy value