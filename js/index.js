/* ASSIGNMENT 1 */

// Declare a constant variable named "PI" and assign it the value of 3.14

const PI = 3.14;
console.log(PI);

// Use template literals to create a string that says "My name is <your name> and I am <your age> years old."

var myName = 'Gamu';
var myAge = '20';
const Person = `My name is ${myName} and I am ${myAge} years old.`;

console.log(Person);

//Write an arrow function that takes in two numbers as parameters and returns their sum

const nums = (num1,num2) => num1+num2;
console.log(nums(3,7));

// Create a function called sum that takes in two parameters, a and b, and returns their sum.

 function sum(a, b){
    return a + b;
 };

 console.log(sum(3,5));

/* Create a variable name and assign it the value "John". Using template literals, 
create a new string that says "Hello, John!" and assign it to a variable called greeting */

  let name = "John";
  let greeting = `Hello, ${name}!`;

  console.log(greeting);

/*  ASSIGNMENT2 */


// TERMINAL COMMANDS AND HOW TO USE THEM

/*   cd:  (change directory) is used to navigate between directories in the terminal. For example, to navigate to your home directory, you would type cd ~ */
/*   ls:  (list) is used to list the contents of a directory. For example, to list the files and directories in your current directory, you would type ls. */
/*   mkdir:  (make directory) is used to create a new directory. For example, to create a new directory called "mydirectory", you would type mkdir mydirectory. */
/*   rm:  (remove) is used to delete files and directories. For example, to delete a file called "myfile.txt", you would type rm myfile.txt. To delete a directory and its contents, you would use the -r flag, like this: rm -r mydirectory */
/*   cp:  (copy) is used to copy files and directories. For example, to copy a file called "myfile.txt" to a new file called "mynewfile.txt", you would type cp myfile.txt mynewfile.txt. To copy a directory and its contents, you would use the -r flag, like this: cp -r mydirectory newdirectory */
/*   mv: (move) is used to move files and directories. For example, to move a file named mydoc.txt to a directory named myfolder, you would type mv mydoc.txt myfolder/. */
/*   touch : is used to create a new file. For example, to create a new file named myfile.txt, you would type touch myfile.txt. */


/* ASSIGNMENT 3 */
/* Question1 - Multiply Function*/

function multiply(num1, num2) {
  return num1 * num2;
}
 
let result = multiply(6, 9);
console.log(result);


function multiply(num1, num2) {
  return num1 * num2;
}

/* Question2 - Grade Calculator Function
Write a function called calculateGrade that takes a score as an argument and returns a letter grade based on the following grading scale:
A: 90 or above
B: 80-89
C: 70-79
D: 60-69
F: below 60 */

function calculateGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

let grade = calculateGrade(85);
console.log(grade); 