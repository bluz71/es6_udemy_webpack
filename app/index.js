// import { add, multiply } from "./calculator";
// console.log(add(1, 2));
// console.log(multiply(3, 2));

import Entity from "./entity";

class Hiker extends Entity {
  constructor(name, height) {
    super(name, height);
  }

  greet() {
    console.log(`Hello I'm ${this.name} from the mountains.`);
  }
}

let fred = new Hiker("Fred", 5.10);
fred.greet();
