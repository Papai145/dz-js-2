"use strict";
function dice(diceNumber) {
  const diceNum = Number(diceNumber.slice(1));
  const letter = diceNumber[0];

  if (letter !== "d" || diceNum < 4 || diceNum > 20 || diceNum % 2 !== 0) {
    console.log("неверный формат");
    return false;
  }
  const num = Math.random();
  return Math.floor(num * diceNum + 1);
}
dice("d10");
