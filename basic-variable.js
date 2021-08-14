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
