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


/* const numPath = function(row, col, memo = {}) {

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
console.log(numPath(18,18)); */


//Write a function canSum(targetSum, [numbers]) , should return boolean if it is possible
//to generate a targetSum using numbers from the array
//An element can be used indefinately
//all input numbers are non-negative


/* const canSum = function(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        if (canSum(targetSum - num, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;

}

console.log(canSum(7,[5,4,4,8])); */


//Write a funciton howSum(targetSum, [numbers])
//The function should return an array containing any combination of elements that adds up to the targeSum
//If no combination adds up to target, return null

/* const howSum = function(targetSum, numbers, memo = {}) {

    if (memo[targetSum]) return memo[targetSum];
    if (targetSum == 0) return [];
    if (targetSum < 0) return null;
    
    for (let num in numbers) {
        const remainderResult = howSum(targetSum - num, numbers, memo);
        if (remainderResult) {
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum];
        }
    }
    
    memo[targetSum] = null;
    return memo[targetSum];

}

console.log(howSum(7,[5,3,4,7])); */


//Write a function bestSum(targetSum, numbers)
//The function should return an array containing the shortest combination of numbers that add up
//to the target sum, if there is a tie, than return either one of the shortest

/* const bestSum = function(targetSum, numbers, memo = {}) {

    if (memo[targetSum]) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombo = null;

    for (let num of numbers) {
        const remainder = bestSum(targetSum - num, numbers, memo);
        if (remainder) {
            const combination = [...remainder, num];
            if (shortestCombo == null || shortestCombo.length > combination.length) {
                shortestCombo = combination;
            }
        }
    }

    memo[targetSum] = shortestCombo;
    return shortestCombo;

}

console.log(bestSum(7, [5,3,4,7])); */


//Given a targetString and an array of strings, make a canConstruct function that returns a boolean
//Whether the target string can be constrcuted out of the elements of the array

/* const canConstruct = function(targetString, strings, memo = {}) {

    if (memo[targetString]) return memo[targetString];
    if (targetString == '') return true;

    for (let string of strings) {
        if (targetString.indexOf(string) == 0) {
            const suffix = targetString.slice(string.length);
            if (canConstruct(suffix, strings, memo)) {
                memo[targetString] = canConstruct(suffix, strings)
                return true;
            }
        }
    }

    memo[targetString] = false;
    return false;

}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); */