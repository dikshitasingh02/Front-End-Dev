const age: number = 30;
const userName: string = "Alice";
const isActive: boolean = true;

console.log("Age :", age);
console.log("Name", userName);
console.log("Is Active:", isActive);

// Literal Types
type Direction = "up" | "down" | "left" | "right";
const move: Direction = "up"; // valid
// const invalidMove: Direction = "forward"; //error

console.log("Move Directioon:", move); // output: Move Direction: up

// Union Type
type Numeric = number | string;
const id: Numeric = 123;
const idString: Numeric = "ABC123";

console.log("ID (number):", id);
console.log("ID (string):", idString);

// Intersection Type
type HasName = { name: string};
type HasAge = { age: number};
type Person = HasName & HasAge;

const user: Person = { name: "Alice", age: 30};
console.log("User:", user);

// Type Guards & Narrowing 
function printId(id: number | string) {
    if(typeof id === "string"){
        console.log(`ID as String: ${id.toUpperCase()}`);
    } else{
        console.log(`ID as Number: $(id)`);
    }
}

printId(123);
printId("abc123");

//ENUMS
enum Color {
    Red,
    Green,
    Blue,
}
const favorite: Color = Color.Green;
console.log("Favorite Color:", favorite);

// object type

type User = { name: string; age: number};
const user2: User = {name: "Alice", age: 30};

console.log("User:",user);

// Generic type

function identify<T>(value: T): T {
    return value;
}
console.log(identify<string>("Hello"));
console.log(identify<number>(42));