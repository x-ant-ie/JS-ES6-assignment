
// Declare a constant variable named "PI" and assign it the value of 3.14

const PI = 3.14;
console.log(PI);

// Use template literals to create a string that says "My name is <your name> and I am <your age> years old."

var myName = 'Gamu';
var myAge = '20';
const Person = `My name is ${myName} and I am ${myAge} years old.`

console.log(Person);

//Write an arrow function that takes in two numbers as parameters and returns their sum

const nums = (num1,num2) => num1+num2;
console.log(nums(3,7));

// Create a function called sum that takes in two parameters, a and b, and returns their sum.

 function sum(a, b){
    return a + b;
 };

 console.log(sum(3,5))

/* Create a variable name and assign it the value "John". Using template literals, 
create a new string that says "Hello, John!" and assign it to a variable called greeting */

  let name ="John";
  let greeting = `Hello, ${name}!`

  console.log(greeting);


/* TERMINAL COMMANDS AND HOW TO USE THEM */

/*   cd:  (change directory) is used to navigate between directories in the terminal. For example, to navigate to your home directory, you would type cd ~ */
/*   ls:  (list) is used to list the contents of a directory. For example, to list the files and directories in your current directory, you would type ls. */
/*   mkdir:  (make directory) is used to create a new directory. For example, to create a new directory called "mydirectory", you would type mkdir mydirectory. */
/*   rm:  (remove) is used to delete files and directories. For example, to delete a file called "myfile.txt", you would type rm myfile.txt. To delete a directory and its contents, you would use the -r flag, like this: rm -r mydirectory */
/*   cp:  (copy) is used to copy files and directories. For example, to copy a file called "myfile.txt" to a new file called "mynewfile.txt", you would type cp myfile.txt mynewfile.txt. To copy a directory and its contents, you would use the -r flag, like this: cp -r mydirectory newdirectory */
/*   mv: (move) is used to move files and directories. For example, to move a file named mydoc.txt to a directory named myfolder, you would type mv mydoc.txt myfolder/. */
/*   touch : is used to create a new file. For example, to create a new file named myfile.txt, you would type touch myfile.txt. */