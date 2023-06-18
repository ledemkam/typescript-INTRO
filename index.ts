//variables
let num2 : number = 2;
let num3: string

let numOstring : number | string = "hello"
numOstring = 55

//Tableaux
let arra = ["chien","chat","port"];
let tab : string[] = []// declaration d un tableau vide
let tab1: (number | boolean)[] =  [] 

//Objets

interface Player {
    id: number;
    nom: string;
    age?: number;
}

let obj : Player = {
    id: 1,
    nom : "Bruno",
}

//les classes
// les fonction

const sayHallo = (name : string) => {
    console.log(`Hallo ${name}`);
}

sayHallo("from eric")

const agecap = (age: string | number, size?:number): void => {
  if(size){
    console.log(`${age} et ${size}`);
  }else{
    console.log( `c est pour --${age}`);
  }
}
agecap(23, 123)


// enum et Tuple

enum Role {ADMIN, MEMBER, PREMIUN};

interface User {
    name: string;
    attributes : [string | boolean, number],
    role: Role
}
const user1: User = {
    name: "Bruno",
    attributes: [ "chien", 25 ],
    role: Role.MEMBER
}
console.log(user1.role)

if(user1.role !== Role.MEMBER){
    console.log("connexuon speciale")
}else{
    console.log("non connexuon speciale")
}



