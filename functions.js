//1. Sum Zero
function addToZero(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let x = i + 1; x < arr.length; x++ ){
            if (arr[i] + arr[x] === 0){
                return true;
            }
        }
    }
    return false;
}

//time complexity: O(n^2) The function has a nested for loop so it goes through each element of the array twice minus 2;
//space complexity: O(1) Nothing is being assigned in the for loops so it is O(1)

//2. Unique Characters
let hasUniqueChars = (str) => {
    for(let i = 0; i < str.length - 1; i++){
        for (let x =i+ 1; x < str.length; x++){
            if(str[1] === str[x]){
                return false;
            }
        }
    }
    return true;
}


//time complexity:O(n^2) The nested for loops go through n^2 - 2 operations
//space complexity: O(1) The function doesn't store anything. It just checks the elements of the string

//3. Pangram Sentence
let isPangram = function(str){
    let alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    for(let i = 0; i < alphabet.length; i+2){
        if(!str.includes(alphabet[i]) && !str.includes(alphabet[i + 1]) ){
            return false
        }
    }
    return true;
}

//time complexity: O(n) Since the length of the alphabet string is known, the time complexity becomes the
//time complexity of the includes method. Since the includes method checks every element of the input string 
//the time complexity is realted to the number of elements n of the input string.

//space complexity: O(1) THe only thing being stored here is a string. Since we know the size of the string
// and no other variables are dependent on the passed in string, the space complexity is constant.

//4. Longest Word
function findLongestWord(arr){
    let longest = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    return longest;
}

//time complexity: O(n) The runtime is dependent on the size of the array being passed in so it is linear.
//space complexity: O(1) The only thing being stores is an integer so it is constant.