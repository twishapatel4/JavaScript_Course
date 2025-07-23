"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  namee: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex]], [this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  Orderpasta: function (ing1, ing2, ing3) {
    console.log(
      `here's your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
restaurant.orderDelivery({
  time: "22.00",
  address: "via abc street",
  mainIndex: 2,
  starterIndex: 1,
});

// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);
// const [first, second] = restaurant.categories;
// console.log(first, second);
// const [firstt, , secondd] = restaurant.categories;
// console.log(firstt, secondd);

// const [starter, mainCourse] = restaurant.order(2, 1);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, j] = nested;
// // const [i, , j] = nested;
// const [i, , [, j]] = nested;
// console.log(i, j);

// // const [p, q, r] = [8, 9];
// // console.log(p, q, r);
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// let a = 111;
// let b = 32;
// const obj = {
//   a: 12,
//   b: 23,
//   c: 45,
// };

// ({ a, b } = obj);
// console.log(a, b);
// const { namee, openingHours, categories } = restaurant;
// console.log(namee, openingHours, categories);

// const {
//   namee: RestaurantName,
//   openingHours: Hours,
//   categories: tags,
// } = restaurant;
// console.log(RestaurantName, Hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //destructing nested objects:
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [1, 2, 3];
// const badArr = [0, arr[0], arr[1], arr[2]];
// console.log(badArr);

// const newArr = [0, ...arr];
// console.log(newArr);
// const newMenu = [...restaurant.mainMenu, "gnucci"];
// console.log(newMenu);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
//Iterables: arrays,strings,maps and sets.Not object
// const str = "Jonas";
// const letters = [...str];
// console.log(letters);

//spread oprator do not work with console.log
// const ingredients = [
//   prompt("let's make pasta. Ingredient 1?"),
//   prompt(" Ingredient 2?"),
//   prompt(" Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.Orderpasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.Orderpasta(...ingredients);

//spread operator on the right side whereas the left side has rest operator
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(pizza, Risotto, otherFood);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(3, 4, 5, 6, 7);
// add(2, 3);

// const x = [2, 5, 7];
// add(...x);

// console.log(3 || "jonas");
// console.log("" || "jonas");
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest);

// the or operator short circuits when the truthy value is found while the and operator short circuits when the falsy value is found in an operation
// nullish coalescing operator works with the nullish value and not the falsy valuescons

// const guest2 = restaurant.numGuests ?? 10;
// console.log(guest2);
// //logical and operation does is that assign the value to a variable if it is currently  truthy
// for (const item of menu) console.log(item);
// console.log(menu.entries());
// for (const item of menu.entries()) console.log(item);
// for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);

// // console.log(restaurant?.openingHours?.mon?.open);
// // console.log(restaurant?.openingHours?.fri?.open);
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant?.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day} we open at ${open}`);
// }

///Looping over objects
// for (const day of object.keys(openingHours)) {
//   console.log(day);
// }
// const properties = Object.keys(restaurant.openingHours);
// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// const values = Object.values(restaurant.openingHours);
// console.log(values);
// const entries = Object.entries(restaurant.openingHours);
// // console.log(entries);
// for (const [x, { open, close }] of entries) {
//   console.log(`on ${x} we open at ${open} and close at ${close}`);
// }

const ordersSet = new Set(["pizza", "pasta", "pizza"]);

ordersSet.add("Garlic Bread");
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("pizza"));
ordersSet.delete("Garlic Bread");

// ordersSet.clear();
console.log(ordersSet);

for (const orders of ordersSet) console.log(orders);

const staff = ["waiter", "Chef", "Manager", "Chef"];
const staffUnique = new Set(staff);
// const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const question = new Map([
  ["quest", "What is the best programming language??"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
]);
console.log(question);
console.log(Object.entries(restaurant.openingHours));

console.log(question.get("quest"));

for (const [key, value] of question) {
  console.log(`${key}:: ${value}`);
}
console.log([...question]);
