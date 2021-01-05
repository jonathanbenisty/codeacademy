
// n this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.

// Ordinarily, this library can be downloaded directly, or via a CDN, and then added into the <head> of your project’s index.html file, like so:

// <head>
//   <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"></script>
// </head>
// However, implementing the methods from lodash on your own is an invaluable exercise in problem-solving and a great way to understand how the methods work! We’ve selected ten methods for you to implement and, in implementing each method, you will follow these four steps:

// Specify the functionality of the method we are implementing
// Ideate a game plan for how to implement this functionality in code
// Implement our game plan
// Test our code to ensure it works as expected
// We encourage you to try to complete the “Ideate” and “Implement” steps on your own before consulting our suggestions for each. It may be difficult at points, but working through difficult problems on your own will be incredibly helpful in your journey to become a stronger developer. Once you’ve come up with a solution on your own, or if you have become so stuck you are no longer being productive, check out our steps to see our suggestions for how to solve the problem.

// There is no right or wrong answer when it comes to programming. As a result, don’t be frustrated if the solution we present is different than the solution you came up with. We are merely trying to challenge you to consider many different solutions. Your solution is equally as valid as ours. Consider the one you were going to write and then consider ours. Whichever you pick in the end is completely your decision, and we support it completely.

// You have the choice of writing this project within the Codecademy environment to the right or locally on your own computer by downloading the starting code here. Feel free to proceed in whichever environment you are most comfortable with.

// With all of that said, let’s get started implementing some awesome new functionality!

// If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.

const _ = {

    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper)
          return clampedValue
    },
  
    inRange(number, start, end) {
        if (end === undefined) {
          end = start
          start = 0
        } 
  
        if (start > end) {
          const temp = end;
          end = start
          start = temp
        }
  
        const isInRange = start <= number && number < end 
            return isInRange;
          
        },
  
      words(string) {
        const words = string.split(' ')
        return words
      },
  
      pad(string, length) {
        if (length <= string.length) {
          return string
        }
        const startPaddingLength = Math.floor((length - string.length) /2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
      },
  
      has(object, key) {
        const hasValue = object[key];
        if (hasValue != undefined) {
          return true;
        } return false;
      },
  
      invert(object) {
          let invertedObject = {};
          for (const key in object) {
            let originalValue = object[key];
            invertedObject[originalValue] = key
          }
          return invertedObject;
      },
  
      findKey(object, predicate) {
          for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
              return key;
            };
          };
          return undefined
      },
  
      drop(arr, number) {
        if (number === undefined) {
          number = 1
        }
        let droppedArray = arr.slice(number, arr.length) 
          return droppedArray;
      },
  
      dropWhile(array, predicate) {
        let cb = (element, index) => {
          return !predicate (element, index, array)
        }
        let dropNumber = array.findIndex(cb);
        let dropArray = this.drop(array, dropNumber);
        return dropArray;
      },
  
      chunk(arr, size) {
          if (size === undefined) {
            size = 1
          }
          let arrChunk = [];
          for (let i = 0; i < arr.length ; i+=size) {
            let arrayChunk = arr.slice(i, i+size);
            arrChunk.push(arrayChunk);
          }
          return arrChunk
      }
  };
  
  
  
  
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;