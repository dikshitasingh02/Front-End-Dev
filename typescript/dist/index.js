"use strict";
// const age: number = 30;
// const userName: string = "Alice";
// const isActive: boolean = true;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
// class Person {
//     constructor(public name: string, public age: number) {}
//     introduce = (): string => {
//         return `hi, I'm ${this.name} and I'm ${this.age} years old...`;
//     };
// }
// const p1 = new Person("John",25);
// console.log(p1.introduce());
// class BankAccount {
//     private balance: number;
//     constructor(initialBalance: number){
//         this.balance = initialBalance;
//     }
//     deposit = (amt: number): void => {
//         this.balance += amt;
//     }
//     getBalance = (): number => {
//         return this.balance;
//     }
// }
// const account = new BankAccount(10000);
// account.deposit(5000);
// console.log(account.getBalance());
// class MathUnits {
//     static PI = 3.14159;
//     static calculateCircumference = (radius: number): number => {
//         return 2 + MathUnits.PI * radius;
//     };
// }
// console.log(MathUnits.PI);
// console.log(MathUnits.calculateCircumference(5));
/*
    use cases - stateless operations
    syntax - Procedural
    
    use case - Statefull Objects
    syntax - Object oriented
*/
// import {addition, subtraction} from "@modules/math";
// import Calculator from "./modules/calculator";
// console.log("Addition : ",addition(5, 5));
// console.log("Subtraction : ",subtraction(5, 5));
// const calc = new Calculator();
// console.log("Addition : ", calc.add(5, 5));
// import { User, Admin, ProductDictionary } from "types";
// const user1: User = {
//     id: "10001",
//     firstname: "John",
//     lastname: "Smith",
//     email: "john@gmail.com",
//     contact: "23456789",
//     address: {
//         city: "",
//         state: "",
//         zipcode: "",
//     },
// };
// const admin: Admin = {
//     id: "1001",
//     firstname: "John",
//     lastname: "Smith",
//     email: "john@gmail.com",
//     contact: "23456789",
//     role: "Admin",
//     address: {
//         city: "",
//         state: "",
//         zipcode: "",
//     },
// }
// const stationary: ProductDictionary = {
//     id: "P001",
//     name: "Pencil",
// };
// console.log("User : ",admin);
// console.log("Product: ", stationary);
//Types of Enums
// numeric Enums
// enum Direction {
//     North, // 0
//     East,  // 1
//     South, // 2
//     West,  // 3
// }
// // string enums
// enum StringDirections {
//     North = "North",
//     East = "East",
//     South = "South",
//     West = "West",
// }
// console.log(StringDirections.North);
// // hetrogeneous enums
// enum Status {
//     Success = 1,
//     Failure = "FAIL"
// }
// console.log(Status.Success, Status.Failure);
// enum Role
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
// Decorators to restrict access
const Authorize = (allowedRoles) => (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args) => {
        const userRole = args[0]; // assuming the first argument is user role
        if (allowedRoles.includes(userRole)) {
            console.log(`Access granted to ${userRole}`);
            return originalMethod.apply(target, args);
        }
        else {
            throw new Error(`Access denied for the role : ${userRole}`);
        }
    };
};
// service class
class DashboardService {
    viewDashboard(userRole) {
        console.log("Viewing Dashboard...");
    }
    ;
    editSettings(userRole) {
        console.log("Editing Settings...");
    }
    ;
}
__decorate([
    Authorize([Role.Admin, Role.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DashboardService.prototype, "viewDashboard", null);
__decorate([
    Authorize([Role.Admin]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DashboardService.prototype, "editSettings", null);
// simulate the role based access 
const service = new DashboardService();
try {
    service.viewDashboard(Role.User);
    service.editSettings(Role.Guest);
}
catch (error) {
    console.log(error === null || error === void 0 ? void 0 : error.message);
}
