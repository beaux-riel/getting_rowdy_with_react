// Copy
// const person = {
//     name: "Max"
// };

// const secondPerson = person;

// person.name = "Manu";

// console.log(secondPerson);


// Reference
const person = {
    name: "Max"
};

const secondPerson = {
    ...person
};

person.name = "Manu";

console.log(secondPerson);