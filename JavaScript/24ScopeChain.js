/* A scope chain is the mechanism that JavaScript uses to find variables. When a variable is accessed, JavaScript first looks in the current scope. If it doesn’t find the variable, it moves up to the outer scope, continuing until it either finds the variable or reaches the global scope. If the variable is not found in the global scope, a reference error is thrown. */

//1.
let a = 3;

function x() {
    let b = 5;

    function y() {
        let c = 7;
        
        function z() {
            console.log(a); // Logs 3
            console.log(b); // Logs 5
            console.log(c); // Logs 7
        }
        
        z();
    }
    
    y();
}

x();
/* Output : 3
            5
            7  */
