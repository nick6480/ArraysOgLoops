'use strict';

let roll;
let counters = [0, 0, 0, 0, 0, 0];


function rollDice() {

  roll = Math.random();
  roll = Math.floor(roll * 6 + 1);
  counters[roll-1]++;

};


for (let i = 0; i < 10; i++) {

  rollDice();

};


document.write(`<p>Rolled one ${counters[1]} times </p>`);
document.write(`<p>Rolled one ${counters[2]} times </p>`);
document.write(`<p>Rolled one ${counters[3]} times </p>`);
document.write(`<p>Rolled one ${counters[4]} times </p>`);
document.write(`<p>Rolled one ${counters[5]} times </p>`);

console.log(counters);
