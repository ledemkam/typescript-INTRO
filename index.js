"use strict";
//variables
let num2 = 2;
let num3;
let numOstring = "hello";
numOstring = 55;
//Tableaux
let arra = ["chien", "chat", "port"];
let tab = []; // declaration d un tableau vide
let tab1 = [];
let obj = {
    id: 1,
    nom: "Bruno",
};
//les classes
// les fonction
const sayHallo = (name) => {
    console.log(`Hallo ${name}`);
};
sayHallo("from eric");
const agecap = (age, size) => {
    if (size) {
        console.log(`${age} et ${size}`);
    }
    else {
        console.log(`c est pour --${age}`);
    }
};
agecap(23, 123);
// enum et Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MEMBER"] = 1] = "MEMBER";
    Role[Role["PREMIUN"] = 2] = "PREMIUN";
})(Role || (Role = {}));
;
const user1 = {
    name: "Bruno",
    attributes: ["chien", 25],
    role: Role.MEMBER
};
console.log(user1.role);
if (user1.role !== Role.MEMBER) {
    console.log("connexuon speciale");
}
else {
    console.log("non connexuon speciale");
}
