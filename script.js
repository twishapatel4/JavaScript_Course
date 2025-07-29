// 'use strict';
// // const Person = function (firstName, lastName) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   // console.log(this);

// //   //never create function in construtor onject
// //   // this.display = function () {
// //   //   console.log(`First Name:${this.firstName}`);
// //   //   console.log(`Last Name:${this.lastName}`);
// //   // };
// //   // this.display();
// // };

// // // new Person('Twisha', 'Patel');
// // // 1. new {} is created
// // // 2. Function is called and the this keyword is set to newly created object
// // // 3. newly created objetc is linked to the prototype creates __proto__ object
// // // 4. created object is automatically returned
// // const p = new Person('Twisha', 'Patel');

// // // p.display();
// // console.log(Person.prototype);

// // Person.prototype.display = function () {
// //   console.log(`First Name:${this.firstName}`);
// //   console.log(`Last Name:${this.lastName}`);
// // };
// // console.log(Person.prototype);
// // p.display();
// // console.log(p.__proto__);
// // console.log(Person.prototype.isPrototypeOf(p));
// // Person.prototype.species = 'Homo sapiens';
// // console.log(p);
// // console.log(p.hasOwnProperty('species'));
// // console.log(p.hasOwnProperty('firstName'));
// // console.log(p.__proto__.__proto__);
// // console.log(Person.prototype.constructor);
// // console.dir(Person.prototype.constructor);

// //we can add ew methods to the already existing prototypes
// const arr = [1, 2, 23, 4, 3, 23, 3, 3, 4, 56, 65, 4, 35, 4];
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// // console.dir(h1);
// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };
// Car.prototype.display = function () {
//   console.log(`${this.name} going at ${this.speed}`);
// };
// Car.prototype.Accelerator = function () {
//   this.speed = this.speed + 10;
// };
// Car.prototype.Brake = function () {
//   this.speed = this.speed - 5;
// };
// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// car1.display();
// car2.display();
// car1.Accelerator();
// car2.Brake();
// car1.display();
// car2.display();

// ///////////////
// //coding challenge 2
// class cars {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }
//   Accelerator() {
//     this.speed = this.speed + 10;
//     console.log(`${this.name} going at ${this.speed}`);
//   }
//   Brake() {
//     this.speed = this.speed - 5;
//     console.log(`${this.name} going at ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//     console.log(`${this.name} going at ${this.speed}`);
//   }
// }
// const cars1 = new cars('Ford', 125);
// cars1.speedUS = 90;
// cars1.speedUS;
// //////////////////////
// //ES6 classes
// //////////////////////
// //class Expression
// // const PersonCl = class {};
// //class Declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //these will be on the prototype and not the object itself
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }
//   static hey() {
//     console.log('Heyyy');
//   }
// }
// const me = new PersonCl(arr, 12);
// console.log(me.__proto__ === PersonCl.prototype);

// const account = {
//   owner: 'me',
//   moments: [100, 200, -123, 243],

//   get latest() {
//     return this.moments.slice(-1).pop();
//   },
//   set latest(moment) {
//     this.moments.push(moment);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.latest);

// //////////////
// //object.create
// const PersonProt = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     (this.firstName = firstName), (this.birthYear = birthYear);
//   },
// };
// const steve = Object.create(PersonProt);
// console.log(steve);
// const sarah = Object.create(PersonProt);
// sarah.init('Sarah', 2000);
// sarah.calcAge();

// ////////////////////////
// // INHERITANCE between Classes
// /////////////////////////
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(
//     `${this.firstName} is ${this.calcAge()} years old pursuing ${this.course}`
//   );
// };
// const a = new Student('a', 2015, 'CS');
// console.log(a);
// a.introduce();
// console.log(a.__proto__);
// console.log(a.__proto__.__proto__);
// console.log(Student.prototype.constructor);
// //This points to the constructor of the Person but it should actually point to the Student
// Student.prototype.constructor = Student;Student.prototype.constructor = Student; //Here is the fix to the above mentioned problem
// console.log(Student.prototype.constructor);
// console.log(a instanceof Student);
// console.log(a instanceof Person);

// /////////////////////
// // Challenge 3
// const EV = function (name, speed, charge) {
//   Car.call(this, name, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.Accelerator = function () {
//   this.speed = this.speed + 20;
//   console.log(`${this.name} going at ${this.speed}`);
// };
// const carEV = new EV('Tesla', 120, 23);
// console.log(carEV);
// carEV.chargeBattery(90);
// carEV.Accelerator();
// console.log(carEV);
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //these will be on the prototype and not the object itself
//   calcAge() {
//     return 2025 - this.birthYear;
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2025 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not Full name`);
//     }
//   }
//   get fullName() {
//     this.fullName = this._fullName;
//   }
//   static hey() {
//     console.log('Heyyy');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   calcAge() {
//     console.log(
//       `I'm ${2025 - this.birthYear} years old and also from the Student Class`
//     );
//     return 2025 - this.birthYear;
//   }
//   introduce() {
//     console.log(
//       `${this._fullName} is ${this.calcAge()} years old pursuing ${this.course}`
//     );
//   }
// }
// //if you don't want any new properties then it will be fine to not even mention the contructor
// const c = new StudentCl('c d', 2012, 'IT');
// c.introduce();

// //object.create
// const PersonProto = {
//   calcAge() {
//     return 2025 - this.birthYear;
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const a = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(
//     `${this.firstName} is ${this.calcAge()} years old pursuing ${this.course}`
//   );
// };
// const b = Object.create(StudentProto);
// b.init('b', 2012, 'EE');
// console.log(b);
// b.introduce();
class account {
  locale = navigator.language; //public field
  bank = 'bankist';
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.#movements.push(-val);
  }
  #approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }
  static test() {
    console.log('static method');
  }
}

const acc1 = new account('a', 'USD', 1111);
console.log(acc1);
console.log(acc1.movements);
// acc1.movements.push(20);
acc1.deposit(240);
acc1.withdraw(300);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
// acc1.movements.push(23);
// acc1.test();
account.test();
////////////////
// ENCAPSULATION: Private class Fields and Methods

///what we have
// 1. private fields
// 2. public fields
// 3. public methods
// 4. private methods
// static version of these 4

////////////////////////////////
//Challenge 4
class cars {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  Accelerator() {
    this.speed = this.speed + 10;
    console.log(`${this.name} going at ${this.speed}`);
  }
  Brake() {
    this.speed = this.speed - 5;
    console.log(`${this.name} going at ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`${this.name} going at ${this.speed}`);
  }
}
class EVCl extends cars {
  #charge;
  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery : ${this.#charge}`);
    return this;
  }
  Accelerator() {
    this.speed = this.speed + 20;
    console.log(`${this.name} going at ${this.speed}`);
    return this;
  }
}
const rivian = new EVCl('rivian', 120, 23);
rivian
  .Accelerator()
  .Accelerator()
  .chargeBattery(86)
  .Accelerator()
  .Accelerator();
