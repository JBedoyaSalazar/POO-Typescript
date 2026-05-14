class Animal {
    constructor(
        public name: string
    ) { }

    move() {
        console.log('Moving Along')
    }

    greeting(): string {
        return `Hello, I'm ${this.name}`
    }
}

class Dog extends Animal {

    constructor(
        name: string,
        public owner: string
    ) {
        super(name);
    }

    override greeting(): string {
        return `Woof! I'm ${this.owner} and I live with ${this.name}`
    }
}


const animal = new Animal('John');
const dog = new Dog('Polo', 'Rex');

console.log(animal.greeting());
console.log(dog.greeting());
