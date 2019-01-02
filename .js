function binaryAgent(str) {
/* Use String.fromCharCode() to convert each ASCII number into the corresponding character

 & .map() to process each element from binary to decimal using pareseInt()      */
  return String.fromCharCode(...str.split(' ').map(subStr => parseInt(subStr, 2)));
}


// Note that .fromCharCode() expects a series of numbers rather than an array so we use ES6 Spread Operator to pass in an Array of numbers as individual numbers




// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents/
