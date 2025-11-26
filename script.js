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
console.log(a+b);
}
addNumbers(5,10);

// function expression
let fullName = function(firstName, lastName){
    return firstName + " " + lastName;
}
let personName = fullName("Maryam", "Muneer");
console.log(personName);

// arrow function
let double=function(num){
  return num*2;
}
double(5);
console.log(double(5));S