"use strict";
var Profession;
(function (Profession) {
    Profession[Profession["Actress"] = 0] = "Actress";
    Profession[Profession["Baker"] = 1] = "Baker";
})(Profession || (Profession = {}));
;
;
let person1 = {
    name: "Maria",
    age: 29,
    profession: Profession.Actress
};
let person2 = {
    name: "Roberto",
    age: 19,
    profession: Profession.Baker
};
let person3 = {
    name: "Laura",
    age: 32,
    profession: Profession.Actress
};
let person4 = {
    name: "Carlos",
    age: 19,
    profession: Profession.Baker
};
