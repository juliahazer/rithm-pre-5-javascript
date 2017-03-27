/*Part 1 */

function difference(a,b){
	return a-b;
}
console.log(difference(2,2));

function product(a,b){
	return a*b;
}
console.log(product(2,2));

function printDay(num){
	if (num < 1 || num > 7){
		return undefined
	}
	var days = ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
				"Friday", "Saturday"];
	return days[num];			
}

console.log(printDay(4));
console.log(printDay(41));

function lastElement(arr){
	return arr[arr.length-1];
}

console.log(lastElement([1,2,3,4]));
console.log(lastElement([]));

function numberCompare(a,b){
	if (a > b){
		return "First is greater"
	}
	else if (b > a){
		return "Second is greater"
	}
	return "Numbers are equal"
}

console.log(numberCompare(1,1));

function singleLetterCount(word, letter){
	var count = 0;	
	word = word.toLowerCase();
	letter = letter.toLowerCase();
	for (var i = 0; i < word.length; i++){
		if (word[i] === letter){
			count++
		}
	}
	return count
}

console.log(singleLetterCount('amazing', 'A'));


/* Part 2 */

//multipleLetterCount
//this function takes in one parameter (a string) and 
//returns an object with the keys being the letters 
//and the values being the count of the letter.
function multipleLetterCount(str){
  var strArr = str.split('');
  var obj = {};
  for (var i = 0; i < strArr.length; i++){
    if (obj[strArr[i]] !== undefined){
      obj[strArr[i]]++;
    }
    else {
      obj[strArr[i]] = 1;
    }
  }
  return obj;
}

console.log(multipleLetterCount("juliaj"));

//arrayManipulation

function arrayManipulation(arr, command, loc, val){
  if (command === "remove"){
    if (loc === "end"){
      return arr.pop();
    }
    else if (loc ==="beginning"){
      return arr.shift();
    }
  }
  else if (command === "add"){
    if (loc === "end"){
      arr.push(val);
      return arr;
    }
    else if (loc === "beginning"){
      arr.unshift(val);
      return arr;
    }
  }
  return "Error with arguments";
}

console.log(arrayManipulation([1,2,3], "add", "beginning", 20));

//isPalindrome
function isPalindrome(str){
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

// function isPalindrome(str){
//   var start = 0;
//   var end = str.length-1;
//   while (start < end){
//     if (str[start] !== str[end]){
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// }

console.log(isPalindrome('testing'));
console.log(isPalindrome('hannah'));


/*PART 3 - ROCK PAPER SCISSORS */

var choice = prompt("Please enter Rock/Paper/Scissor:");
choice = choice.toLowerCase();
var arr = ['rock','paper','scissor'];
var computer = arr[Math.floor(Math.random()*3)];
console.log(computer);
var msgChoices = " computer: " + computer + ", you: " + choice; 
if(choice === computer){
  console.log("You tie!" + msgChoices);
}
else if ((choice === "rock" && computer === "scissor")||
(choice ==="paper" && computer === "rock") ||
(choice ==="scissor" && computer === "paper")){
  console.log("You win!" + msgChoices);
}
else {
  console.log("You lose!" + msgChoices);
}