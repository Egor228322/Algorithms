//Tabulation is another way of thinking about dynamic programming by solving problems iteratively
//and creating a table

//Fibonacci Tabulation
//0th number is 0 and 1st number is 1

/* const fib = function(number) {

    const table = new Array(number + 1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= number; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }

    return table[number];

}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50)); */

//Grid Traveler