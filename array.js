function maxConsequtiveOne(arr) {
    const n = arr.length;
    let count = 0, res = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 1) {
            count = 0;
        } else {
            count++;
            res = Math.max(res, count);
        }
    }
    return res;
}

const result = maxConsequtiveOne([1, 1, 2, 3, 1, 0, 1, 1, 1, 1]);
console.log('res>>', result);

function freq(arr) {
    let freq = {}
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]]++;
        } else {
            freq[arr[i]] = 1;
        }
    }
    console.log('frequency', freq);
}

console.log('freq', freq([40, 50, 50, 50]));

function maximumDifference(arr) {
    let res = arr[1] - arr[0];
    let min = arr[0];
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        res = Math.max(res, arr[i] - min);
        min = Math.min(min, arr[i]);
    }
    return res;
}

console.log('res>>', maximumDifference([2, 4, 6, 1, 8, 10]));
//TC O(n) AS O(1)

// function maximumDifference(arr){
//     let res = arr[1]-arr[0];
//     const n = arr.length;
//     for (let i=0;i<n-1;i++){
//         for (let j=i+1;j<n;j++){
//             res = Math.max(res, arr[j]-arr[i]);
//         }
//     }
//     return res;
// }
// console.log('res>>', maximumDifference([2,4,6,8,10]));
//TC O(n^2) AS O(1)

function leftRotateByDPlaces3(arr, d) {
    const n = arr.length;
    let temp = Array.from(d).fill(null);
    for (let i = 0; i < d; i++) {
        temp[i] = arr[i];
    }
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }
    for (let i = 0; i < d; i++) {
        arr[n - d + i] = temp[i];
    }
}

let brr = [1, 2, 3, 4, 5]
console.log('Before rotation', brr);
leftRotateByDPlaces3(brr, 2);
console.log('After rotation', brr);

// O(d+n-d+d) O(n)

function leftRotateByDPlaces2(arr, d) {
    const n = arr.length;
    reverseArray(arr, 0, d - 1);
    reverseArray(arr, d, n - 1);
    reverseArray(arr, 0, n - 1);
}

function reverseArray(arr, beg, end) {
    let temp;
    while (beg < end) {
        temp = arr[beg];
        arr[beg] = arr[end];
        arr[end] = temp;
        beg++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5]
console.log('Before rotation', arr);
leftRotateByDPlaces2(arr, 2);
console.log('After rotation', arr);

// O(d+n-d+n) O(1)

function leftRotateByDPlaces(arr, d) {
    for (let i = 0; i < d; i++) {
        leftRotateByOne(arr);
    }
}

leftRotateByDPlaces([1, 2, 3, 4, 5], 2);

// O(nd) O(1)

function leftRotateByOne(arr) {
    const temp = arr[0];
    let i;
    for (i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[i - 1] = temp;
    console.log('After left rotation>>', arr);
}

// leftRotateByOne([1,2,3,4,5]);


function moveZerosToEnd(arr) {
    const n = arr.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[count]] = [arr[count], arr[i]];
            count++;
        }
    }
    console.log('After moving zeroes to end', arr)
}

moveZerosToEnd([1, 0, 0, 2, 3, 0, 4, 5]);

function removeDuplicates(arr) {
    return [...new Set(arr)];
}


console.log('removeDuplicates>>', removeDuplicates([10, 10, 20, 20, 30]));


function checkIfSorted(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1])
            return false
    }
    return true;
}

console.log('checkIfSorted>>', checkIfSorted([1, 2, 3, 4, 5]));
// // TC O(n) AS O(1)


// function reverseArray(arr, beg, end) {
//     let temp;
//     while (beg < end) {
//         temp = arr[beg];
//         arr[beg] = arr[end];
//         arr[end] = temp;
//         beg++;
//         end--;
//     }
//     console.log('reversedArray', arr);
// }

reverseArray([1, 2, 3, 4, 5], 0, 4);

// // TC O(n) AS O(1)

function secondLargest(arr) {
    let first, second;
    first = second = Number.MIN_VALUE;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        first = Math.max(first, arr[i]);
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] !== first) {
            second = Math.max(second, arr[i]);
        }
    }
    if (second === Number.MIN_VALUE)
        return -1;
    return second;
}

console.log('secondLargest>>', secondLargest([10, 30, 40, 1, 3, 5]));
// // TC O(n) AS O(1)


