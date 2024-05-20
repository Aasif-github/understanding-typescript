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

}