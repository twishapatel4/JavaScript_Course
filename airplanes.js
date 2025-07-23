const airplane = "TAP Air Portugal";
const plane = "A240";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(airplane.length);
console.log(airplane.indexOf("t"));
console.log(airplane.indexOf("P"));
console.log(airplane.lastIndexOf("P"));
console.log(airplane.indexOf("portugal")); //case sensitive

console.log(airplane.slice(4));
///we cannot mutate strings the changes are temp i.e not in place
console.log(airplane.slice(0, airplane.indexOf(" ")));
console.log(airplane.slice(airplane.lastIndexOf(" ") + 1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("Middle Seat");
  } else {
    console.log("Not a middle Seat");
  }
};
checkMiddleSeat("11E");
console.log(typeof new String("twisha"));
//string are converted to object as soon as the methods are called.once the operations are completed convert it back to string
// this is termend as boxing
console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());

const pass = "          tWisHA             ";
const passenger = pass.trim();
const passLower = passenger.toLowerCase();
const passengerNew = passLower[0].toUpperCase() + passLower.slice(1);
console.log(pass, passenger, passLower, passengerNew);
const priceUS = "246.45$";
const priceIND = priceUS.replace("$", "₹");
console.log(priceUS, priceIND);
console.log(plane.includes("A240"));
console.log(plane.startsWith("240")); //also has endswith method
console.log("a+very+nice".split("+"));

const [firstName, lastName] = "Twisha Patel".split(" ");
console.log(firstName);
console.log(lastName);

const newName = ["Miss.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  let names = name.split(" ");
  for (const n of names) {
    names[n] = n.toUpperCase();
  }
  console.log(names);
};
capitalizeName("hello Mysdeh sdsie");

///PAdding
const message = "Go to Gate 23!";
console.log(message.padStart(25, "..."));
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
let num = "12435457320320854768";
let nuu = maskCreditCard(num);
console.log(nuu);

const msg = "Bad Weather all Departures are Delayed ";
console.log(msg.repeat(10));
