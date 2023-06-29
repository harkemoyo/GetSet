// Getters
// Accessing data using property stored as function
const userr = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  userr.fullName('John', 'Doe')
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
  
// setters
const user = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  console.log(user.lang = "en");
 
