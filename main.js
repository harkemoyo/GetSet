// Getters
// Accessing data using property stored as function
const user = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  user.fullName('John', 'Doe')
// console.log( user.fullName('John', 'Doe'));

// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    age : 34,
get fullName() {
      return `${this.firstName} ${this.lastName} ${this.age}`;
    }
  };
  console.log(person.fullName);
  

