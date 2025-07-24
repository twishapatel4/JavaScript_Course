"use strict";

const bookings = [];
const createBooking = function (
  flightNumber,
  passengerNumber = 1,
  price = 199 * passengerNumber
) {
  const Booking = { flightNumber, passengerNumber, price };
  bookings.push(Booking);
  console.log(bookings);
};
createBooking("AB1234");

const twish = { name: "Twisha Patel", passport: 1234567890 };
const flight = "LH123";
const checkin = function (flightNumber, passenger) {
  flightNumber = "LH014";
  passenger.name = "Miss" + passenger.name;

  if (passenger.passport === 1234567890) {
    alert(`Check in`);
  } else {
    alert(`Wrong candidate`);
  }
};
////JS do not offer pass by reference
//  create a higheer order function
const OneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transfomer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transfomer("JavaScript is the BEst", upperFirstWord);
transfomer("JavaScript is the BEst", OneWord);

const high5 = function () {
  console.log("Hello");
};
["jonas", "man"].forEach(high5);

const greet = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};
const greeting = greet("hey");
greeting("Twisha");

greet("Hello")("Twi");
const greetarr = (greeting) => (name) => console.log(`${greeting} ${name} `);
greetarr("hii")("twisha");

const airIndia = {
  airline: "Air India",
  code: "AI",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} boooked a  seat on ${this.airline} flight ${this.code}${flightNum}`
    );
  },
};

const ticketBook = airIndia.book;
airIndia.book(234, "twisha");
const Indigo = {
  airline: "Indigo",
  code: "IN",
  bookings: [],
};

// ticketBook(12, "twisha");
ticketBook.call(Indigo, 23, "twisha");

//Apply method
const flightData = [123, "hello"];
ticketBook.apply(airIndia, flightData);
ticketBook.call(airIndia, ...flightData);

const bookAI = ticketBook.bind(airIndia);
const bookIn = ticketBook.bind(Indigo);
bookAI(12, "Twisha Patel");
bookIn(1503, "helooo");

airIndia.planes = 100;
airIndia.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", airIndia.buyPlane.bind(airIndia));

//partial Application
const addTax = function (rate, value) {
  value = value + value * rate;
  console.log(value);
};
addTax(0.2, 100);

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Another Way:
const addTAX2 = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const addVAT2 = addTAX2(0.23);
addVAT2(100);

//IIFE
(function () {
  console.log("hey");
})();

(() => console.log("ARrow function"))();
//////Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 100;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
// g and h are accessing differenet f so each of them have their own f in their execution context
