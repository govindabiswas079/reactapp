  /**
   * 1. WAP to Flatten an array in javascript
   */
  const flattenArray = (arr = []) => {
    const tempArr = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        tempArr.push(...flattenArray(item));
      } else {
        tempArr.push(item);
      }
    }
    return tempArr;
    // return arr.reduce((result, elements, index, array) => {
    //   return result.concat(Array.isArray(elements) ? flattenArray(elements) : elements);
    // }, [])
  };
  console.log(flattenArray([1, 4, "a", ["b"], ["c", [5, 6]]]));

  /**
   * 2. How can you double elements of an array using reduce? 
   * Please note that you cannot create additional variables.
   */
  // const arrayOfNumbers = [1, 2, 3, 4];
  // arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);
  // console.log(arrayOfNumbers)
  // const doubledArray = arrayOfNumbers.reduce((acc, current) => {
  //   acc.push(current * 2);
  //   return acc;
  // }, []);
  // console.log(doubledArray)

  /**
   * 3. WAP to find the all prime numbers in a array of numbers using reduce
   */
  const primeList = (arr) => {
    const isPrime = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    return arr.reduce((acc, current) => {
      if (isPrime(current)) {
        acc.push(current);
      }
      return acc;
    }, []);
  };
  console.log(primeList([1, 2, 6, 9, 29, 15, 17, 27]));

  /**
   * 4. Container With Most Water
   */
  function maxArea(A, len) {
    let area = 0;
    let left = 0;
    let right = A.length - 1;
    while (left < right) {
      area = Math.max(area, Math.min(A[left],
        A[right]) * (right - left));
      if (A[left] < A[right])
        left += 1;
      else
        right -= 1;
    }
    return area;
  }
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

  /**
   * 5. WAP to reverse an array without using inbuilt methods and any extra variable
   */
  const reverseArray = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[len - 1 - i];
      arr[len - 1 - i] = temp;
    }
    return arr;
  };
  console.log(reverseArray([1, 2, 3, 4, 5, 6]));

  /**
   * 6. Find the Kth largest and Kth smallest number in an array
   */
  const k = 3;
  const findKthLargest = (arr, k) => {
    const sortedArray = arr.sort((a, b) => b - a);
    return sortedArray[k - 1];
  };
  const findKthSmallest = (arr, k) => {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray[k - 1];
  };
  console.log(`Kth Largest: ${findKthLargest([2, 6, 8, 9, 3, 7, 1], k)}`);
  console.log(`Kth Smallest: ${findKthSmallest([2, 6, 8, 9, 3, 7, 1], k)}`);

  /**
   * 7. Find common elements in three sorted arrays
   */
  var ar1 = [1, 5, 10, 20, 40, 80];
  var ar2 = [5, 6, 20, 70, 80, 100];
  var ar3 = [3, 4, 5, 15, 20, 30, 70, 80, 120];
  function CommonElements(ar1, ar2, ar3) {
    const set1 = new Set(ar1);
    const set2 = new Set(ar2);
    const commonElements = [];
    for (const num of ar3) {
      if (set1.has(num) && set2.has(num)) {
        commonElements.push(num);
      }
    }
    return commonElements;
  }
  console.log(CommonElements(ar1, ar2, ar3));

  /**
   * 8. Word reversal program
   */
  function reverse(str, start, end) {
    let temp;
    while (start <= end) {
      temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  }
  function reverseSentence(s) {
    s = s.split("");
    let start = 0;
    for (let end = 0; end < s.length; end++) {
      if (s[end] === " ") {
        reverse(s, start, end - 1);
        start = end + 1;
      }
    }
    reverse(s, start, s.length - 1);
    reverse(s, 0, s.length - 1);
    return s.join("");
  }
  console.log(reverseSentence("this is a sentence"));

  /**
   * 9. Remove extra spaces from a sentence
   */
  function removeSpaces(str) {
    const trimmedSentence = str.trim();
    const cleanSentence = trimmedSentence.replace(/\s+/g, ' ');
    return cleanSentence;
  }
  console.log(removeSpaces(' this is a sentence '));

  /**
   * 10. Count the occurrence of the substring
   */
  function countFreq(str, substr) {
    let count = 0;
    let index = str.indexOf(substr);
    while (index !== -1) {
      count++;
      index = str.indexOf(substr, index + 1);
    }
    return count;
  }
  console.log(countFreq('this is a test sentence and this is another test', 'is'));

  /**
   * 11. How to check if two Strings are anagrams of each other?
   */
  function areAnagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
    if (n1 !== n2) {
      return false;
    }
    str1.sort();
    str2.sort()
    for (let i = 0; i < n1; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }
    return true;
  }
  console.log(areAnagram('121'.split(''), '121'.split('')))

  /**
   * 13. WAP for bracket validator
   */
  function areBracketsBalanced(expr) {
    let balance = 0;
    for (let char of expr) {
      if (char === '(' || char === '{' || char === '[') {
        balance++;
      } else if (char === ')' || char === '}' || char === ']') {
        balance--;
        if (balance < 0) {
          return false;
        }
      }
    }
    return balance === 0;
  }
  console.log(areBracketsBalanced('()'))

  /**
   * 14. Isomorphic Strings
   */
  function areIsomorphic(str1, str2) {
    var charCount = {};
    var c = "a";
    for (var i = 0; i < str1.length; i++) {
      if (charCount.hasOwnProperty(str1[i])) {
        c = charCount[str1[i]];
        if (c !== str2[i]) return false;
      } else if (!Object.values(charCount).includes(str2[i])) {
        charCount[str1[i]] = str2[i];
      } else return false;
    }
    return true;
  }
  var str1 = "tbcc";
  var str2 = "iibcc";
  console.log(str1.length === str2.length && areIsomorphic(str1, str2));

  /**
   * 15. Is present once
   */
  const sentence = 'this is a sentence'
  const find = 'a'
  const isPresentOnce = (sentence, find) => {
    return sentence.indexOf(find) === sentence.lastIndexOf(find)
  }
  console.log(isPresentOnce(sentence, find))

  /**
   * 16. Remove null with recursion
   */
  const removeNullRecord = (obj) => {
    for (const item in obj) {
      console.log(item)
      if (typeof obj[item] === "object") {
        if (obj[item] == null) {
          delete obj[item];
        } else {
          removeNullRecord(obj[item])
        };
      }
    }
    return obj;
  };
  console.log(removeNullRecord({
    firstName: "Aman",
    lastName: "Shukla",
    moreKey: null,
    anotherNull: null,
    address: {
      personal: {
        town: null,
        city: "Varanasi",
      },
      office: {
        town: "Pune",
        city: null,
      },
    },
  }));


  /**
   * 17. How to find if an object has the specific key init.
   */
  const obj = {
    name: 'userName',
    address: 'Address of user',
    isMarried: false
  }
  console.log('name' in obj)

  /** 
   * Convert object into one object to have only one level with directory separated with _ using recursion
  */
  let user = {
    firstName: "Aman",
    lastName: "Shukla",
    address: {
      personal: {
        town: "anei",
        city: "Varanasi",
      },
      office: {
        town: "hinjewadi",
        city: "pune",
      },
    },
  };
  let result = {};
  const recursiveIteration = (obj, parentName) => {
    for (const item in obj) {
      if (typeof obj[item] === "object") {
        recursiveIteration(obj[item], `${parentName}_${item}`);
      } else {
        result[`${parentName}_${item}`] = obj[item]
      };
    }
  };
  recursiveIteration(user, "user");
  console.log(result);

  /**
   * 18. How to compare if two objects are equal or not ?
   */
  let user1 = {
    firstName: "Aman",
    lastName: "Shukla",
    address: {
      personal: {
        town: "anei",
        city: "Varanasi",
      },
      office: {
        town: "hinjewadi",
        city: "pune",
      },
    },
  };
  let user2 = {
    firstName: "Aman",
    lastName: "Shukla",
    address: {
      personal: {
        town: "ani",
        city: "Varanasi",
      },
      office: {
        town: "hinjewadi",
        city: "pune",
      },
    },
  };
  const isObjectEqual = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!isObjectEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  };
  console.log(isObjectEqual(user1, user2));

  /**
   * 19. WAP to find if a number is palindrome or not without using any in build methods
   */
  const isPalindromicNumber = (number) => {
    let tempNo = number
    let newNo = 0
    while (tempNo > 0) {
      newNo = newNo * 10 + tempNo % 10
      tempNo = Math.floor(tempNo / 10)
    }
    return number === newNo
  }
  console.log(isPalindromicNumber(121))

  /**
   * Write a function in javascript sum(1)(2)(3).....(n)()
   */
  const sum = (arg1) => (arg2) => arg2 ? sum(arg1 + arg2) : arg1;
  console.log(sum(1)(2)(3)());

  /**
   * WAP to show the concept of function curing using bind and closures.
   */
  const multiply = (a) => (b) => console.log(a * b);
  const doubleTheNumber = multiply(2);
  doubleTheNumber(10);

  /**
   * Write your own implementation of the bind function.
   */
  // const userDetail = {
  //   fName: 'Aman',
  //   lName: 'Shukla',
  // }
  // function printName(city, state, country) {
  //   console.log(this.fName, this.lName, city, state, country)
  // }
  // const originalBind = printName.bind(userDetail, 'varanasi', 'U.P.')
  // originalBind("India")
  // function myBind(thisRef, ...bindArg) {
  //   const storedThis = this
  //   return function (...fxnArg) {
  //     storedThis.apply(thisRef, [...bindArg, ...fxnArg])
  //   }
  // }
  // Function.prototype.myBind = myBind
  // const polyfillOfBind = printName.myBind(userDetail, 'varanasi', 'U.P.')
  // polyfillOfBind("India")

  /**
   * 20. Custom sorting program in JS via Bubble Sort ? 
   * */
  const sortArr = (inputArr) => {
    for (let i = 0; i < inputArr.length; i++) {
      for (let j = i + 1; j < inputArr.length; j++) {
        let temp = inputArr[i];
        if (inputArr[i] > inputArr[j]) {
          inputArr[i] = inputArr[j];
          inputArr[j] = temp;
        }
      }
    }
    return inputArr;
  }
  console.log(sortArr([4, -1, 34, "09", -9, 103]));


  /**
   * 21. Write a program to check if a string or word or number is palindrome ?
   */
  // 
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


  /**
   * revers char from string
   */
  // const string = "my name is prem"
  // const reversChar = (str = '') => {
  //   let revers = ""
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     revers += str[i]
  //   }
  //   return revers
  // }
  // console.log(reversChar(string))


  /**
   * revers word from string
   */
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


  /**
   * revers word from string
   */
  function reverseWord(sentence = "") {
    // return sentence.split(' ').map(function (word) {
    //   return word.split('').reverse().join('');
    // }).join(' ');
    let revers = "";
    const sentenceArr = sentence.split(" ");
    for (let i = 0; i < sentenceArr.length; i++) {
      revers += sentenceArr[i].split('').reverse().join('') + " "
    }
    return revers;
  }
  console.log("", reverseWord("my name is prem"));


  /**
   * Write a program to check if value/target 
   * exists or not in ascending array in O(log n) time complexity ?
   */
  const customInArray = (sortedArray = [], key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (sortedArray[middle] === key) {
        return { exit: true, index: sortedArray.indexOf(key) };
      } else if (sortedArray[middle] < key) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return false;
  }
  console.log(customInArray([1, 3, 5, 6, 9, 14, 29, 57, 89], 29));




  /**
   * Write a program to get total vowel count from String ?
   */
  const getVowelCount = (str) => {
    let total = 0
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        total = (total + 1)
      }
    }
    return total
  }
  console.log(getVowelCount('hello how are you today programiz website?'))

  /**
   * Write a program for check number is prime or not ?
   */
  const isCheckPrime = (inputNum) => {
    let result = true;
    for (let i = 2; i < inputNum; i++) {
      if (inputNum % i === 0)
        result = false;
      break;
    }
    return result;
  }
  console.log(isCheckPrime(17));


  /**
   * Write a program to find duplicate numbers in an integer array ?
   */
  const findDuplicateEle = (inputArr = []) => {
    let duplicateEleArr = [];
    let uniqueArr = [];
    for (let i = 0; i < inputArr.length; i++) {
      if (!uniqueArr.includes(inputArr[i])) {
        uniqueArr.push(inputArr[i])
      } else {
        duplicateEleArr.push(inputArr[i])
      }
    }
    return duplicateEleArr
  }
  console.log(findDuplicateEle([1, 2, 3, 5, 3, 1, 9]));


  /**
   * separate array 
   */
  const separateArr = (array = []) => {
    let strArr = [];
    let numArr = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "string") {
        strArr.push(array[i])
      } else if (typeof array[i] === "number") {
        numArr.push(array[i])
      }
    }
    return {
      strArr,
      numArr
    }
  }
  console.log(separateArr([1, 2, 3, "a", "b", "c", 4, 5, 6, "d", "e", "f"]))


  /**
   * find even and odd number
   */
  const checkEven = (arr = []) => {
    let evenArr = []
    let oddArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArr.push(arr[i])
      } else if (arr[i] % 1 === 0) {
        oddArr.push(arr[i])
      }
    }
    return {
      evenArr,
      oddArr,
    }
  };
  console.log(checkEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));

  /**
   * create new array using nested array object
   */
  const createArray = (arr = []) => {
    var newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(...arr[i].hobbi)
    }
    return newArray;
    // return arr.reduce((prev, item) => {
    //   return prev.concat(item?.hobbi)
    // }, []);
  };
  console.log(createArray([
    { id: 1, name: "Prem", hobbi: ["song", "coding", "eating"] },
    { id: 2, name: "Govinda", hobbi: ["movie", "work", "drink"] },
  ]));


  /**
   * sum two number
   */
  const sumTwonumber = (arr = []) => {
    return arr.reduce((prev, next) => { return prev + next; }, 0);
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   sum = sum + arr[i]
    //   sum += arr[i]
    // }
    // return sum;
    // let sum = 0
    // arr.forEach((value) => { sum += value })
    // return sum
  }
  console.log(sumTwonumber([2, 3]))

  /**
   * find min number from array
   */
  const findMaxNumber = (arr = []) => {
    return arr.reduce(function (prev, next) {
      return (prev < next ? prev : next);
    }, []);
    // return Math.min.apply(Math, arr)
  }
  console.log(findMaxNumber([100, 0, -1, 50]))

  /**
   * remove dublicate from array
   */
  const removeDublicateCreatingnewArry = (arr = []) => {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i])
      }
    }
    return uniqueArr;

    // let uniqueArr = [];
    // arr.forEach((value) => {
    //   if (!uniqueArr.includes(value)) {
    //     uniqueArr.push(value)
    //   }
    // });
    // return uniqueArr;
    // return [...new Set(arr)]
    // return arr.filter((value, index) => {
    //   return arr.indexOf(value) === index
    // })
  };
  console.log(removeDublicateCreatingnewArry(["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"]))

  /**
   * sort large to samll an array
   */
  const sortArray = (arr = []) => {
    return arr.sort((prev, next) => {
      const direction = "asc"
      if (direction === "asc") {
        return prev?.age < next?.age ? -1 : 1
      } else {
        return prev?.age > next?.age ? -1 : 1
      }
    }, [])
  };
  console.log(sortArray([
    { id: 1, name: "Prem", age: 23 },
    { id: 2, name: "Rajeev", age: 21 },
    { id: 3, name: "Kapil", age: 25 },
  ]))


  /**
   * find the sum of terget number
   */
  const Function = (arr = [], target = 0) => {
    for (let i = 0; i <= arr.length; i++) {
      for (let j = i + 1; j <= arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          console.log(arr.indexOf(arr[i]), arr.indexOf(arr[j]))
        }
      }
    }
  }
  Function([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)

  /*  */
  function findIndicesOfMax(inp, count) {
    var outp = [];
    for (var i = 0; i < inp.length; i++) {
      outp.push(i); // add index to output array
      if (outp.length > count) {
        outp.sort(function (a, b) { return inp[b] - inp[a]; }); // descending sort the output array
        outp.pop(); // remove the last index (index of smallest element in output array)
      }
    }
    return outp;
  }
  console.log(findIndicesOfMax([93, 255, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60], 3))



  /**
   * find largetst and samllest number
   */
  function processData(myArray = []) {
    var setArray = myArray.sort((a, b) => a - b)
    console.log(setArray)
    return setArray[setArray.length - 1] || myArray[0];
  }
  console.log(processData([20, 120, 111, 215, 54, 78]))



  /**
   * find Largest Element
   */
  const findLargestElement = (array = []) => {
    let num = 0;
    for (let arr of array) {
      if (arr > num) {
        num = arr
      }
    }
    return num;
    // return array.reduce((prev, next) => {
    //   return prev > next ? prev : next
    // })
  }
  console.log(findLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9]))


  /**
   * Write a JavaScript function that returns the Fibonacci sequence
   */
  function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
  console.log("Fibonacci(5): 0", + fibonacci(5));



  /**
   * Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
   */
  const toTitleCase = (string = '') => {
    string = string.toLowerCase().split(" ")
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
    }
    return string.join(" ")
    // let titleCase = "";
    // string.split(" ").forEach(word => {
    //   const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //   titleCase += capitalizedWord + " ";
    // });
    // return titleCase;
  }
  console.log(toTitleCase("my name is prem"))


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


  /**
   * Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions
   */
  function mergeSortdArray(a, b) {
    for (var i = 0; i < b.length; i++) {
      a.push(b[i]);
    }
    return a;
  }
  console.log(mergeSortdArray([1, 2, 3, 4], [5, 6, 7, 8, 9]))


  /**
   * Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance. 
   */
  function fibonacciWithMemoization(n) {
    let memo = [0, 1];
    for (let i = 2; i <= n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo;
  };
  console.log(fibonacciWithMemoization(5))

  /**
   * array linear Search
   */
  function betterLinearSearch(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return i;
      }
    }
    return -1;

    // let result = "";
    // let length = array.length;
    // let left = 0;
    // let right = length - 1;
    // let position = -1;

    // while (left <= right) {
    //   if (array[left] == element) {
    //     position = left;
    //     result = `${element} is present at index ${position}. attempt ${left + 1}`;
    //     break;
    //   }

    //   if (array[right] == element) {
    //     position = right;
    //     result = `${element} is present at index ${position}. - attempt ${length - right}`;
    //     break;
    //   }
    //   left++;
    //   right--;
    // }

    // if (position == -1) {
    //   result = `${element} not found. attempt ${left}`;
    // }
    // return result
  }
  console.log(betterLinearSearch([2, 4, 67, 8, 44, 6, 12], 20));



  /**
   * remove duplicate element from array
   */
  const removeDuplicate = (array = []) => {
    return array.filter((item, index, array) => {
      const itemIndex = array.findIndex((i) => item === i)
      return index === itemIndex
    })
  };
  console.log(removeDuplicate([1, 2, 3, 1, 3, 8]))



  /**
   * remove duplicate object from array
   */
  const removeDuplicateObject = (array = []) => {
    // return Array.from(new Set(array.map(value => value?.id))).map(id => { return array.find(item => item?.id === id) })
    return array.filter((item, index, array) => {
      const itemIndex = array.findIndex((i) => item?.id === i?.id)
      return index === itemIndex
    })
  };
  console.log(removeDuplicateObject([
    { id: 1, name: "Prem" },
    { id: 2, name: "Govinda" },
    { id: 1, name: "Prem" },
    { id: 2, name: "Govinda" },
    { id: 5, name: "Kapil" },
  ]));

  /**
   * find total from array element
   */
  const totalCount = (array = []) => {
    const countObj = Object.create({})
    // for (let i = 0; i <= array.length; i++) {
    //   if (countObj[array[i]]) {
    //     countObj[array[i]] += 1
    //   } else {
    //     countObj[array[i]] = 1
    //   }
    // }
    for (let key of array) {
      if (countObj[key]) {
        countObj[key] += 1
      } else {
        countObj[key] = 1
      }
    }
    // array.forEach((values) => {
    //   if (countObj[values]) {
    //     countObj[values] += 1
    //   } else {
    //     countObj[values] = 1
    //   }
    // })
    return countObj;
    // return array.reduce((prev, next) => {
    // prev[next] = prev[next] ? prev[next] += 1 : prev[next] = 1
    //   if (prev[next]) {
    //     prev[next] += 1
    //   } else {
    //     prev[next] = 1
    //   }
    //   return prev
    // }, {})
  };
  console.log(totalCount(["apples", "oranges", "pears", "bananas", "pears", "melons", "apples", "apples"]))


  /**
   * find total count from object
   */
  const data = { '1': 'apples', '2': 'oranges', '3': 'pears', '4': 'bananas', '5': 'pears', '6': 'melons', '7': 'apples', '8': 'apples' };
  const countTotal = (obj) => {
    const countObj = Object.create({})
    for (let key in obj) {
      const keys = obj[key]
      if (countObj[keys]) {
        countObj[keys] += 1
      } else {
        countObj[keys] = 1
      }
    }
    return countObj
  }
  console.log(countTotal(data))


  /**
   * count duplicate from array object
   */
  const countDuplicate = (array = []) => {
    const count = array.reduce((prev, next) => {
      const { value } = next;
      // if (prev[value]) ++prev[value]
      // else prev[value] = 1
      prev[value] = prev[value]
        ? prev[value] += 1
        : prev[value] = 1
      return prev
    }, {});
    return array.map((obj) => ({
      ...obj,
      count: count[obj.value]
    }))
  }
  console.log(countDuplicate([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 1 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 3 },
  ]));


  const originalArray = ['a', 'b', 'c', 'd', 'e'];
  // Using splice() to modify the original array
  const removedElements = originalArray.splice(1, 1, 'x', 'y', 'z');
  console.log(originalArray);
  console.log(removedElements);

  // Using slice() to extract a portion of the original array
  const newArray = originalArray.slice(1, 3);
  console.log(newArray);
  console.log(originalArray);


  const sortArraybychar = (array = [], id) => {
    return array.filter((value, index, arr) => {
      return value?.id !== id
    })

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

  // Original object with nested structure
  // const originalObj = {
  //   name: "John",
  //   age: 30,
  //   hobbies: ["reading", "cooking"],
  //   address: {
  //     city: "New York",
  //     zip: "10001"
  //   }
  // };

  // Shallow copy example
  // const shallowCopy = Object.assign({}, originalObj);

  // Deep copy example
  // const deepCopy = JSON.parse(JSON.stringify(originalObj));

  // Modify the original object
  // originalObj.name = "Alice";
  // originalObj.hobbies.push("gardening");
  // originalObj.address.city = "Los Angeles";
  // console.log("Original Object:", originalObj);
  // console.log("Shallow Copy:", shallowCopy);
  // console.log("Deep Copy:", deepCopy);
  // console.log("prem".endsWith("m"))


  /** 
   * rotate arary by right and left
  */
  function rotateArrayLeft(arr, positions) {
    const effectiveRotations = positions % arr.length;
    return arr.slice(effectiveRotations).concat(arr.slice(0, effectiveRotations)); // form left side
    // return arr.slice(-effectiveRotations).concat(arr.slice(0, -effectiveRotations));  // form right side
  }
  console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6], 2));

  /** 
   * rotate arary by index
  */
  function rotateNumber(index) {
    var cal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return cal.concat(cal.splice(0, index));
  }
  console.log(rotateNumber(2))


  /** 
   * find one missing number
  */
  function findMissingNumber(arr) {
    const expectedSum = (arr.length + 1) * (arr.length + 2) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
  }
  console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));



  /** 
   * merge two un-sorted array into single sorted array
  */
  function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0; // Index for arr1
    let j = 0; // Index for arr2
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
    return mergedArray;
  }
  console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));


  /** 
   * find common element
  */
  function findCommonElements(arr1, arr2) {
    const commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];
      console.log(arr2[i] === arr1[i])
      if (arr2.includes(element)) {
        commonElements.push(element);
      }
    }
    return commonElements;
  }
  console.log(findCommonElements([1, 2, 3, 4, 5, 11, 12, 13, 16], [1, 3, 4, 5, 6, 7]));


  /** 
   * swap two number
  */
  function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr || [];
  }
  console.log(swap([1, 2, 3, 4, 5], 0, 3));


  /** 
   * reverse array without creating new array
  */
  function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }

    return arr || []
  }
  console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));

  /**
   * array of number to array element
   */
  const arraynumbers = [1234567890]
  console.log(arraynumbers.toString().split('').map(Number))


  /**
   * rotate array
   */
  const rotateArray = (array, index) => {
    return array.slice(index).concat(array.splice(0, index))
  }
  console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 5))


  /**
   * check number is prime or not
   */
  const findPrime = (array, number) => {
    if (number <= 1) return false
    if (number === 2) return true
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true
  }
  console.log("===>", findPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 6))


  /**
   * separet prime number
   */
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const primeNumbers = numbers.filter(num => isPrime(num));
  console.log(primeNumbers);

  /** 
   * separet number and string
  */
  const separetArray = (array) => {
    const strArr = [];
    const numArr = [];
    for (let key of array) {
      if (typeof key === "string") {
        strArr.push(key)
      } else if (typeof key === "number") {
        numArr.push(key)
      }
    }
    return {
      strArr,
      numArr
    }
  }
  console.log(separetArray([1, "a", 2, "b", 3, "c", 4, "d"]))

  /**
   * separet odd and event number
   */
  const sepateOddEven = (array) => {
    const oddArr = [];
    const evenArr = [];
    for (let key of array) {
      if (key % 2 === 0) {
        evenArr.push(key)
      } else if (key % 2 !== 0) {
        oddArr.push(key)
      }
    }
    return {
      oddArr,
      evenArr
    }
  }
  console.log(sepateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

  /** 
   * check number is even
  */
  const isEven = (number) => {
    return number % 2 === 0
  }
  console.log(isEven(3))


  /** 
   * check number is odd
  */
  const isOdd = (number) => {
    return number % 2 !== 0
  }
  console.log(isOdd(6))

  /** 
   * find factorial
  */
  const findFactorial = (number) => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i
    }
    return factorial
  }
  console.log(findFactorial(5))

  /**
   * remove dublicate array element
   */
  const removeDublicate = (array) => {
    const newArry = [];
    for (let key of array) {
      if (!newArry.includes(key)) {
        newArry.push(key)
      }
    }
    return newArry

    // return array.filter((value, i, arr) => {
    //     const index = arr.findIndex((item) => item === value)
    //     return index === i
    // })

    // return Array.from(new Set(array.map((value) => value)))
  }
  console.log(removeDublicate([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]))


  // remove dublicate object from array
  const removeDublicateObject = (array) => {
    const newArry = [];
    for (let key of array) {
      if (
        !newArry.find((value) => value.value === key.value
        )) {
        newArry.push(key)
      }
    }
    // return newArry

    // return array.filter((value, i, arr) => {
    //     const index = arr.findIndex((item) => item.value === value.value)
    //     return index === i
    // })

    // return Array.from(new Set(array.map((value) => value?.value))).map((value) => { return array.find((item) => item.value === value) })

    return array.reduce((prev, next) => {
      if (!prev.find((item) => item.value === next.value)) {
        prev.push(next)
      }
      return prev
    }, [])
  }
  console.log(removeDublicateObject([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]))


  /** 
   * merge two un-sorted array
  */
  const mergeUnsort = (array1, array2) => {
    const array = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < array1.length && index2 < array2.length) {
      if (array1[index1] < array2[index2]) {
        array.push(array1[index1])
        index1++
      } else {
        array.push(array2[index2])
        index2++
      }
    }
    while (index1 < array1.length) {
      array.push(array1[index1])
      index1++
    }
    while (index2 < array2.length) {
      array.push(array2[index2])
      index2++
    }

    return array;
  }
  console.log(mergeUnsort(
    [1, 3, 5, 7],
    [2, 4, 6, 8],
  ))

  /** 
   * find max number
  */
  const findMax = (array) => {
    let maxNum = array[0];
    for (let key of array) {
      if (maxNum < key) {
        maxNum = key
      }
    }
    return maxNum;
  }
  console.log(findMax([10, 5, 20, 15, 8]))

  /** 
   * find min number
  */
  const findMin = (array) => {
    let minNum = array[0];
    for (let key of array) {
      if (minNum > key) {
        minNum = key
      }
    }
    return minNum;
  }
  console.log(findMin([10, 5, 20, 15, 8]))


  /** 
   * insert new element
  */
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // console.log(array.slice(3, 10))
  // console.log(array.splice(3, 1))
  // console.log(array)
  console.log([...array.splice(0, 3), 11, ...array.slice(4)])


  /**
   * find Nth largest number from given array
   */
  function findNthLargestNumber(arr, n) {
    arr.sort(function (a, b) {
      return b - a;
    });
    return arr[n - 1];
  }
  console.log(findNthLargestNumber([1, 3, 2, 5, 3, 6, 7, 22, 12, 5, 32, 56, 21], 3));

  /** 
   * create an array with pairs of largest and smallest numbers in it from the given array
  */
  function createPairs(array) {
    const largest = Math.max(...array);
    const smallest = Math.min(...array);

    const pairs = [];
    for (let i = 0; i < array.length; i++) {
      pairs.push([largest, smallest]);
    }

    return pairs;
  }
  console.log(createPairs([1, 5, 3, 8, 2]));
