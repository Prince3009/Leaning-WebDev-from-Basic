// Define a variable
let num = 10;

// if statement
if (num > 0) {
  console.log("The number is positive."); // Output: The number is positive.
}



// if-else statement
if (num % 2 === 0) {
  console.log("The number is even."); // Output: The number is even.
} else {
  console.log("The number is odd.");
}



// if-else if-else statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // Output: Grade: B
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}



// nested if-else statement
let age = 20;
let hasTicket = true;

if (age >= 18) {
  if (hasTicket) {
    console.log("Allowed to enter."); // Output: Allowed to enter.
  } else {
    console.log("Not allowed to enter. No ticket.");
  }
} else {
  console.log("Not allowed to enter. Underage.");
}



// switch statement
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday"; // Output: Today is Tuesday.
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Today is " + dayName);
