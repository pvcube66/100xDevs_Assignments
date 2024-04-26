/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// easy
//1
function isAnagram(str1, str2) {
  
     if(str1.split("").sort().join()==str2.split("").sort().join())
            console.log("yup");
     else 
         console.log("nope");
}
//test cases    
// isAnagram("hi","ih");
// isAnagram("pavu","vishy");

//2
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [
    {
        id: 1,
        timestamp: 1656076800000, // Unix timestamp for the date of the transaction
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656163200000,
        price: 20,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 3,
        timestamp: 1656249600000,
        price: 15,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 4,
        timestamp: 1656412800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },

    {
        id: 5,
        timestamp: 1656412800000,
        price: 60,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    // Additional transactions...
];

// console.log(transactions[0].price);

function calculateTotalSpentByCategory(transactions) {
    var ans={};
    for(let i=0;i<transactions.length;i++){
        let cat=transactions[i].category;
        let price=transactions[i].price;
        if(ans.hasOwnProperty(cat)) ans[cat]+=price;
        else ans[cat]=price;
    }
    let result=[]
    for(category in ans){
        result.push({category:category,price:ans[category]})

    }
    return result;
    
  }

//  let result=calculateTotalSpentByCategory(transactions);
//  console.log(result);

//3
/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest=numbers[0];
    for (let i=0;i<numbers.length;i++){
        if(numbers[i]>largest) largest=numbers[i];
    }
    console.log(largest)
}

findLargestElement([1,2,3,4,5,6,7,8,9999])
findLargestElement([-9,-99,-5,-1])