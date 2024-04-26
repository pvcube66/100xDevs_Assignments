//1
/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    let temp=str;
    for(let i=0;i<temp.length;i++) {
        
       if('aeiouAEIOU'.includes(temp[i]))
                count+=1;
    }
    return count;
}
//test cases

// let ans=countVowels("hi there");
// console.log(ans);

// ans=countVowels("aeiou");
// console.log(ans);

// ans=countVowels("HIAeiou");
// console.log(ans);

// ans=countVowels("vishnu")
// console.log(ans)

//2
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let rev=str.toLowerCase();
    if(rev==rev.split("").reverse().join(""))
          return true;
    return false;
  }

  // test cases....

// let ans=isPalindrome("mom")
// console.log(ans)

//  ans=isPalindrome("moma")
// console.log(ans)

// ans=isPalindrome("gfg")
// console.log(ans)

//3
/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let finalSum=0;

    const start=performance.now();
    //i havent used Date.now instead used performance.now() as i got to know it provides more precision that the latter.
    for(let i=1;i<=n;i++) {
        finalSum+=i;
    }
    const end=performance.now();
    return end-start;
}
//test cases
// let ans=calculateTime(100)
// console.log(ans)

//  ans=calculateTime(100000)
// console.log(ans)

//  ans=calculateTime(1000000000)
// console.log(ans)