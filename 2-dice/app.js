"use strict";
function dice(diceNumber) {
  const diceNum = Number(diceNumber.slice(1));
  const num = Math.random();
  return Math.floor(num * diceNum + 1);
}
dice("d10");
