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
    },

    // setters always ensure value of a property is up To date
    set fullName(value){
     [this.firstName, this.lastName,this.age] = value
    }
  };
  // const Willy = {
  //   firstName :'Kalibo',
  // lastName: 'Wiz',
  // age: 28
  // }
  person.firstName = 'Kalibo'
  person.lastName = 'Wiz'
  person.age = 30
  
  const chesoni = person.fullName
  console.log(chesoni);
  
// setters

// variable declaration inside an obj
let mark = "Hark"
const user = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    mark,
    /**
     * @param {string} lang
     */
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  console.log(user.lang = "en");
  console.log(user);
 
