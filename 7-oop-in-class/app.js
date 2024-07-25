"use strict";
class characters {
  race;
  constructor(race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
  }
  #speak() {
    return `персонаж является ${this.race} его завут ${this.name}  говорит на языке ${this.race}`;
  }
  get speak() {
    console.log(this.#speak());
  }
}
class rivendell extends characters {
  spells = [];
  constructor(race, name, lang, charm) {
    super(race, name, lang);
    this.spells.push(charm);
  }
  #speak() {
    return "Говорит на эльфийском языке  ";
  }
  get speak() {
    console.log(this.#speak());
  }
  addSpells(charm) {
    if (this.spells.find((spel) => spel === charm)) {
      console.log("такое заклинание есть");
      return;
    }
    this.spells.push(charm);
  }
  useSpaell(spel) {
    const result = this.spells.find((el) => el === spel);
    if (!result) {
      console.log("данного заклинания нет");
      return;
    }
    console.log(`на вас наложили заклинание ${result}`);
  }
}

class mordor extends characters {
  constructor(race, name, lang, weapon) {
    super(race, name, lang);
    this.weapon = weapon;
  }
  hit() {
    if (!this.weapon) {
      console.log("у орка нет оружия");
      return;
    }
    console.log(`вас ударил ${this.weapon}`);
  }
  #speak() {
    return "Говорит на языке орков ";
  }
  get speak() {
    console.log(this.#speak());
  }
}
const jek = new characters("orc", "rat", "orcish");
jek.speak;
