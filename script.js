 let js='amazing';
// if(js==='amazing'){
//     alert("JS is Amazing!!");
// }
console.log(40+40-24/12);
let country="India";
let continent="Asia";
let population=34;
console.log(country);
console.log(population);
console.log(continent);

let jsIsFun=true;
console.log(jsIsFun);
console.log(typeof true);
console.log(typeof jsIsFun);
jsIsFun="twi";
console.log(typeof jsIsFun);
let isIsland=false;
let language;
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);
language='hindi';
const countryy="India";
// countryy="Bharat"; cannot do these
// basic Operators
let halfPopulation= population/2;
console.log(halfPopulation);
population++;
console.log(population);
let finlandPopulation=6;
console.log(population>finlandPopulation);
let avgPopulation=33;
console.log(avgPopulation>population);
let desc="Portugal is in Europe, and its 11 million people speak portuguese";
console.log(desc);
let templateLiteral=`${country} is in ${continent}`;
console.log(templateLiteral);
if(population<33)
{
  console.log( `India's Population is ${avgPopulation-population} less than ${avgPopulation}`);
}
else{
  console.log( `India's Population is ${population-avgPopulation} more than ${avgPopulation}`);
}

const age=20;
let isOldEnough=false;
if(age>=18){
  isOldEnough=true;
}
if(isOldEnough)
{
  console.log(`Issue Driving License`);
}
else{
  console.log(`Not Eligible`);
}
// falsy values: Nan , null , '' , 0, undefined
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// const numNeighbours=Number(prompt('How many neighbour countries does your contry have?'));
// if(numNeighbours===1)
// {
//   console.log(`Only 1 border!`);
// }
// else if(numNeighbours>1)
// {
//   console.log(`More than 1 border`);
// }
// else{
//   console.log(`No borders`);
// }

const hasDrivingLicense=true;
const hasGoodVision=false;
console.log(hasDrivingLicense &&  hasGoodVision);
console.log(!hasGoodVision);
console.log(!hasDrivingLicense ||  hasGoodVision);

language ="Hindi";
switch(language){
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
// population=23
population>33 ? console.log(`Portugal's population is above average`):console.log(`Portugal's population is below average`);