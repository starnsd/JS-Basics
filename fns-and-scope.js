//////////////////PROBLEM 1////////////////////

// Create a function called isTyler that accepts name as it's only parameter.
// If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var name = 'Tyler';

function isTyler(name) {
    if(name === "Tyler"); {
        return true;
    } else {
        return false;
    }
}

//////////////////PROBLEM 2////////////////////

// Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(name) {
    var name = prompt("What is your name?");
    return name;
}

//////////////////PROBLEM 3////////////////////

// Create a function called welcome that uses your getName function you created
// in the previous problem to get the users name,
// then alerts "Welcome, " plus whatever the users name is.

function welcome(name) {
    function getName(name) {
        var name = prompt("What is your name?");
        return name;
    }
    return "Welcome, " + name;
}

alert(welcome("Dillon"));

//////////////////PROBLEM 4////////////////////

//  What is the difference between arguments and parameters?

/*
 Arguments are what you pass to an invoked function.
 Parameters are where those arguments are placed in the function definition.
 */

//////////////////PROBLEM 5////////////////////

//  What are all the falsy values in JavaScript and how do you check if something is falsy?

/*
 The falsy values in JS are 0, " ", NaN, null, false, and undefined.
 You can check if something is falsy using boolean logic operators. For example:
 if(NaN === true) {
 console.log(true)
 } else {
 return false
 */

//////////////////PROBLEM 6////////////////////

//  Create a function called myName that returns your name

//  Didn't specify to make it adaptable so I cheated.
function myName(name) {
    var name = "Dillon";
    return name;
}

//  Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//  Now alert the result of invoking newMyName

alert(newMyName)

//////////////////PROBLEM 7////////////////////

//  Create a function called outerFn which returns an anonymous function which returns your name.
//  Tried to make this one a little more adaptable further down the line. You can set a var to call a different name.

function outerFn(name) {
    var myName = function(name) {
        return name;
    }
    return name;

//  Now save the result of invoking outerFn into a variable called innerFn.

    var innerFn = outerFn("Dillon");

//  Now invoke innerFn.

    function outerFn(name) {
        var myName = function(name) {
            return name;
        }
        return name;
    }

    var innerFn = outerFn("Dillon");

    console.log(innerFn);

/*
 I wanted to do that last question like this but I just couldn't get it to pass the args quite right.
 I felt like eliminating the unused variable "myName" from the above solution is closer to what
 the problem was actually asking for.

 function outerFn(name) {
 return function(name) {
 return name;
 }

 var innerFn = outerFn("Dillon");

 console.log(innerFn);
 */

//  Done