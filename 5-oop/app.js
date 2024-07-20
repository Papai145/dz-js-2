"use strict";
const characters = function (race, name, lang) {
  this.character;
};
characters.prototype.addCharacter = function (character) {
  this.character = character;
};
characters.prototype.speak = function () {
  console.log(
    `персонаж является ${this.character.race} его завут ${this.character.name}  говорит на языке ${this.character.race}`
  );
};
// ОРКИ
const mordor = { race: "orс", name: "rat", lang: "orcish" };
const orc = new characters();
orc.addCharacter(mordor);
orc.weapon = this.weapon = "тапор";
orc.hit = function () {
  if (!this.weapon) {
    console.log("у орка нет оружия");
    return;
  }
  console.log(`вас ударил ${this.weapon}`);
};
//ЭЛЬФЫ
const rivendell = { race: "elf", name: "legolas", lang: "elven" };
const elf = new characters();
elf.spells = [];
elf.addSpells = function (charm) {
  if (this.spells.find((spel) => spel === charm)) {
    return;
  }
  this.spells.push(charm);
};
elf.useSpell = function (spel) {
  const result = this.spells.find((el) => el === spel);
  if (!result) {
    console.log("данного заклинания нет");
    return;
  }
  console.log(`на вас наложили заклинание ${result}`);
};
elf.addCharacter(rivendell);
elf.addSpells("enchantment");
console.log(elf);
