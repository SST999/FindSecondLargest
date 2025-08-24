function findSecondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

document.getElementById('findBtn').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const arr = input.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
    const resultDiv = document.getElementById('result');
    if (arr.length < 2) {
        resultDiv.textContent = 'Please enter at least two valid numbers.';
        return;
    }
    const secondLargest = findSecondLargest(arr);
    if (secondLargest === null) {
        resultDiv.textContent = 'No second largest number found (all numbers may be equal).';
    } else {
        resultDiv.textContent = 'Second largest number: ' + secondLargest;
    }
});




//Using Sorting

// let a = [10, 20, 4, 45, 99, 99];
// a.sort((a, b) => b - a);

// let first = a[0];
// let res = null;

// for(let i=1; i<a.length; i++){
//     if(a[i] < first){
//         res = a[i];
//         break;
//     }
// }
// console.log(res !== null ? res : "No seond largest element");


//Using Set

// let a = [10, 20, 4, 45, 99, 99, 45];
// let uni = [...new Set(a)];
// uni.sort((a, b) => b-a);
// let res = uni[1];
// console.log(res);


//Using Iteration

// let a = [10, 20, 4, 99, 99, 45];
// let b = -Infinity,
//     c = -Infinity;

//     for(let num of a){
//         if(num > b){
//             c=b;
//             b=num;
//         } else if(num > c && num < b){
//             c = num;
//         }
//     }
//     console.log(c);


//Using Two Variables

// let a = [1, 2, 3, 4, 5, 5];
// let [fir, sec] = [-Infinity, -Infinity];

// for (let n of a) {
//     if (n > fir) {
//         [sec, fir] = [fir, n];
//     } else if (n > sec && n < fir) {
//         sec = n;
//     }
// }
// console.log("The sec largest element is: " + sec);


//Using Array.slice and Array.sort

// const a = [10, 5, 20, 8, 20, 15];
// const sort = a.slice().sort((a, b) => b - a);

// let sec = null;
// for (let i = 1; i < sort.length; i++) {
//     if (sort[i] < sort[0]) { 
//         sec = sort[i];
//         break;
//     }
// }

// console.log("Second largest element:", sec !== null ? sec : "No second largest element");


// Using Reduce Method

// let a = [10, 20, 4, 99, 99, 45];
// let res = a.reduce(
//     (acc, num) => {
//         if (num > acc[0]) {
//             acc[1] = acc[0];
//             acc[0] = num;
//         } else if (num > acc[1] && num < acc[0]) {
//             acc[1] = num;
//         }
//         return acc;
//     },
//     [-Infinity, -Infinity]
// );
// console.log(res[1]);