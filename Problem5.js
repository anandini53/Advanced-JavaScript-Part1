/** Problem 5:
 * Create two objects person1 and person2 with properties name and age. Create a function “introduce” that 
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself 
using the introduce function.
 */



const person1 = {
    name: "John",
    age: 26
}

const person2 = {
    name: "Alice",
    age: 27
}



function introduce() {
    console.log("Hello, I'm " + this.name + ", and I'm " + this.age + " years old.");
}

// Use the call method to make person2 introduce itself using the introduce function

introduce.call(person2);        // 
