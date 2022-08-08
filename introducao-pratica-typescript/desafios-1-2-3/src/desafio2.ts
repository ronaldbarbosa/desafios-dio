enum Profession {
    'Actress',
    'Baker'
};

interface Person {
    name: string,
    age: number,
    profession: Profession
};

let person1: Person = {
    name: "Maria",
    age: 29,
    profession: Profession.Actress
};

let person2: Person = {
    name: "Roberto",
    age: 19,
    profession: Profession.Baker
};

let person3: Person = {
    name: "Laura",
    age: 32,
    profession: Profession.Actress
};

let person4: Person = {
    name: "Carlos",
    age: 19,
    profession: Profession.Baker
};