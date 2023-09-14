// Sample CRUD Operations
const person = {
    id: 1,
    firstName: " Sharon",
    lastName: " Peddi ",
    age: 20,
    email: " peddisharon@gmail.com "
};

// Create Method
person.city = "Hyderabad";

// Read Method
console.log("Read:", person);

// Update Method
person.age = 20;

// Display Method
console.log("Update:", person);

// Delete Method
delete person.city;

// Display Method
console.log("Delete:", person);