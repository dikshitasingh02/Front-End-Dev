// const age: number = 30;
// const userName: string = "Alice";
// const isActive: boolean = true;

// console.log("Age :", age);
// console.log("Name", userName);
// console.log("Is Active:", isActive);

// // Literal Types
// type Direction = "up" | "down" | "left" | "right";
// const move: Direction = "up"; // valid
// // const invalidMove: Direction = "forward"; //error

// console.log("Move Directioon:", move); // output: Move Direction: up

// // Union Type
// type Numeric = number | string;
// const id: Numeric = 123;
// const idString: Numeric = "ABC123";

// console.log("ID (number):", id);
// console.log("ID (string):", idString);

// // Intersection Type
// type HasName = { name: string};
// type HasAge = { age: number};
// type Person = HasName & HasAge;

// const user: Person = { name: "Alice", age: 30};
// console.log("User:", user);

// // Type Guards & Narrowing 
// function printId(id: number | string) {
//     if(typeof id === "string"){
//         console.log(`ID as String: ${id.toUpperCase()}`);
//     } else{
//         console.log(`ID as Number: $(id)`);
//     }
// }

// printId(123);
// printId("abc123");

// //ENUMS
// enum Color {
//     Red,
//     Green,
//     Blue,
// }
// const favorite: Color = Color.Green;
// console.log("Favorite Color:", favorite);

// // object type

// type User = { name: string; age: number};
// const user2: User = {name: "Alice", age: 30};

// console.log("User:",user);

// // Generic type

// function identify<T>(value: T): T {
//     return value;
// }
// console.log(identify<string>("Hello"));
// console.log(identify<number>(42));

// Functions

// basic function
// function add(a: number, b: number): number {
//     return a + b;
// }

// // arrow function
// const multiply = (a: number, b: number): number => a*b;

// // default parameter
// const greetings = (name: string, salutation: string = "Hello"): string => {
//     return `${salutation}, ${name}`;
// }
// console.log(greetings("Dikshita"));

// High order function stack
// const processNumbers = (
//     numbers: number[],
//     callBack: (num: number) => number
// ): number[] => {
//     return numbers.map(callBack);
// };

// const doubled = processNumbers([1, 2, 3], (num) => num * 2);
// console.log(doubled);

// Classes

class Person {
    constructor(public name: string, public age: number) {}

    introduce = (): string => {
        return `hi, I'm ${this.name} and I'm ${this.age} years old...`;
    };
}
const p1 = new Person("John",25);
console.log(p1.introduce());

class BankAccount {
    private balance: number;

    constructor(initialBalance: number){
        this.balance = initialBalance;
    }

    deposit = (amt: number): void => {
        this.balance += amt;
    }

    getBalance = (): number => {
        return this.balance;
    }
}
const account = new BankAccount(10000);
account.deposit(5000);
console.log(account.getBalance());

class MathUnits {
    static PI = 3.14159;

    static calculateCircumference = (radius: number): number => {
        return 2 + MathUnits.PI * radius;
    };
}
console.log(MathUnits.PI);
console.log(MathUnits.calculateCircumference(5));

/* 
    use cases - stateless operations
    syntax - Procedural
    
    use case - Statefull Objects
    syntax - Object oriented
*/