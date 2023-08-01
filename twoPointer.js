//Two Pointer technique
//Strings and arrays benefit largely from this techique
//This technique is helpful when we have to analyze 
//each element of the collection compared to its other elements
//As a result we can process two elements per loop instead of one

//Two Sum probelem

const arr = [1,2,3,5,6,7,8];
const target = 5;

const twoSum = function(arr, t) {

    let pointer1 = 0;
    let pointer2 = arr.length - 1;

    while (pointer1 < pointer2) {
        const sum = arr[pointer1] + arr[pointer2];

        if (sum == t) {
            return [pointer1, pointer2];
        } else if (sum < target) {
            pointer1++;
        } else {
            pointer2--;
        }

    }
}


console.log(twoSum(arr, target));