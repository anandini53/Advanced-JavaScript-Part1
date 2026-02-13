
/** Problem 2:
 * Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name
 */

// Create a map to store contact information

const infoMap = new Map();

infoMap.set("name", "Ganga")
infoMap.set("age", 22)
infoMap.set("email", "ganga001@gmail.com")
infoMap.set("location", "Varanasi")



// imlementing function to retrieve contact details by name

function getContactDetails(name) {
    if(infoMap.has(name)) {
        return infoMap.get(name);
    } else {
        return "Contact detail not found ";
    }
}

console.log(getContactDetails("location"));
console.log(getContactDetails("email"));
console.log(getContactDetails("phone"));