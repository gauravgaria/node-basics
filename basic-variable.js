/**            Variables
 *  'let'(ES6) is used in place of 'var'
 *  'const' -> constant and value cannot be changed
 */

const name = "Gaurav";
let age = 28;
let hasBike = false;

// name = "Nimesh"; //this will show an error(assignment to a constant variable)

function userInfo(userName, userAge, userBike) {
  return "name is " + userName + " " + userAge + " " + userBike;
}

console.log(userInfo(name, age, hasBike));

/**     Objects
 *    const obj = {key:value}
 *    objects can also have functions inside them
 */

const person = {
  name: "Nimesh",
  age: 24,
  hasBike: true,
  showName() {
    console.log(this.name); // this(current instance) has the scope within the object only
  },
};

console.log("objects -> " + person.name);

person.showName();

/**
 *      Arrays
 */

const items = ["laptops", "desktops", "mouse", "bagpack"];

items.push("games"); //Note: "const" array is not being changed here, only the pointing address is changed
items[3] = "keyboard"; // this is only point to address not to the whole array.

items = ["hi", "hello"]; // this cannot be done -> reassignment of array.

/**    NOTE: same goes for the objects also -> const obj = {name:'gaurav'}
 *                                             obj = {name:'Nimesh'} -> error
 *                                             obj.name = "Nimesh" -> no error -> points to the address
 */

// let item -> declaration || 'items' array assigned to item variable each time.

for (let item of items) {
  console.log(item);
}

//array.map((var) => print var)
console.log(items.map((item) => "items -> " + item));
