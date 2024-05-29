// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript
//  to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends
// 2. Create three separate objects, each representing a friend, with 
// properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying
//  your information and yourfriend list.
//-----------------------------------Answer------------------------------------

// let people = {
//      friends: [] =["firstName:string","lastName:string","id:number"]
// };
// let friend1 ={
//     firstName:"sameera",
//     lastName:"usman",
//     id:123
// };
// let friend2 ={
//     firstName:"zainab",
//     lastName:"abid",
//     id:378
// };
// let friend3 ={
//     firstName:"mahnoor",
//     lastName:"abid",
//     id:578
// };
// people.friends.push ();
// console.log(people);

//-------------------------------end----------------------------------------
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence 
//"I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:

// const scrambledArray = ["student", "of",true, 123,
// "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(),
// shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired
// order (modify original array or
// create temporary arrays).

// • Output the Result:
// • Use join() to combine elements back into a single string:
// "I am a student of GIAIC".
//----------------------------Answer---------------------------------------
// Step 1: Scrambled array
// let scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

 // Step 2: Convert non-strings to strings
// let convertedArray = scrambledArray.map(element => element.toString());

 // Step 3: Rearrange the elements
// // Find the indices of the words and rearrange them accordingly
// let rearrangedArray = [
//     convertedArray.find(el => el === "I"),
//     convertedArray.find(el => el === "am"),
//     convertedArray.find(el => el === "a"),
//     convertedArray.find(el => el === "student"),
//     convertedArray.find(el => el === "of"),
//     convertedArray.find(el => el === "GIAIC")
// ];

 // Step 4: Join the array into a single string
// let result = rearrangedArray.join(' ');

// console.log(result); 
//-----------------------------------end--------------------------------------

// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent
//and manage product information.
// Task: Create a program to represent a product catalog using an
// array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product,
// with properties like name,model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) 
//in theinventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

//---------------------------------Answer-------------------------------------------

// let inventory = [];

// let product1 = {
//     name: "Product 1",
//     model: "Model 1",
//     cost: 10,
//     quantity: 50
// };

// let product2 = {
//     name: "Product 2",
//     model: "Model 2",
//     cost: 20,
//     quantity: 30
// };

// let product3 = {
//     name: "Product 3",
//     model: "Model 3",
//     cost: 15,
//     quantity: 25
// };
// inventory.push(product1);
// inventory.push(product2);
// inventory.push(product3);

// console.log("Quantity of the third product:", inventory[2].quantity);
 // Adding more products
// let product4 = {
//     name: "Product 4",
//     model: "Model 4",
//     cost: 25,
//     quantity: 40
// };

// inventory.push(product4);

// Accessing and logging properties of a product
// console.log("Name of the second product:", inventory[1].name);
// console.log("Cost of the fourth product:", inventory[3].cost);

 // Modifying a property of a product
// inventory[0].quantity -= 5;
// console.log("Updated quantity of the first product:", inventory[0].quantity);
//------------------------------------end--------------------------------------
// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named
//  Student that describes student information like name, senior status (true/false), and 
// whether they've completedtheir assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

//-------------------------------Answer------------------------------------------
interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
}
let students: Student[] = [
    { name: "Alice", isSenior: true, hasCompletedAssignments: true },
    { name: "Bob", isSenior: false, hasCompletedAssignments: false },
    { name: "Charlie", isSenior: true, hasCompletedAssignments: true },
];
// Function to find senior students with assignments
function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

// Function to update the class list by removing students who haven't 
//completed their assignments
function updateClassList(students: Student[]): Student[] {
    return students.filter(student => student.isSenior || student.hasCompletedAssignments);
};
