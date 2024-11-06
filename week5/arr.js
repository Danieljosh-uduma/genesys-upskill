let arr = [23, 45, 56, 73, 45, 23, 98];

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function average(arr) {
    let sum = arrSum(arr);
    let avg = sum / arr.length;
    return avg;
}

function maxNumber(arr) {
    let max_number = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max_number < arr[i]) {
            max_number = arr[i];
        }
    }
    return max_number
}

// sum of the array
let arraySum = arrSum(arr);
console.log(arraySum);

// average value of the array
let averageValue = average(arr) ;
console.log(averageValue);

// highest number in the array
let highestNumber = maxNumber(arr);
console.log(highestNumber);