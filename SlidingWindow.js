//Sliding Window Technique
//Technique to not fail the interview
//Take an array [1,2,3,4,5,6]
//if I needed to find all subarrays of length k = 3
//a brute force approach would cause me to iterate over two previous numbers again

//compute sum of every subarray of length l using a static sliding window

const arr = [1,2,3,4,5,6,7];
const k = 3;

const sumSubArr = function(arr, k) {

    let sum = arr.slice(0,3).reduce((acc, el) => acc + el, 0);
    const sumArr = [sum];

    for (let i = 0; i < arr.length; i++) {
        if (i + k >= arr.length) break;
        sum = sum - arr[i];
        sum = sum + arr[i + k];

        sumArr.push(sum);
    }

    return sumArr;


} 

console.log(sumSubArr(arr, k));