"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  // printGoals: function (number) {
  //   if(number==)
  // },
};

const players1 = [...game.players[0]];

const players2 = [...game.players[1]];
console.log(players1);
console.log(players2);
// const gk1 = [players1[0]];
// const gk2 = [players2[0]];
// console.log(`The goal Keeper for team 1 is ${gk1} and team 2 is ${gk2}`);
// const fieldPlayers1 = [players1[1], ...players1];
// console.log(fieldPlayers1);
const [gk, ...fieldPlayers1] = players1;
console.log(gk, fieldPlayers1);
const [gk1, ...fieldPlayers2] = players1;
console.log(gk1, fieldPlayers2);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const sub1 = ["Tiago", "Coutinho", "Perisic"];
const playersTeam1 = [...players1, ...sub1];
console.log(playersTeam1);
// const team1 = game.odds.team1;
// console.log(team1);
// const team2 = game.odds.team2;
// console.log(team2);
// const draw = game.odds.x;
// console.log(draw);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

/// more likely to win
(team1 < team2 && console.log("Team 1 is more likely to win")) ||
  (team1 > team2 && console.log("Team 2 is more likely to win")) ||
  console.log();
for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${players}`);
}

const odds = Object.values(game.odds);
let avg = 0;
for (const i of odds) {
  avg += i;
}
avg = avg / odds.length;
console.log(avg);
for (const [team, odd] of Object.entries(game.odds)) {
  const stringg =
    team === "x"
      ? "draw"
      : odds.team1 > odds.team2
      ? "Victory of Bayern Munich "
      : "Victory of Borrussia Dortmund";
  console.log(`Odd of ${stringg} : ${odd}`);
}
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()];
console.log(time);
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[ ${half} ] half : ${min} : ${event}`);
}
