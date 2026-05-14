export abstract class Animal {
    constructor(
        protected name: string
    ) { }

    move() {
        console.log('Moving Along')
    }

    greeting(): string {
        return `Hello, I'm ${this.name}`
    }

    protected doSomething() {
        console.log('Doing something')
    }
}

export class Dog extends Animal {

    constructor(
        name: string,
        public owner: string
    ) {
        super(name);
    }

    override greeting(): string {
        return `Woof! I'm ${this.owner} and I live with ${this.name}`
    }

    override doSomething() {
        super.doSomething()
    }

    override move(){
        console.log('Moving as a dog')
    }
}

const dog = new Dog('Polo', 'Rex');

dog.doSomething()
