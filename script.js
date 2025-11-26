// function declaration

// Name the function first. It gets hoisted (you can use it before it appears means you cannot run it until you call the function. Hoisted means that it already stores at the top in the javascript memory
greet();
function greet() {
  console.log("Hello!");
}

// calling the function

// function expression
// The function is stored in a variable. It does not get hoisted (you cannot use it before it appears)

// practice questions
 // function declaration
function addNumbers(a,b){
  console.log(a + b);
}
addNumbers(5,10);

// function expression
const fullName = function(firstName, lastName){
  return firstName + " " + lastName;
}
let personName = fullName("Maryam", "Muneer");
console.log(personName);

// arrow function
let double = (num) => num * 2;
console.log(double(5));

// better name + proper usage
function checkAdult(a){
  return a >= 18 ? "Adult" : "Minor";
}
console.log(checkAdult(20));

// function expression version
let checkAge = function(age){
  return age >= 18 ? "Adult" : "Minor";
}
let ageStatus = checkAge(16);
console.log(ageStatus);

// average of three numbers
function averageOfThree(num1, num2, num3){
  return (num1 + num2 + num3) / 3;
} 
console.log(averageOfThree(10, 20, 30));

let joinStrings = function(str1, str2){
  return str1 + " " + str2;
}
console.log(joinStrings("Hello", "World"));
const user = {
  name: "Maryam",
  sayHi() {
    console.log("Hi " + this.name);
  }
};

user.sayHi();
