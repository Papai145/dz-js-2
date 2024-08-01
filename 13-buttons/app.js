const parent = document.querySelector(".container");
const count = document.getElementById("count");

parent.addEventListener("click", function (e) {
  for (element of parent.children) {
    if (element.id == e.target.id) {
      element.innerText = "Нажата";
      count.innerText = Number(count.textContent) + 1;
      continue;
    }
    element.innerText = "Нажми меня";
  }
});
