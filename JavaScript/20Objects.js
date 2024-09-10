//Objects --> {key : value}

//Object literal

let person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    course: ['html', 'css', 'js'],
    "is Admin": true
};
console.log(person);                  //prints the whole object

console.log(person.name);            //prints the value of 'name' key

console.log(person.course);          //prints the value of 'course' key

console.log(person["country"]);        //prints the value of 'country' key

console.log(person["is Admin"]);        //[] used to access the key which consists of two words





//Function as an object property
let person2 = {
    name : "Prince",
    greetMessage : function(){
        console.log("Hello, my name is Prince");
    },
    bye(){
        console.log("Goodbye, my name is Prince");             //another way to use function inside object
    }
}
person2.greetMessage();          //calls the function that is a property of the object person2

person2.bye();                //calls the function that is a property of the object person2




//Adding properties to the object
//Computed properties
const readLineSync = require('readline-sync');
const question = readLineSync.question("What do you want to ask(name/age/city/country)");
let person3 = {
    name : "Ravi",
    age : 30
}

person3.city = "New York";       //adding a new property to the object
person3.country = "USA";       

console.log(person3);

console.log(person3[question]);     //Computed property usage