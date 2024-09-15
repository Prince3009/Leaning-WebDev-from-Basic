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




//Adding properties to the object - Computed properties
// let person3 = {
//     name : "Ravi",
//     age : 30
// }

// const readLineSync = require('readline-sync');
// const question = readLineSync.question("What do you want to ask(name/age/city/country)");

// person3.city = "New York";       //adding a new property to the object
// person3.country = "USA";       

// console.log(person3);

// console.log(person3[question]);     //Computed property usage - adding new property to the person3 object using [] notation




//Shorthand properties(optional)
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
    console.log(key, obj2[key]);           /* Output: name Prince
                                                      age 20       */
    
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





//Optional chaining(for nested objects)
let obj6 = {
    name : "Prince",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
        country: {
            name: "USA"
        }
    },
    getDisplayMessage: function() {
        console.log("Welcome Prince");
    }   
    
}

console.log(obj6.address.country.name);      //Output: USA and it will check till the country

console.log(obj6.address?.name);               //Output:undefined and it will check till address only
                                               //obj6.address?.name will be undefined because it is not a property of obj6.address
                                               //if we don't use ? then it will show error in the output

//Also works in functions
obj6.getDisplayMessage();                  //Output: Welcome Prince

obj6.getDisplayUser?.();                  //Here it will check for the property first that it exists or not
                                          //Output: undefined and it will not call getDisplayUser function because it is not a property of obj6





//Destructuring Object - unpacking of values from arrays or properties from objects into distinct variables
const obj7 = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra'
    },
    courses: ['JavaScript', 'React', 'Node.js']
};

const{name, address, courses} = obj7;
console.log(name);                        //Output: Prakash
console.log(address);             //Output: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }
console.log(courses);             //Output: [ 'JavaScript', 'React', 'Node.js' ]


// Nested Destructuring
const { address: { city, state } } = obj7;
console.log(city); // Output: Mumbai
console.log(state); // Output: Maharashtra


//Renaming Variables
const { name: userName, address: { city: userCity } } = obj7;
console.log(userName); // Output: Prakash
console.log(userCity); // Output: Mumbai


//Using Rest Operator
const obj8 = {
    Name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra'
    }
}
const { Name, ...rest } = obj8;
console.log(Name); // Output: Prakash
console.log(rest); // Output: { address: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }, courses: ['JavaScript', 'React', 'Node.js'] }






//Object method - (key, value and entries)
let obj9 = {
    name : 'Prince',
    age : 20, 
    course : 'JavaScript'
}

//Object.entries
let entries = Object.entries(obj9);

console.log(entries);           // Output:[ [ 'name', 'Prince' ], [ 'age', 20 ], [ 'course', 'JavaScript' ] ]

//Object.keys
let keys = Object.keys(obj9);
console.log(keys);              //Output: [ 'name', 'age', 'course' ]

//Object.values
let values = Object.values(obj9);
console.log(values);            //Output: [ 'Prince', 20, 'JavaScript' ]



//Constructor new - The new keyword is used to create an instance of a constructor function or class.
//It creates a new object and assigns the prototype of the constructor to the new object.
function Person(name, age) {
      this.name = name;
      this.age = age;
    }
  
  let p1 = new Person("John", 30);
  console.log(p1);                         //Output: Person { name: 'John', age: 30 }

  let p2 = new Person("Anny", 23)
  console.log(p2);                         //Output: Person { name: 'Anny', age: 23 }
  
  
  

//Call, Apply and Bind methods
//call - call is a method used to invoke a function with a specified this value and arguments passed individually
  function greet() {

    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  }
  let p3 = {
    name: "John",
    age: 30
  }
  greet.call(p3); // Output: Hello, my name is John and I am 30 years old


//apply - apply is a method used to invoke a function with a specified this value and arguments passed as an array
  function greet(age, city) {
    console.log(`${this.name} is ${age} years old and lives in ${city}`);
  }
  let p4 = { name: 'John' };
  greet.apply(p4, [30, 'New York']);         //Output: John is 30 years old and lives in New York


//bind - bind is used to create a new function that, when called, has its this keyword set to the provided value. Unlike call or apply, bind does not invoke the function immediately.
let p5 = { name: 'John' };
let greet = function() {
  console.log(`Hello, ${this.name}`);
}.bind(p5);

greet(); // Output: Hello, John

  
  

