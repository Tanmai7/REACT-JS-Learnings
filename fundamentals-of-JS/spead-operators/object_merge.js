let person = { name: "Tanmai", age: 20 };
let address = { city: "Vijayawada", country: "India" };

let Info = { ...person, ...address };
console.log(Info.country);
console.log(Info); 


//In functions
// function sum(a, b, c) {
//     return a + b + c;
// }

// let numbers = [1, 2, 3];

// console.log(sum(...numbers)); // Output: 6

