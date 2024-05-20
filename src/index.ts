import { log } from "console";
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// src/index.ts
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet('World'));

let Hello = 'world';

/*

For Dynamic type - Objects and Array 
*/

const user = {
  username:'sarfaraz',
  id: 9900
}

interface User{
  name:string,
  id:number
}


const user2:User = {
  // username:"mohib", error - only name key(attribute will use)
  name:"mohib",
  id:9901
}

console.log(user2);

/*
Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:
*/

class UserAccount{
  name:string;
  id:number;

  constructor(name:string, id:number){
      this.name = name;
      this.id = id;
  }
}

const user3: User = new UserAccount('Murphy', 9002);
console.log(user3);

/*
You can use interfaces to annotate parameters and return values to functions:
*/ 


// parameter type must be user
function deleteUser(user: User){

}

function getAdminUser(): User { 
  
  // return type must be user
  return {
    name:"Aasif",
    id: 1000
  }
}

// if we want no return type we have to use void

function setAdminUser():void{

}

// composite type

type myBool = true | false;

type windowStates = 'open' | 'close' | 'minimized';
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let crome:windowStates = 'close'; 
log(typeof crome);

function getLength(obj:string | string[]){
  return obj.length;
}

// string or Array of strings - string[]
function wrapInArray(obj:string|string[]){

  if(typeof obj === 'string'){
      return [obj];
    }

  return obj;
}

/*
========================================= Generics ====================================
Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
*/ 

type stringArray = Array<String>
type stringNumber = Array<Number>
type ObjectWithNameArray = Array<{name:string}>

// You can declare your own types that use generics:

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}


// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare let backpack: Backpack<string>;

// Since the backpack variable is a string, you can't pass a number to the add function.

// backpack.add('23');


// object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.get();


// ==================== Structural Type System or Duck Typing =====================
/*
One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are considered to be of the same type.

Duck typing is a concept used in dynamic programming languages, where an object's suitability is determined by the presence of certain methods and properties, rather than the object's actual type. The term comes from the saying, "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."

In TypeScript, which is a statically typed language, duck typing is implemented through structural typing. Structural typing means that the compatibility between types is determined by their structure (i.e., the properties they contain and their types), rather than by their explicit type annotations.





Duck typing is a concept used in dynamic programming languages, where an object's suitability is determined by the presence of certain methods and properties, rather than the object's actual type. The term comes from the saying, "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."

In TypeScript, which is a statically typed language, duck typing is implemented through structural typing. Structural typing means that the compatibility between types is determined by their structure (i.e., the properties they contain and their types), rather than by their explicit type annotations.

How Duck Typing (Structural Typing) Works in TypeScript
In TypeScript, if two types have the same shape, they are considered to be compatible. This allows you to assign objects to variables of different types as long as they have the required structure.

Example of Duck Typing in TypeScript
Consider the following example:

typescript
Copy code
interface Duck {
  quack(): void;
}

class Mallard {
  quack() {
    console.log("Quack!");
  }
}

class Person {
  quack() {
    console.log("I can quack like a duck!");
  }
}

function makeItQuack(duck: Duck) {
  duck.quack();
}

const mallard = new Mallard();
const person = new Person();

makeItQuack(mallard); // Quack!
makeItQuack(person);  // I can quack like a duck!
In this example:

The Duck interface defines a single method quack.
Both Mallard and Person classes implement the quack method.
The makeItQuack function expects an argument of type Duck.
Even though Mallard and Person are not explicitly declared to implement the Duck interface, TypeScript allows them to be passed to makeItQuack because they both have the required quack method. This is an example of duck typing: as long as an object "quacks like a duck," it can be used where a Duck is expected.

Benefits of Duck Typing in TypeScript
- Flexibility: It allows you to write more flexible and reusable code. Any object that meets the structural requirements can be used, regardless of its specific type.
- Interoperability: It can make integrating with existing codebases or third-party libraries easier, as you don't need to strictly adhere to predefined types as long as the structures match.
- Reduced Boilerplate: You don't need to explicitly implement interfaces or extend base classes, which reduces the amount of boilerplate code.

Limitations
- Less Explicit Contracts: Duck typing relies on the structure rather than explicit contracts, which can sometimes make the code less clear and harder to understand.
- Potential for Errors: Since TypeScript checks structure at compile time, but actual behavior is determined at runtime, there's a potential for runtime errors if the objects do not behave as expected.
*/

interface Point{
  x:number;
  y:number;
}

function logPoint(p:Point){
  console.log(`${p.x},${p.y}`);
}

const point2D = {x:12, y:22}
logPoint(point2D);

/*
The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object’s fields to match.
*/

const point3D = {
  x:22,
  y:89,
  z:99
}
logPoint(point3D); // only 22 and 89

const rectangle = {
  x:9,
  y:4,
  width:5,
  height:3
}

logPoint(rectangle); // 9 and 4

const color = { hex: "#187ABF" };
// logPoint(color);  // TSError: ⨯ Unable to compile TypeScript
// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y


// There is no difference between how classes and objects conform to shapes:

class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"