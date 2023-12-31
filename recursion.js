//Recursion is used in tree traversal (lookups)
//The problem with recursion is that it can cause an infinte loop
//It uses lots of memory to store the function calls in the stack

let counter = 0;

function inception() {
    if (counter > 3) {   //Base Case
        return 'done';   //Return base case
    }
    counter++            //Recursive case
    return inception();  //Return the function itself, so that the return value bubbles up
}


//Write two functions that find the factorial of any number. One should use recursion,
//The other should use a for loop
//10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1


const fibonacciItorative = function(n) {
    let number1 = 0;
    let number2 = 1;
    let sequence = [];

    sequence.push(number1);

    for (let i = 0; i < n; i++) {
        sequence.push(number2);
        let number3 = number1 + number2;
        number1 = number2;
        number2 = number3;
    }
    return [sequence[n], sequence];
}

let number1 = 0;
let number2 = 1;
let sequence = [0];
const fibonacciRecursive = function(n) {
    if (sequence.length == n + 1) {
        return sequence[n];
    } else {
        sequence.push(number2);
        let number3 = number1 + number2;
        number1 = number2;
        number2 = number3;
        return fibonacciRecursive(n);
    }
}


console.log(fibonacciRecursive(10));

//Recursive algorithms are easier to write than iterative algorithms
//Helps to keep the code DRY, easier to read
//However it requires extra memory compared to an iterative method
//There are ways to write recursion methods that are memory efficient
//javascript offers a Tail Call Optimization (allows recursion to execute without incresing the call stack)

//When to use recursion

//1. When a problem looks like it can be broken down into smaller subproblems
//2. Each instance of the subproblem is identical
//3. The solution of each subproblem can be combined to solve the intial problem


//Trees are so much easier to traverse thanks to recursion

//Used for:
//Merge sort 
//Quick sort
//Tree traversal
//Graph traversal

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);

  
  return merge (
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else {
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);


//[99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//[99,44,6,2,1] [5, 63, 87, 283, 4, 0]
//[99, 44] [6, 2, 1]  [5,63,87] [283, 4, 0]
//[99] [44] [6] [2,1] [5] [63, 87] [283] [4, 0]
//[99] [44] [6] [2] [1] [5] [63] [87] [283] [4] [0]
//[44, 99] [6] [1, 2] [5] [63, 87] [283] [0, 4]
//[44, 99] [1,2,6] [5, 63, 87] [0, 4, 283]
//[1, 2, 6, 44, 99] [0, 4, 5, 63, 87, 283]                                     
//[]
//
//
//merge sort
//      merge 
//          merge sort [99,44,6,2,1]
//                  merge *
//                      merge sort [99, 44]
//                              merge *
//                                  merge sort [99]
//                                  merge sort [44]
//                      merge sort [6, 2, 1]
//                              merge *
//                                  merge sort [6]
//                                  merge sort [2,1]
//                                          merge *
//                                              merge sort [2]
//                                              merge sort [1]
//          merge sort [5, 63, 87, 283, 4, 0]
//                  merge 
//                      merge sort [5,63,87]
//                              merge *
//                                  merge sort [5]
//                                  merge sort [63, 87]
//                                          merge *
//                                              merge sort [63]
//                                              merge sort [87]
//                      merge sort [283, 4, 0]
//                              merge *
//                                  merge sort [283]
//                                  merge sort [4, 0]
//                                            merge *
//                                              merge sort [4]
//                                              merge sort [0]
//
//
//
const arr = [2,1,83,67,102,0];

const quickSort = function(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const left = [];
    const right = [];
    const pivot = arr[arr.length - 1];
    
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));

//[2,1,83,67,102,0]
//             0    quickSort
//     [2,1]      [83,67,102]        
//       1  quicksort   102  quicksort
//         [2]  [83,67]
//                  67 quickSort
//                     [83] arr.length < 2
//              [67, 83]
//      [1,2]        [67,83,102]
//          [1,2,67,83,102]


//Easy to implement, very fast with small data input
//Bubble sort, don't use it, it's shit
//Selection Sort, don't use it, it's shit
//Merge sort, good because has O(n log(n)) time complexity always, space complexity O(n)
//Quick sort is the preferred method due to the balance of time and space complexity
//Be careful of worst case scenario where the time complexity is O(n^2) due to a poor choice
//of the pivot point








