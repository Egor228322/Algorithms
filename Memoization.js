//The main principle about memoization is if the same funciton call is encountered
//The first time the function is called, the result is already stored in a data structure
//Consequently the runtime of a program that makes several of the same funciton call would be shorter

/* let result = new Map();

const returnVal = function(length) {
    if (result.has(length)) {
         console.log(result.get(length));
    } else {
        let count = 0;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < 1000; j++) {
                count+=j;
            } 
        }

        result.set(length, count);
        console.log(count);
    }
}

returnVal(1000000);
returnVal(1000000);
returnVal(1000000); */

//Compared to a an approach without the memo (MAP)
//This program would take a considerably longer time to execute
//The first time the function is called, the count is stored in a MAP object with a length key
//The second and third times this function is called, the result is returned immediately


//Problems
//A function that returns the nth fibonacci number

const fib = function(n, memo = {}) {
    if (memo[String(n)]) return memo[String(n)];
    if (n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));