//                Assignment 1: Building Your Friend List
//Task: Create a program that manages a simple friend list.
//1. Define an object named people containing an empty array called friends.
//2. Create three separate objects, each representing a friend, with properties like firstName, 
//   lastName, and optionally id.
//3. Add these friend objects to the friends array within the people object.
//4. Output the entire people object to the console, displaying your information and your 
//   friend list.
var People = {
    Friends: []
};
var friend1 = {
    firstName: "Amina",
    lastName: "Ali",
    id: 1131,
};
var friend2 = {
    firstName: "Maryam",
    lastName: "Ahmed",
    id: 1132,
};
var friend3 = {
    firstName: "Zainab",
    lastName: "Khan",
    id: 1133,
};
People.Friends.push(friend1, friend2, friend3);
console.log(People);
console.log("\n");
//--------------------------------------------------------------------------------------------//
//                 Assignment 2:Manipulating an Array: Rearranging Words
//Objective:
//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
//Steps:
//1. Scrambled Array:
//o Start with an array of elements in a scrambled order, like:
//const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
//• Modify the Array:
//• Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
//o Convert non-strings (booleans, numbers) to strings if needed.
//o Split elements into character arrays (optional).
//o Rearrange characters or elements in the desired order (modify original array or 
//  create temporary arrays).
//• Output the Result:
//• Use join() to combine elements back into a single string: "I am a student of GIAIC"
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 0, "am", "a");
var Join = scrambledArray.join("love");
console.log(Join);
console.log('\n');
console.log(scrambledArray);
var inventory = [];
// Step 2: Create three product objects
var product1 = {
    name: "Widget A",
    model: "W123",
    cost: 50,
    quantity: 100,
};
var product2 = {
    name: "Gizmo B",
    model: "G456",
    cost: 30,
    quantity: 75,
};
var product3 = {
    name: "Thingamajig C",
    model: "T789",
    cost: 20,
    quantity: 120,
};
// Step 3: Add product objects to the inventory
inventory.push(product1, product2, product3);
// Step 4: Access and log the quantity of the third product
console.log("Quantity of ".concat(product3.name, ": ").concat(product3.quantity));
// Step 5: Explore adding and accessing more elements
// For example, you can add more products or update existing ones:
var newProduct = {
    name: "Doodad D",
    model: "D101",
    cost: 40,
    quantity: 50,
};
inventory.push(newProduct);
// Accessing the first product's cost:
console.log("Cost of ".concat(product1.name, ": $").concat(product1.cost));
