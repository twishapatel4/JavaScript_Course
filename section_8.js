"use strict";

function calcAge(birthYear) {
  const age = 2025 - birthYear;
  // console.log(firstName, age);
  function printAge() {
    const firstName = "twi";
    let ageString = `${firstName} is ${age} years old born in ${birthYear}`;
    console.log(ageString);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milString = `You're a Millenial,${firstName}`;
      ageString = `modifies in the block`;
      console.log(ageString);
      console.log(milString);
    }
    console.log(milString);
  }
  printAge();
  return age;
}

const firstName = "twisha";
calcAge(1994);

// +++TDZ+++
console.log(me);
// console.log(job);
// console.log(fix);

var me = "twisha";
let job = "intern";
const fix = "mee";

console.log(addDecl(2, 3));
console.log(addArr);
console.log(addExpr(2, 3));

function addDecl(a, b) {
  return a + b;
}
// const addExpr = function (a, b) {
//   return a + b;
// };
var addArr = (a, b) => a + b;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);
const calcAge = function (birthYear) {
  const age = 2025 - birthYear;
  console.log(this);
  return age;
};
calcAge(2004);
const calcAgeArr = (birthYear) => {
  console.log(2025 - birthYear);
  console.log(this);
};
calcAgeArr(2004);
const me = {
  firstName: "twisha",
  calcAge: function (birthYear) {
    const age = 2025 - birthYear;
    console.log(this);
    return age;
  },
  greet: () => {
    console.log(this);
  },
};
me.calcAge(2004);
me.greet();
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(1, 5);

var addArr = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArr(1, 4);
const jessica = {
  firstName: "jessica",
  lastName: "Williams",
  age: 27,
};
// const marriedJessica = jessica;
// marriedJessica.lastName = "Patel";

function marryPerson(orgPerson, newLastName) {
  orgPerson.lastName = newLastName;
  return orgPerson;
}
const marriedJessica = marryPerson(jessica, "Patel");

console.log("BEfore", jessica);
console.log("After :", marriedJessica);
// jessica = {
//   a: 2,
//   // this is not possible beacuse the oject is vreated as const. if u want to change
//   // u have to intialize it as let
// };

const jessica2 = {
  name: "jessica",
  age: 27,
  city: "NY",
  lastName: "Williams",
  siblings: ["a", "b", "c"],
};

//shallow Copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = "Davis";
console.log("BEfore", jessica2);
console.log("After :", jessicaCopy);

jessicaCopy.siblings.push("d");

// Deep Copy
const jessicaClone = structuredClone(jessica2);

console.log("BEfore", jessica2);
console.log("After :", jessicaClone);
jessicaClone.siblings.push("d");
