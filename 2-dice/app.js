"use strict";
function dice(diceNumber) {
  const diceValues = {
    d2: 2,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
  };

  if (!diceValues[diceNumber]) {
    console.log("неверный формат");
    return false;
  }
  const num = Math.random();
  return Math.floor(num * diceValues[diceNumber] + 1);
}
console.log(dice("d21"));
