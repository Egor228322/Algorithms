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

/* const fib = function(n, memo = {}) {
    if (memo[String(n)]) return memo[String(n)];
    if (n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50)); */

//Compute the number of ways (with the shortest path) to traverse a grid from the starting cell to the last cell 
//In this problem the base case will be either a (0,n), (n, 0) or a (1,1) size grid
//Each move, right or down will decrease the size of the grid that needs to be traveled

//In the example, the function will take in two parameters of the height and width of the grid


const numPath = function(row, col, memo = {}) {

    const entry = `${row},${col}`;

    if (memo[entry]) return memo[entry];
    if (row == 0 || col == 0) return 0;
    if (row == 1 && col == 1) return 1;

    memo[entry] = numPath(row - 1, col, memo) + numPath(row, col - 1,memo);
    return memo[entry];
}

console.log(numPath(3,4));
console.log(numPath(2,3));
console.log(numPath(3,2));
console.log(numPath(18,18));