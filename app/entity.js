class Entity {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  greet() {
    console.log(`Hi I am ${this.name} from Middle Earth.`);
  }
}

export default Entity;
