"use strict";
// const age: number = 30;
// const userName: string = "Alice";
// const isActive: boolean = true;
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: "10001",
    firstname: "John",
    lastname: "Smith",
    email: "john@gmail.com",
    contact: "23456789",
    address: {
        city: "",
        state: "",
        zipcode: "",
    },
};
const admin = {
    id: "1001",
    firstname: "John",
    lastname: "Smith",
    email: "john@gmail.com",
    contact: "23456789",
    role: "Admin",
    address: {
        city: "",
        state: "",
        zipcode: "",
    },
};
const stationary = {
    id: "P001",
    name: "Pencil",
};
console.log("User : ", admin);
console.log("Product: ", stationary);
