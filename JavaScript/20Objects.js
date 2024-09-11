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




//Shorthand properties
function personObj(name, city, country){
    return{
        name,
        city,
        country
    }
}

let person4 = personObj("John", "New York", "USA");
console.log(person4);




//property existence check
let obj2 = {
    name : "Prince",
    age: 20
}
console.log("name" in obj2);

console.log("state" in obj2);   //returns false because 'state' is not a property of obj2

//for in
for(let item in obj2){
    console.log(item);                //Output: name age
}

for(let key in obj2){
    console.log(key, obj2[key]);           //Output: name Prince
                                           //         age 20
    
}





//Object reference and Shallow copy
let obj3 = {
    name : "Prince",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York"
    }
}   
console.log("obj3: ", obj3);

let obj4 = obj3;               //obj4 is a reference to obj3

obj4.name = "John";
console.log("obj4: ", obj4);

console.log("Updated obj3: ", obj3);         //Output: John(Here we did not change the name of obj3 but instead of that it got changed due to same memory reference called shalloww copy)


let obj5 = Object.assign({}, obj3);

obj5.name = "Ravi";
console.log("obj5: ", obj5);

console.log("Updated obj3: ", obj3);         //Output: Prince(Here we changed the name of obj3 and it didn't affect obj5 but it will affect the nested object)

obj5.address.street = "BB";
obj5.address.city = "Bhagalpur";

console.log("Updated obj3:", obj3);          //here the street and city of obj3 will also get changed but we  change it in the nested object i.e., nested objects gets affects by Object.assign method
