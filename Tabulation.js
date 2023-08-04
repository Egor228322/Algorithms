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


/* const gridTravel = function(r, c) {

    const array = new Array(r + 1).fill(0).map(el => new Array(c + 1).fill(0));
    array[1][1] = 1;

    for (let i = 0; i <= r; i++) {
        for (let j = 0; j <= c; j++) {
            if (j + 1 <= c) array[i][j+1] += array[i][j];
            if (i + 1 <= r) array[i + 1][j] += array[i][j];
        }
    }

    return array[r][c];

}   

console.log(gridTravel(4,4)); */

const gridTravel = function(r, c) {
    const array = new Array(r + 1).fill(0).map(() => new Array(c + 1).fill(0));
    array[1][1] = 1;

    for (let i = 0; i <= r; i++) {
        for (let j = 0; j <= c; j++) {
            if (j + 1 <= c) array[i][j+1] += array[i][j];
            if (i + 1 <= r) array[i + 1][j] += array[i][j];
        }
    }

    return array[r][c];
}

console.log(gridTravel(18, 18));