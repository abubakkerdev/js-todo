// H.W-1 Array Sort
let arr = [2, 70, 5, 6, 3, 60, 8, 90, 100];
let number = [];

console.log('Array Sort Start');
console.log(arr);

arr.map((item, indexOne) => {
  arr.map((el, indexTwo) => {
    if (arr[indexOne] <= arr[indexTwo]) {
      let temp = arr[indexOne];
      arr[indexOne] = arr[indexTwo];
      arr[indexTwo] = temp;
      number[indexTwo] = arr[indexTwo];
    }
  });
});

console.log(arr);
console.log(number);







// H.W-2 Array unique number filter
let arr4 = [2, 70, -3, 5, 2, 6, 3, 60, 8, -2, 90, 2, 100, -3, 90, 6, 8, 5, -2, 3];

console.log('Array unique number filter');
let arr3 = [];

arr4.map((item) => {
  if (arr3.indexOf(item) === -1) {
    arr3.push(item);
  }
});

console.log(arr4);
console.log(arr3);




// H.W-3 Array odd even number filter
let arr5 = [2, 70, 5, 6, 3, 60, 8, 2, 90, 100, 90, 6, 8, 5, 2, 3];
let odd = [];
let even = [];


console.log('Array odd even number filter');

arr5.map((el) => {
  if (el % 2 === 0) {
    even.push(el);
  } else {
    odd.push(el);
  }
});
console.log(arr5);
console.log(odd);
console.log(even);
