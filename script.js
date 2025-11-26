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
function addNumbers(a,b){
console.log(a+b);
}
addNumbers(5,10);

let fullName = function(firstName, lastName){
    return firstName + " " + lastName;
}
let personName = fullName("Maryam", "Muneer");
console.log(personName);