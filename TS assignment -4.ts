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


ADVANCED EXAMPLES:-

EX-1:

abstract class BankAccount {
    protected balance: number;

    constructor(protected accountNumber: number, balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    abstract withdraw(amount: number): boolean;

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private withdrawalLimit: number = 5000;

    withdraw(amount: number): boolean {
        if (amount > this.withdrawalLimit) {
            console.log("Withdrawal amount exceeds limit.");
            return false;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return false;
        }
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        return true;
    }
}

// CheckingAccount with overdraft limit
class CheckingAccount extends BankAccount {
    private overdraftLimit: number = 1000;

    withdraw(amount: number): boolean {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Overdraft limit exceeded.");
            return false;
        }
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        return true;
    }
}
const savings = new SavingsAccount(101, 10000);
savings.deposit(2000);
savings.withdraw(6000); 
savings.withdraw(3000); 

const checking = new CheckingAccount(102, 2000);
checking.withdraw(2500); 
checking.withdraw(1000);

EX-2:
// Interface PaymentMethod
interface PaymentMethod {
    pay(amount: number): void;
    refund(amount: number): void;
}

// CreditCard class
class CreditCard implements PaymentMethod {
    constructor(private balance: number) {}

    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }

    refund(amount: number): void {
        console.log(`Refunded ${amount} to Credit Card.`);
    }
}

// DebitCard class
class DebitCard implements PaymentMethod {
    constructor(private balance: number) {}

    pay(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= amount;
        console.log(`Paid ${amount} using Debit Card.`);
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to Debit Card.`);
    }
}

// UPI class
class UPI implements PaymentMethod {
    constructor(private balance: number) {}

    pay(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= amount;
        console.log(`Paid ${amount} using UPI.`);
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to UPI.`);
    }
}

// Testing
const creditCard = new CreditCard(10000);
creditCard.pay(3000);
creditCard.refund(1000);

const debitCard = new DebitCard(5000);
debitCard.pay(2000);
debitCard.refund(500);

const upi = new UPI(7000);
upi.pay(4000);
upi.refund(2000);


EX-3:
abstract class PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount}.`);
    }

    processRefund(amount: number): void {
        console.log(`Processing refund of ${amount}.`);
    }

    abstract validateTransaction(transactionId: string): boolean;
}


interface SecurePayment {
    authenticateUser(userId: string): boolean;
}


class PayPal extends PaymentGateway implements SecurePayment {
    authenticateUser(userId: string): boolean {
        console.log(`Authenticating user: ${userId}`);
        return true; 
    }

    validateTransaction(transactionId: string): boolean {
        console.log(`Validating transaction: ${transactionId}`);
        return true; 
    }
}


const paypal = new PayPal();
paypal.authenticateUser("user123");
paypal.processPayment(500);
paypal.validateTransaction("txn789");
paypal.processRefund(200);

EX-4:


interface Loan {
    applyForLoan(amount: number): void;
}

interface Insurance {
    applyForInsurance(policy: string): void;
}

class Customer implements Loan, Insurance {
    private loanAmount: number = 0;
    private insurancePolicy: string = "";

    applyForLoan(amount: number): void {
        this.loanAmount = amount;
        console.log(`Loan of ${amount} applied successfully.`);
    }

    applyForInsurance(policy: string): void {
        this.insurancePolicy = policy;
        console.log(`Insurance policy '${policy}' applied successfully.`);
    }

    getDetails(): void {
        console.log(`Loan Amount: ${this.loanAmount}, Insurance Policy: ${this.insurancePolicy}`);
    }
}
const customer = new Customer();
customer.applyForLoan(50000);
customer.applyForInsurance("Health Insurance");
customer.getDetails();
