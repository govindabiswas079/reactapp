import React, { Fragment } from "react";
import { useSelector } from "react-redux"

const App = () => {
  const { name } = useSelector((state) => state?.app)
  console.log(name)
  /*  */
  // 1. Custom sorting program in JS via Bubble Sort ?
  // let unSortArr = [4, -1, 34, "09", -9, 103]
  // const sortArr = (inputArr) => {
  //   for (let i = 0; i < inputArr.length; i++) {
  //     for (let j = i + 1; j < inputArr.length; j++) {
  //       let temp = inputArr[i];
  //       if (inputArr[i] > inputArr[j]) {
  //         inputArr[i] = inputArr[j];
  //         inputArr[j] = temp;
  //       }
  //     }
  //   }
  //   return inputArr;
  // }
  // console.log(sortArr(unSortArr));



  /*  */
  // Write a program to check if a string or word or number is palindrome ?
  // function isPalindrome(str) {
  //   let rev = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     rev += str[i];
  //   }
  //   if (rev == str) {
  //     return true
  //   } else {
  //     return false;
  //   }
  // }
  // console.log(isPalindrome("racecar")); // returk true if revers and string is same
  // console.log(isPalindrome("abc")); // // returk false if revers and string is not same
  // console.log(isPalindrome("121"));


  /*  */
  // revers char from string
  // const string = "my name is prem"
  // const reversChar = (str = '') => {
  //   let revers = ""
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     revers += str[i]
  //   }
  //   return revers
  // }
  // console.log(reversChar(string))


  /*  */
  // revers word from string
  // const string = "my name is prem"
  // const reversChar = (str = '') => {
  // const strArr = str.split(" ")
  // let revers = ""
  // for (let i = strArr.length - 1; i >= 0; i--) {
  // revers += strArr[i] + " "
  // }
  // return revers
  // }
  // console.log(reversChar(string))
  // console.log(string.split(/\s/).reverse().join(" "));


  /*  */
  // revers word from string
  // function reverseWord(sentence = "") {
  // return sentence.split(' ').map(function (word) {
  // return word.split('').reverse().join('');
  // }).join(' ');
  // let revers = "";
  // const sentenceArr = sentence.split(" ");
  // for (let i = 0; i < sentenceArr.length; i++) {
  // revers += sentenceArr[i].split('').reverse().join('') + " "
  // }
  // return revers;
  // }
  // console.log("", reverseWord("my name is prem"));


  /*  */
  // Write a program to check if value/target exists or not in ascending array in O(log n) time complexity ?
  // const customInArray = (sortedArray = [], key) => {
  // let start = 0;
  // let end = sortedArray.length - 1;
  // 
  // while (start <= end) {
  // let middle = Math.floor((start + end) / 2);
  // if (sortedArray[middle] === key) {
  // return { exit: true, index: sortedArray.indexOf(key) };
  // } else if (sortedArray[middle] < key) {
  // start = middle + 1;
  // } else {
  // end = middle - 1;
  // }
  // }
  // return false;
  // }
  // console.log(customInArray([1, 3, 5, 6, 9, 14, 29, 57, 89], 29));




  /*  */
  // Write a program to get total vowel count from String ?
  // const getVowelCount = (str) => {
  // let total = 0
  // for (let i = 0; i < str.length; i++) {
  // const char = str[i]
  // if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  // total = (total + 1)
  // }
  // }
  // return total
  // }
  // console.log(getVowelCount('hello how are you today programiz website?'))


  /*  */
  // Write a program to prints factorial of any number ?
  // const getFactorial = (inputNum) => {
  // let result = 1;
  // for (let i = 1; i <= inputNum; i++) {
  // result *= i;
  // }
  // return result;
  // }
  // console.log(getFactorial(0));


  /*  */
  // Write a program for check number is prime or not ?
  // const isPrime = (inputNum) => {
  // let result = true;
  // for (let i = 2; i < inputNum; i++) {
  // if (inputNum % i === 0)
  // result = false;
  // break;
  // }
  // return result;
  // }
  // console.log(isPrime(17));


  /*  */
  // Write a program to find duplicate numbers in an integer array ?
  // const findDuplicateEle = (inputArr = []) => {
  // let duplicateEleArr = [];
  // let uniqueArr = [];
  // for (let i = 0; i < inputArr.length; i++) {
  // if (!uniqueArr.includes(inputArr[i])){
  // uniqueArr.push(inputArr[i])
  // }else {
  // duplicateEleArr.push(inputArr[i])
  // }
  // }
  // return duplicateEleArr
  // }
  // console.log(findDuplicateEle([1, 2, 3, 5, 3, 1, 9]));


  /*  */
  // separate array 
  // const separateArr = (array = []) => {
  // let strArr = [];
  // let numArr = [];
  // for (let i = 0; i < array.length; i++) {
  // if (typeof array[i] === "string") {
  // strArr.push(array[i])
  // } else if (typeof array[i] === "number") {
  // numArr.push(array[i])
  // }
  // }
  // return {
  // strArr,
  // numArr
  // }
  // }
  // console.log(separateArr([1, 2, 3, "a", "b", "c", 4, 5, 6, "d", "e", "f"]))


  /*  */
  // find even and odd number
  // const checkEven = (arr = []) => {
  // let evenArr = []
  // let oddArr = []
  // for (let i = 0; i < arr.length; i++) {
  // if (arr[i] % 2 == 0) {
  // evenArr.push(arr[i])
  // } else if(arr[i] % 1 == 0) {
  // oddArr.push(arr[i])
  // }
  // }
  // return {
  // evenArr,
  // oddArr,
  // }
  // };
  // console.log(checkEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));


  /*  */
  /// flatten array to simple array
  // function flatten(arr) {
  //   return arr.reduce(function (flat, toFlatten) {
  //     console.log(flat, toFlatten)
  //     return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  //   }, []);
  // }
  // const flatten = (arr = []) => {
  // var newArray = [];
  // for (let i = 0; i < arr.length; i++) {
  // if (Array.isArray(arr[i])) {
  // newArray = newArray.concat(flatten(arr[i]))
  // } else {
  // newArray.push(arr[i])
  // }
  // }
  // return newArray;
  // }
  // console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8]]], 9, 10, [11, 12, 13]]))



  /*  */
  // create new array using nested array object
  // const createArray = (arr = []) => {
  // var newArray = [];
  // for (let i = 0; i < arr.length; i++) {
  // newArray.push(...arr[i].hobbi)
  // }
  // return newArray;
  // return arr.reduce((prev, item) => {
  // return prev.concat(item?.hobbi)
  // }, []);
  // };
  // console.log(createArray([
  // { id: 1, name: "Prem", hobbi: ["song", "coding", "eating"] },
  // { id: 2, name: "Govinda", hobbi: ["movie", "work", "drink"] },
  // ]));


  /*  */
  // sum two number
  // const sumTwonumber = (arr = []) => {
  // return arr.reduce((prev, next) => { return prev + next; }, 0);

  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  // sum = sum + arr[i]
  // sum += arr[i]
  // }
  // return sum;

  // let sum = 0
  // arr.forEach((value) => { sum += value })
  // return sum
  // }
  // console.log(sumTwonumber([2, 3]))

  /*  */
  /// find max number from array
  // const findMaxNumber = (arr = []) => {
  //   return arr.reduce(function (prev, next) {
  //     return (prev > next ? prev : next);
  //   }, []);
  //   return Math.max.apply(Math, arr)
  // }
  // console.log(findMaxNumber([100, 0, 50]))

  /*  */
  /// find min number from array
  // const findMaxNumber = (arr = []) => {
  // return arr.reduce(function (prev, next) {
  // return (prev < next ? prev : next);
  // }, []);
  // return Math.min.apply(Math, arr)
  // }
  // console.log(findMaxNumber([100, 0, -1, 50]))


  /*  */
  // remove dublicate from array
  // const removeDublicate = (arr = []) => {
  // let uniqueArr = [];
  // for (let i = 0; i < arr.length; i++) {
  // if (!uniqueArr.includes(arr[i])) {
  // uniqueArr.push(arr[i])
  // }
  // }
  // return uniqueArr;

  // let uniqueArr = [];
  // arr.forEach((value) => {
  // if (!uniqueArr.includes(value)) {
  // uniqueArr.push(value)
  // }
  // });
  // return uniqueArr;
  // return [...new Set(arr)]
  // return arr.filter((value, index) => {
  // return arr.indexOf(value) === index
  // })
  // };
  // console.log(removeDublicate(["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"]))


  /*  */
  // sort an object alphabetically within an array
  // const sortArray = (arr = []) => {
  //   return arr.sort((prev, next) => {
  //     const direction = "asc"
  //     if (direction === "asc") {
  //       return prev?.name < next?.name ? -1 : 1
  //     } else {
  //       return prev?.name > next?.name ? -1 : 1
  //     }
  //   }, [])
  // };
  // console.log(sortArray([
  //   { id: 1, name: "a" },
  //   { id: 2, name: "b" },
  //   { id: 3, name: "c" },
  //   { id: 4, name: "d" },
  // ]))


  /*  */
  // sort large to samll an array
  // const sortArray = (arr = []) => {
  //   return arr.sort((prev, next) => {
  //     const direction = "asc"
  //     if (direction === "asc") {
  //       return prev?.age < next?.age ? -1 : 1
  //     } else {
  //       return prev?.age > next?.age ? -1 : 1
  //     }
  //   }, [])
  // };
  // console.log(sortArray([
  //   { id: 1, name: "Prem", age: 23 },
  //   { id: 2, name: "Rajeev", age: 21 },
  //   { id: 3, name: "Kapil", age: 25 },
  // ]))



  /*  */
  // Upper left triangle
  // const lefttriangle = (value = 0) => {
  //   for (let i = 1; i <= value; i++) {
  //     const str = "* "
  //     console.log(str.repeat(i))
  //   }
  // };
  // lefttriangle(5);


  /*  */
  // Upper right triangle
  // const lefttriangle = (value = 0) => {
  //   let pattern = "*"
  //   for (let i = 1; i <= value; i++) {
  //     const str = "* ";
  //     const space = "  ";
  //     console.log(space.repeat(value - i) + str.repeat(i))
  //   }
  //   return pattern
  // };
  // lefttriangle(5)


  /*  */
  // lower right triangle
  // const lefttriangle = (value = 0) => {
  // let pattern = "*"
  // for (let i = value; i >= 1; i--) {
  // const str = "* ";
  // const space = "  ";
  // console.log(space.repeat(value - i) + str.repeat(i))
  // }
  // return pattern
  // };
  // lefttriangle(5)


  /*  */
  // lower left triangle
  // const lefttriangle = (value = 0) => {
  //   let pattern = "*"
  //   for (let i = value; i >= 1; i--) {
  //     const str = "* ";
  //     console.log(str.repeat(i))
  //   }
  //   return pattern
  // };
  // lefttriangle(5)



  /*  */
  // find the sum of terget number
  // const Function = (arr = [], target = 0) => {
  //   for (let i = 0; i <= arr.length; i++) {
  //     for (let j = i + 1; j <= arr.length; j++) {
  //       if (arr[i] + arr[j] === target){
  //         console.log(arr.indexOf(arr[i]), arr.indexOf(arr[j]))
  //       }
  //     }
  //   }
  // }
  // Function([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)


  /*  */
  // let twoSum = (array, sum) => {
  //   let hashMap = {};
  //   let results = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (hashMap[array[i]]) {
  //       results.push([hashMap[array[i]], array[i]])
  //     } else {
  //       hashMap[sum - array[i]] = array[i];
  //     }
  //   }
  //   return results;
  // }
  // console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 13));



  /*  */
  // function findIndicesOfMax(inp, count) {
  // var outp = [];
  // for (var i = 0; i < inp.length; i++) {
  // outp.push(i); // add index to output array
  // if (outp.length > count) {
  // outp.sort(function (a, b) { return inp[b] - inp[a]; }); // descending sort the output array
  // outp.pop(); // remove the last index (index of smallest element in output array)
  // }
  // }
  // return outp;
  // }
  // console.log(findIndicesOfMax([93, 255, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60], 3))



  /*  */
  // find largetst and samllest number
  // function processData(myArray = []) {
  //   var setArray = myArray.sort((a, b) => a - b)
  //   console.log(setArray)
  //   return setArray[setArray.length - 1] || myArray[0];
  // }
  // console.log(processData([20, 120, 111, 215, 54, 78]))



  /*  */
  // const findLargestElement = (array = []) => {
  //   let num = 0;
  //   for (let arr of array) {
  //     if (arr > num) {
  //       num = arr
  //     }
  //   }
  //   return num;
  //   // return array.reduce((prev, next) => {
  //   //   return prev > next ? prev : next
  //   // })
  // }
  // console.log(findLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9]))


  /*  */
  // Write a JavaScript function that returns the Fibonacci sequence
  // function fibonacci(num) {
  //   let num1 = 0;
  //   let num2 = 1;
  //   let sum;
  //   let i = 0;
  //   for (i = 0; i < num; i++) {
  //     sum = num1 + num2;
  //     num1 = num2;
  //     num2 = sum;
  //   }
  //   return num2;
  // }
  // console.log("Fibonacci(5): "0+ fibonacci(5));



  /*  */
  // Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
  // const toTitleCase = (string = '') => {
  //   // string = string.toLowerCase().split(" ")
  //   // for (let i = 0; i < string.length; i++) {
  //   //   string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
  //   // }
  //   // return string.join(" ")
  //   // let titleCase = "";
  //   // string.split(" ").forEach(word => {
  //   //   const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  //   //   titleCase += capitalizedWord + " ";
  //   // });
  //   // return titleCase;
  // }
  // console.log(toTitleCase("my name is prem"))


  /*  */
  // let value = 3;
  // let firstCopy = value;
  // console.log(firstCopy)
  // firstCopy = 100;
  // console.log(firstCopy)
  // console.log(value)


  /*  */
  // let arrayValue = [1, 2, 3, 4];
  // let copyArray = arrayValue;
  // let copyArray = [...arrayValue];
  // copyArray[0] = 0
  // console.log(copyArray)
  // console.log(arrayValue)


  /*  */
  // let nestedArray = [1, [2], 3]
  // let copynestedArray = JSON.parse(JSON.stringify(nestedArray));
  // console.log(copynestedArray)
  // copynestedArray[0] = 0;
  // copynestedArray[1][0] = 1;
  // console.log(copynestedArray)
  // console.log(nestedArray)


  /*  */
  /// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions
  // function mergeSortdArray(a, b) {
  //   for (var i = 0; i < b.length; i++) {
  //     a.push(b[i]);
  //   }
  //   return a;
  // }
  // console.log(mergeSortdArray([1, 2, 3, 4], [5, 6, 7, 8, 9]))


  /*  */
  // Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance. 
  // function fibonacciWithMemoization(n) {
  //   let memo = [0, 1];
  //   for (let i = 2; i <= n; i++) {
  //     memo[i] = memo[i - 1] + memo[i - 2];
  //   }
  //   return memo;
  // };
  // console.log(fibonacciWithMemoization(5))


  /*  */
  //  chek string areAnagram
  // const areAnagram = (string_1 = "", string_2 = "") => {
  //   let checkIf = false;
  //   const str1 = string_1.length
  //   const str2 = string_2.length
  //   if (str1 !== str2) {
  //     checkIf = false
  //   }
  //   string_1.sort();
  //   string_2.sort();
  //   for (let i = 0; i < str1; i++) {
  //     if (string_1[i] !== string_2[i]) {
  //       checkIf = false
  //     }
  //   }
  //   return checkIf;
  // }
  // console.log(areAnagram(["P", "r", "e", "m"], ["P", "r", "e", "m"]))


  /*  */
  // array linear Search
  // function betterLinearSearch(array, element) {
  //   // for (let i = 0; i < array.length; i++) {
  //   //   if (array[i] === element) {
  //   //     return i;
  //   //   }
  //   // }
  //   // return -1;

  //   // let result = "";
  //   // let length = array.length;
  //   // let left = 0;
  //   // let right = length - 1;
  //   // let position = -1;

  //   // while (left <= right) {
  //   //   if (array[left] == element) {
  //   //     position = left;
  //   //     result = `${element} is present at index ${position}. attempt ${left + 1}`;
  //   //     break;
  //   //   }

  //   //   if (array[right] == element) {
  //   //     position = right;
  //   //     result = `${element} is present at index ${position}. - attempt ${length - right}`;
  //   //     break;
  //   //   }
  //   //   left++;
  //   //   right--;
  //   // }

  //   // if (position == -1) {
  //   //   result = `${element} not found. attempt ${left}`;
  //   // }
  //   // return result
  // }
  // console.log(betterLinearSearch([2, 4, 67, 8, 44, 6, 12], 20));



  /*  */
  // /// remove duplicate element from array
  // const removeDuplicate = (array = []) => {
  //   return array.filter((item, index, array) => {
  //     const itemIndex = array.findIndex((i) => item == i)
  //     return index === itemIndex
  //   })
  // };
  // console.log(removeDuplicate([1, 2, 3, 1, 3, 8]))



  /*  */
  /// remove duplicate object from array
  // const removeDuplicateObject = (array = []) => {
  //   // return Array.from(new Set(array.map(value => value?.id))).map(id => { return array.find(item => item?.id === id) })
  //   return array.filter((item, index, array) => {
  //     const itemIndex = array.findIndex((i) => item?.id == i?.id)
  //     return index === itemIndex
  //   })
  // };
  // console.log(removeDuplicateObject([
  //   { id: 1, name: "Prem" },
  //   { id: 2, name: "Govinda" },
  //   { id: 1, name: "Prem" },
  //   { id: 2, name: "Govinda" },
  //   { id: 5, name: "Kapil" },
  // ]));

  // const removeDuplicateObject = (array = []) => {
  // return Array.from(new Set(array.map((value) => value?.id))).map((id) => {
  //   return array.find((item) => item?.id === id)
  // })



  /*  */
  // let uniqArray = [];
  // for (let i = 0; i < array.length; i++) {
  // if (Array.isArray(array[i])) {
  // uniqArray = uniqArray.concat(removeDuplicateObject(array[i]))
  // } else {
  // uniqArray.push(array[i])
  // }
  // }
  // return uniqArray;
  // return array.reduce((prev, next) => {
  //   return prev.concat(Array.isArray(next) ? removeDuplicateObject(next) : next)
  // }, [])
  // }
  // console.log(removeDuplicateObject([1, 2, [3, 4, [5, 6, 7, [8, 9, 10], [11, 12, [13, 14]]]]]));


  /*  */
  // find total from array element
  // const fruits = ["apples", "oranges", "pears", "bananas", "pears", "melons", "apples", "apples"]
  // const totalCount = (array = []) => {
  // const countObj = Object.create({})
  // for (let i = 0; i <= array.length; i++) {
  //   if (countObj[array[i]]) {
  //     countObj[array[i]] += 1
  //   } else {
  //     countObj[array[i]] = 1
  //   }
  // }
  // for (let key of array) {
  //   if (countObj[key]) {
  //     countObj[key] += 1
  //   } else {
  //     countObj[key] = 1
  //   }
  // }
  // array.forEach((values) => {
  //   if (countObj[values]) {
  //     countObj[values] += 1
  //   } else {
  //     countObj[values] = 1
  //   }
  // })
  // return countObj;
  // return array.reduce((prev, next) => {
  // prev[next] = prev[next] ? prev[next] += 1 : prev[next] = 1
  //   if (prev[next]) {
  //     prev[next] += 1
  //   } else {
  //     prev[next] = 1
  //   }
  //   return prev
  // }, {})
  // };
  // console.log(totalCount(fruits))


  /*  */
  /// find total count from object
  // const data = { '1': 'apples', '2': 'oranges', '3': 'pears', '4': 'bananas', '5': 'pears', '6': 'melons', '7': 'apples', '8': 'apples' };
  // const countTotal = (obj) => {
  //   const countObj = Object.create({})
  //   for (let key in obj) {
  //     const keys = obj[key]
  //     if (countObj[keys]) {
  //       countObj[keys] += 1
  //     } else {
  //       countObj[keys] = 1
  //     }
  //   }
  //   return countObj
  // }
  // console.log(countTotal(data))


  // const countDuplicate = (array = []) => {
  //   const count = array.reduce((prev, next) => {
  //     const { value } = next;
  //     // if (prev[value]) ++prev[value]
  //     // else prev[value] = 1
  //     prev[value] = prev[value]
  //       ? prev[value] += 1
  //       : prev[value] = 1
  //     return prev
  //   }, {});
  //   return array.map((obj) => ({
  //     ...obj,
  //     count: count[obj.value]
  //   }))
  // }
  // console.log(countDuplicate([
  // { value: 1 },
  // { value: 2 },
  // { value: 3 },
  // { value: 4 },
  // { value: 5 },
  // { value: 6 },
  // { value: 1 },
  // { value: 1 },
  // { value: 2 },
  // { value: 3 },
  // { value: 3 },
  // ]));


  const originalArray = ['a', 'b', 'c', 'd', 'e'];

  // Using splice() to modify the original array
  // const removedElements = originalArray.splice(1, 1, 'x', 'y', 'z');
  // console.log(originalArray);
  // console.log(removedElements);

  // Using slice() to extract a portion of the original array
  // const newArray = originalArray.slice(1, 3);
  // console.log(newArray);
  // console.log(originalArray);


  const sortArraybychar = (array = [], id) => {
    // return array.filter((value, index, arr) => {
    // return value?.id !== id
    // })

    // return array.filter((value, index, array) => {
    //   const newIndex = array.findIndex((item) => item?.id === id)
    //   array[newIndex].name = "z";
    //   return array
    // })
  };

  console.log(sortArraybychar([
    { id: 1, name: "A", },
    { id: 2, name: "B", },
    { id: 3, name: "C", },
    { id: 4, name: "D", },
    { id: 5, name: "E", },
    { id: 6, name: "F", },
    { id: 7, name: "G", },
    { id: 8, name: "H", },
    { id: 9, name: "J", },
    { id: 10, name: "K", },
  ], 1))


  return (
    <Fragment>

    </Fragment>
  )
}

export default App;
