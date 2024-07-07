/* syntax - 
for(startingValue, condition, increment/decrement){

    }
*/
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < i; j++) {
    console.log("*");
    }
}



//Printing square of a number
for(let i = 1; i < 10; i++){
    console.log(i*i);
}



//Printing cube of a number
for(let i = 1; i < 10; i++){
    console.log(i*i*i);
}



//Nested For Loop
/* 
i x j = i*j
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
.......
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
*/
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log("-------");
}



//Star Pattern
/*
*
* *
* * *
* * * *
* * * * *
*/
const symbol = "* ";

for(let i = 0; i < 10; i++){
    console.log(symbol.repeat(i+1));
}



//Reverse Star Pattern
/* 
 * * * * *
 * * * *
 * * *
 * *
 *
*/
for(let i = 10; i >= 0; i--){
    console.log(symbol.repeat(i+1));
}




//Counting the number of characters in a string
let str = "Hello World!";
let count = 0;

for(let i = 0; i < str.length; i++){
    count++;
}
console.log(count);



//Given a range og number from 0 to 100, find all even numbers
for(i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}



//Given a range og number from 0 to 100, find all odd numbers
for(i = 0; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}



//Checking vowels in a string
let string = "Hello World!";
let vowels = "aeiouAEIOU";
let countVowels = 0;

for(let i = 0; i < string.length; i++){
    if(vowels.includes(string[i])){
        console.log(`${string[i]} is a vowel`);
    }
    else{
        console.log(`${string[i]} is not a vowel`);
    }
}