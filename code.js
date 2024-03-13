// console.log(1)
// Promise.resolve().then(() => {
//     console.log(2)
// })
// setTimeout(() => {
//   console.log(3) 
// },0)
// const test =() =>{
//     console.log(4)
// }
// test()
// Promise.resolve().then(() =>{
//     console.log(5)
// })
// console.log(6)
// Promise.resolve().then(() =>{
//     console.log(7)
// })
// setTimeout(() => {
//   console.log(8) 
// },0)





// for(let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         (function(index) {
//             console.log(index)
//         })(i)
//     }, i * 1000)
// }
// for(var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         (function(index) {
//             console.log(index)
//         })(i)
//     }, i * 1000)
// }

// swap array
const swap = (array, index1, index2) => {
    const temp = array[index1]
    array[index1] = array[index2],
    array[index2] = temp
    return array
}
// console.log(swap([1,2,3,4,5,6], 1, 5))

// array of number to array element
const array = [1234567890]
// console.log(array.toString().split('').map(Number))


// rotate array
const rotateArray = (array, index) => {
    return array.slice(index).concat(array.splice(0, index))
}
// console.log(rotateArray([1,2,3,4,5,6,7,8,9,0], 5))


// check number is prime or not
const findPrime = (array, number) => {
    if(number <= 1) return false
    if(number === 2) return true
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true
}
// console.log("===>",findPrime([1,2,3,4,5,6,7,8,9,0], 6))


// separet prime number
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
// console.log(primeNumbers);

// separet number and string
const separetArray = (array) => {
    const strArr = [];
    const numArr = [];
    for(let key of array) {
        if(typeof key === "string") {
            strArr.push(key)
        } else if(typeof key === "number") {
            numArr.push(key)
        }
    }
    return {
        strArr,
        numArr
    }
}
// console.log(separetArray([1,"a",2,"b",3,"c",4,"d"]))

// separet odd and event number
const sepateOddEven = (array) => {
    const oddArr = [];
    const evenArr = [];
    for(let key of array) {
        if(key % 2 === 0) {
            evenArr.push(key)
        } else if(key % 2 !== 0) {
            oddArr.push(key)
        }
    }
    return {
        oddArr,
        evenArr
    }
}
// console.log(sepateOddEven([1,2,3,4,5,6,7,8,9,0]))

// check number is even
const isEven = (number) => {
    return number % 2 === 0
}
// console.log(isEven(3))


// check number is odd
const isOdd = (number) => {
    return number % 2 !== 0
}
// console.log(isOdd(6))

// find factorial
const findFactorial = (number) => {
    let factorial = 1;
    for(let i = 1; i <= number; i++) {
        factorial *= i
    }
    return factorial
}
// console.log(findFactorial(5))

// flat array to simple array
const flatToSimple = (array) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            newArray = newArray.concat(flatToSimple(array[i]))
        } else {
            newArray.push(array[i])
        }
    }
    return newArray;
    
    return array.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatToSimple(next) : next)
    }, [])
}
// console.log(flatToSimple([1, 2, 3, [4, 5, [ 6, 7, 8, 9,[ 10, 11,[ 12 ], 13], 14], 15], 16, [ 17 ]]))

// remove dublicate array element
const removeDublicate = (array) => {
    const newArry = [];
    for(let key of array) {
        if(!newArry.includes(key)) {
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

// console.log(removeDublicate([1,1,2,2,3,3,4,4,5,5]))


// remove dublicate object from array
const removeDublicateObject = (array) => {
    const newArry = [];
    for(let key of array) {
        if(
            !newArry.find((value) => value.value === key.value
        )){
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
        if(!prev.find((item) => item.value === next.value)){
            prev.push(next)
        }
        return prev
    }, [])
}
// console.log(removeDublicateObject([
//     { value: 1 },
//     { value: 2 },
//     { value: 3 },
//     { value: 4 },
//     { value: 5 },
//     { value: 1 },
//     { value: 2 },
//     { value: 3 },
//     { value: 4 },
//     { value: 5 },
// ]))


// count dublicate from array element
const countArr = (array) =>  {
    const obj = Object.create({})
    for(let key of array) {
        if(obj[key]) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    }
    return obj
}
// console.log(countArr(["apple", "banana", "kiwi", "orange", "apple", "apple", "kiwi", "banana"]))



// count dublicate from object
const countObj = (data) => {
    const obj = Object.create({});
    for(let key in data) {
        const value = data[key]
        if(obj[value]) {
            obj[value] += 1;
        } else {
            obj[value] = 1;
        }
    }
    return obj;
}
// console.log(countObj({
//     1: "apple",
//     2: "banana",
//     3: "kiwi",
//     4: "orange",
//     5: "apple",
//     6: "banana",
//     7: "kiwi",
//     8: "orange"
// }))


// merge two un-sorted array
const mergeUnsort = (array1, array2) => {
    const array =  [];
    let index1 = 0;
    let index2 = 0;
    while(index1 < array1.length && index2 < array2.length) {
        if(array1[index1] < array2[index2]) {
            array.push(array1[index1])
            index1++
        } else {
            array.push(array2[index2])
            index2++
        }
    }
    while(index1 < array1.length) {
        array.push(array1[index1])
        index1++
    }
    while(index2 < array2.length) {
        array.push(array2[index2])
        index2++
    }
  
    return array;
}
// console.log(mergeUnsort(
//     [1, 3, 5, 7],
//     [2, 4, 6, 8],
// ))


// find max number
const findMax = (array) => {
    let maxNum = array[0];
    for(let key of array) {
        if(maxNum < key) {
            maxNum = key
        }
    }
    return maxNum;
}
// console.log(findMax([10, 5, 20, 15, 8]))

// find min number
const findMin = (array) => {
    let minNum = array[0];
    for(let key of array) {
        if(minNum > key) {
            minNum = key
        }
    }
    return minNum;
}
// console.log(findMin([10, 5, 20, 15, 8]))


