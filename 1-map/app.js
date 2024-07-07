"use strict";
let arr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];
const uniqueize = (exampleArr) => {
  return new Set(
    exampleArr.map((el) => exampleArr.find((object) => object.id === el.id))
  );
};
console.log(uniqueize(arr));
