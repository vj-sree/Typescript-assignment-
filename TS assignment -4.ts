//EX 1
abstract class Shape {
    constructor(protected color: string) {}

    abstract calculateArea(): number;

    getColor(): string {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}
const circle = new Circle("Red", 5);
console.log(circle.getColor(), circle.calculateArea());

const rectangle = new Rectangle("Blue", 4, 6);
console.log(rectangle.getColor(), rectangle.calculateArea());


//EX 2 


abstract class Shape {
    constructor(protected color: string) {}

    abstract calculateArea(): number;

    getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}
const circle = new Circle("Red", 5);
console.log(circle.getColor(), circle.calculateArea());

const rectangle = new Rectangle("Blue", 4, 6);
console.log(rectangle.getColor(), rectangle.calculateArea());



//EX-3:
// Interface Vehicle
interface Vehicle {
    speed: number;
    move(): void;
}
class Car implements Vehicle {
    constructor(public speed: number) {}

    move(): void {
        console.log(`Car is moving at ${this.speed} km/h`);
    }
}
class Bicycle implements Vehicle {
    constructor(public speed: number) {}

    move(): void {
        console.log(`Bicycle is moving at ${this.speed} km/h`);
    }
}
const car = new Car(80);
car.move();

const bicycle = new Bicycle(20);
bicycle.move();

//EX:4

interface Person {
    name: string;
    speak(): void;
}
interface Employee extends Person {
    salary: number;
    work(): void;
}
class Developer implements Employee {
    constructor(public name: string, public salary: number) {}

    speak(): void {
        console.log(`${this.name} is speaking.`);
    }

    work(): void {
        console.log(`${this.name} is working.`);
    }
}
const dev = new Developer("Alice", 50000);
dev.speak();
dev.work();
