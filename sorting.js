//Sorting is a large field of data manipulation

const letters= ['a', 'r', 'c', 'b', 'e'];
const basket = [1, 17, 12, 0, 50];

//[0, 1, 5, 12, 50];
/* basket.sort((a,b) => a - b); */


//Different browsers use different sorting algorithms


//Bubble sort, a part of elementary sorts
//It is an inefficient algorithm, O(n^2)


const bubbleSort = function(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                //Swap numbers
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//Selection Sort 
//Scan the whole list of items
//Find the smallest item
//If the list is finished replace the item at the 0th index, then 1st and so on.
//It is an inefficient algorithm, O(n^2)

const selectionSort = function(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        let smallestIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }

        if (smallestIndex !== i) {
            // Swap the elements
            let temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }
    }

    return arr;
}

//Insertion Sort
//O(n) when the data is nearly sorted as well as if there is a small dataset

const numbers = [99,44,6,2,1,5,87,283];

const insertionSort = function(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {

        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i, 1)[0]);
        }

        else {
            
            if (arr[i] < arr[i - 1]) {

                for (let j = 0; j < length; j++) {
                    if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
                        arr.splice(j, 0, arr.splice(i, 1)[0]);
                    }

                }

            }

        }

    }

    return arr;
}


//Merge Sort
//Divide the list in half until every item is separated
//Then merge those items together until sorted
//Time complexity O(n log(n))
//Space complexity O(n) unlike the previous ones








