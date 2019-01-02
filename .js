/************  Solution #1    ***************************************************************************************************/

function binaryAgent(str) {
 //Use String.fromCharCode() to convert each ASCII number into the corresponding character & .map() to process each element from binary to decimal using pareseInt()      
   return String.fromCharCode(...str.split(' ').map(subStr => parseInt(subStr, 2)));
}
// Note that .fromCharCode() expects a series of numbers rather than an array so we use ES6 Spread Operator to pass in an Array of numbers as individual numbers

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"); //return "I love FreeCodeCamp!"


/************  Solution #2    ***************************************************************************************************/

function binaryAgent2(str) {
    let arr = str.split(' '); // Separate str into an array of strings separated by whitespace
    let temp = 0;
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = arr[i].length-1; j >= 0; j--){
             temp += arr[i][j]  * Math.pow(2, (arr[i].length-1-j));
        }
        tempArr.push(String.fromCharCode(temp));
        temp = 0;
    }
    return tempArr.join('');
}




// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents/
