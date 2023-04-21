// // ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// // a) Create a test with expect statements using the variables provided.

describe("crypticMessage", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it ("converts a to 4, e to 3, i to 1 from a string", () => {
        expect(crypticMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(crypticMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(crypticMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// // $ /Users/learnacademy/Desktop/week-5-assessment-salas89jl/node_modules/.bin/jest
// //  FAIL  ./code-challenges.test.js
// //   crypticMessage
// //     ✕ converts a to 4, e to 3, i to 1 from a string

// // b) Create the function that makes the test pass.

// // Pseudo Code
// // Create a function called crypticMessage
// // Input: a string
// // Output: a string with coverted letters to numbers
// // Convert the string into lowercase
// // Split string to an array using .split
// // Run a loop to cycle through each index
// // Use a conditional to check if index constains the targeted letters a,e,i,
// // If a is found then update value to a 4
// // If e is found then update value to a 3
// // If i is found then update value to a 1
// // Join the split array back to a single string

const crypticMessage = (str) => {
    let string = str.split("")
    for (let i = 0; i < string.length; i++) {
        if (string [i] == "a"|| string[i] === "A"){
            string [i] = 4
        } else if (string [i] == "e"|| string[i] === "E"){
            string [i] = 3
        } else if (string[i] == "i"|| string[i] === "I") {
            string[i] =1
        } else if (string[i] == "o"|| string[i] === "O") {
            string[i] = 0
        }

    }
    return string.join("")
}
// // PASS  ./code-challenges.test.js
// // crypticMessage
// //   ✓ converts a to 4, e to 3, i to 1 from a string (2 ms)

// // --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// // a) Create a test with expects statement using the variable provided.
describe("filterArray", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    
    it("takes an array and a letter and uses the letter to filter words that do not include the letter", () => {
        expect(filterArray(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(filterArray(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// FAIL  ./code-challenges.test.js
// filterArray
//   ✕ takes an array and a letter and uses the letter to filter words that do not include the letter
// ● filterArray › takes an array and a letter and uses the letter to filter words that do not include the letter
//   ReferenceError: filterArray is not defined

// b) Create the function that makes the test pass.

// Pseudo Code
// Create a function called filterArray
// Input: An array and a single letter string
// Output: An array with only the string elements that contain the letter from the input string.
// Run a loop to cycle through each index
// Use a conditional to check if index constains the targeted letter

const filterArray = (arr, str) => {
    let upCaseStr = str.toUpperCase()
    const newArray = arr.filter(item => item.includes(str) || item.includes(upCaseStr)) 
   return newArray
}

// FAIL  ./code-challenges.test.js
// crypticMessage
//   ✓ converts a to 4, e to 3, i to 1 from a string (1 ms)
// filterArray
//   ✓ takes an array and a letter and uses the letter to filter words that do not include the letter

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe ("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
    it("takes in a array of numbers and determines if there are three of a kind and a pair", () => {
        expect(fullHouse(hand1)).toBe(true)
        expect(fullHouse(hand2)).toBe(false)
        expect(fullHouse(hand3)).toBe(false)
        expect(fullHouse(hand4)).toBe(true)
    })
})

// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ takes in a array of numbers and determines if there are three of a kind and a pair (1 ms)
// ● fullHouse › takes in a array of numbers and determines if there are three of a kind and a pair
// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
// Pseudo Code
// Create a function called fullHouse
// Input: takes in an array of 5 numbers
// Output: Boolean that determines whether there are three of the same numbers with two of the same.
// using an iteration function will need to count how many times a number occurs during the length of the iteration. 
// Check in the number of occurances if a number occurs more 3 times and another number occurs 2 times. if condition is met then push the filtered item to the empty array filteredArr.
// Once itertaion is comeplete use a logical opertor to check number is greater than zero, since if condition were not met in the if part of the expression then it would have not push anything into the empty array. 


const fullHouse = (arr) => {
     
    const filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]

        const howMany = arr.filter(num => num === item).length

        if (howMany === 3 && arr.filter(num => num !== item).some(num => arr.filter(num2 => num2 === num).length === 2)) {
          filteredArr.push(item)
          }
        }
        return filteredArr.length > 0
      }

    //   PASS  ./code-challenges.test.js
    //   crypticMessage
    //     ✓ converts a to 4, e to 3, i to 1 from a string (1 ms)
    //   filterArray
    //     ✓ takes an array and a letter and uses the letter to filter words that do not include the letter
    //   fullHouse
    //     ✓ takes in a array of numbers and determines if there are three of a kind and a pair
    
    // Test Suites: 1 passed, 1 total
    // Tests:       3 passed, 3 total
    // Snapshots:   0 total
    // Time:        0.164 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 0.82s.