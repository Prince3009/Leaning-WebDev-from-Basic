/*
try{
    risky code 
}
catch(error){
    console.log(error);
}
finally{
//This code will always execute, no matter what
}
*/

try{
    console.log(nonDeclaredVariable);
}
catch(error){
    console.log("Error: " + error);
    console.log(error.name);                //display name of the error
    console.log(error.message);             //display what is the error
    console.log(error.stack);               //display from where the error occurred

}