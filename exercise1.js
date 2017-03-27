//Part I

console.log(2 == "2"); //true
console.log(2 === 2); //true
console.log(10 % 3); //1
console.log(10 % 3 === 1); //true
console.log(true && false); //false
console.log(false || true); //true
console.log(true || false); //true

//Part II

var isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}

// 1. What should the above code console.log?
//Keep it up!
// 2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on itsown?
//It is a boolean already

var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");

// 1. What should the above code console.log? Why?
//"third" because undefined and "" are false but 1 is true
// 2. What is the value of firstVariable when it is initialized?
//undefined
// 3. Is the value of firstVariable a "truthy" value? Why?
//no because undefined is falsey
// 4. Is the value of secondVariable a "truthy" value? Why?
//No - empty string is falsey
// 5. Is the value of thirdVariable a "truthy" value? Why?
//Yes, 1 is true, 0 is false

//PART III
if (Math.random() > 0.5){
  console.log("Over 0.5");
}
else {
  console.log("Under 0.5");
}

/* JS: falsey values are anything that evalutes to false
	1. undefined
	2. ""
	3. 0
	4. false
	5. null
	6. NaN
*/