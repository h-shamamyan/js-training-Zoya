// ✅ Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

function createUser(name, age, isAdmin) {
  let User = {
    name,
    age,
    isAdmin,
  }
return User;
  }
console.log(createUser("Zoya", "31", "true"));

// ✅ Task 2: Calculate Total Sales
// Description:
// Write a function calculateTotalSales that takes a nested object representing products sold during the day.
// Each product key contains an object with price and quantitySold.
// The function should return the total revenue.
// Requirements:
// - Use a for...in loop to iterate over the object.
// - Multiply price * quantitySold for each product and sum the results.

function calculateTotalSales(salesData) {

  let revenue = 0;
  
  for (key in salesData) { // this expression will work, but its better to write "let key" instead of just "key"
  let product = salesData[key];
  revenue += product.price * product.quantitySold;
  }
  return revenue;
}
let perfumeSale = {
  Dior: { price: 2, quantitySold: 30 },
};
console.log(calculateTotalSales(perfumeSale));

// ✅ Task 3: Convert Array to Object
// Description:
// Create a function arrayToObject that takes an array and returns an object.
// The object should have the array indexes as keys and the elements as values.
// Requirements:
// - Use a loop to build the object manually (no Object.fromEntries).
// - Return the constructed object.

function arrayToObject(arr) {
  let result = {};
  for (i = 0; i < arr.length; i++) { // the same here let i
   result[i] = arr[i];
  }
  return result;
}

// ✅ Task 4: Get Keys with String Values Only
// Description:
// Create a function getStringKeys that takes an object and returns an array of keys
// whose values are strings.
// Requirements:
// - Use a loop or Object.keys() to iterate through the object.
// - Return only the keys where the value is of type 'string'.

function getStringKeys(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(key);
     };
  }
    return result;
}

// ✅ Task 5: Merge Two Objects
// Description:
// Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both.
// If the same key exists in both, the value from the second object should overwrite the first.
// Requirements:
// - Do not modify the original objects.

function mergeObjects(obj1, obj2) {
  let result = {};

  for (let key in obj1) {
    result[key] = obj1[key];
  }

  for (let key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}
