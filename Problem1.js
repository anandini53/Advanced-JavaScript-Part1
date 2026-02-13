//Problem1:  Create a Map in JavaScript and perform the following operations:
/**
 * Add key-value pairs to the Map
 * Check if a specific key exists
 * Retrieve the value associated with a given key
 * Iterate through all key-value pairs
 */

// Create a map

const myMap = new Map();

// Add key-value pairs to the Map

myMap.set("Name", "Ganga")
myMap.set("Age", 22)
myMap.set("City", "Varanasi")

console.log(myMap);

// Check if a specific key exists

console.log(myMap.has("Name"));         //The has() method returns true if a key exists in a map.

// Retrieve the value associated with a given key

console.log(myMap.get("City")); 

// Iterate through all key-value pairs

for (let [key, value] of myMap) {
    console.log("Key: " + key + ", Value: " + value);
}

