/**            Variables
 *  'let'(ES6) is used in place of 'var'
 *  'const' -> constant and value cannot be changed
 */

const name = "Gaurav";
let age = 28;
let hasBike = false;

//--> name = "Nimesh"; //this will show an error(assignment to a constant variable)

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

// --> items = ["hi", "hello"]; // this cannot be done -> reassignment of array.

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

/*
 *      Spread operator (...x)
 */

const newArray = [...items]; // copies the elements to the new array one by one

//const newArray = [items]; // wrong -> will show array of arrays

console.log(newArray);

/*    Spread vs Rest operator
      spread -> basically adds/spreads another array in it || same goes for objects

 */

const arr = [1, 2, 3];
const arr1 = [...arr, 4, 5];

let obj1 = { name: "gary", age: 21 };
let obj2 = { ...obj1, bike: true };

console.log(arr1);
console.log(obj2);

//--> Array destructuring

const newArray1 = ["a", "b", "c"];

// traditional approach -> let top1 = newArray[0]
let [top1, top2, top3] = newArray1;

console.log("destructuring-> " + top1 + " " + top2);

// --> Objects destructuring

const newObj = {
  username: "gary",
  userage: 28,
  bike: false,
};

console.log("traditional approach-> " + newObj.username);

let { username, userage, bike } = newObj;

console.log("destructuring-> " + username + " " + userage);
