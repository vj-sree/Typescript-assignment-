1.variable and types

let userName: string = "sree";
let age: number = 25;
let isStudent: boolean = true;


2.functions and type annotation

function add(a: number, b: number): number {
    return a + b;
}


3.function with optional parameter
function greet(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
}



4.union types
function displayId(id: number | string): void {
    console.log(`ID: ${id}`);
}


5.Arrays and tuples

let numbers: number[] = [10, 20, 30];
let person: [string, number] = ["Alice", 30];

6.Interfaces

interface Person {
    name: string;
    age: number;
    email: string;
}

const user: Person = {
    name: "sree",
    age: 20,
    email: "sree@gmail.com"
};

7.typealias

type Employee = {
    id: number;
    name: string;
    role: "admin" | "manager" | "employee";
};

const employee: Employee = {
    id: 1,
    name: "sree",
    role: "manager"
};

8.enum

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

let favoriteColor: Color = Color.Green;


9.readonly and partial

interface User {
    id: number;
    name: string;
    email: string;
}

const user: Readonly<User> = { id: 1, name: "sree", email: "sree@gmail.com" };



10.classes in typescript

class Car {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    getCarInfo(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Toyota Corolla (2020)














