class Car {
  #make;
  #model;
  #run;
  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.#run = run;
  }
  set run(run) {
    this.#run = run;
  }
  get run() {
    return this.#run;
  }
  info() {
    console.log(
      `Автомобиль марки ${this.#make} модель:${this.#model} спробегом:${
        this.#run
      }`
    );
  }
}
const lada = new Car("лада", "четырнадцатая", "70000");
lada.run = 90000;
console.log(lada);
