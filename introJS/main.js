// Low level
/*
const myName = "Diego";
const myLastName = "Vallejo";
console.log(myName + " " + myLastName);

const myAge = 31;
const myPet = "Donna";
const myPetAge = 6;
const fullName = myName + " " + myLastName;
console.log(fullName);

const presentationText = `Hello my name is ${fullName} I´m ${myAge} years old, here with me is ${myPet} my cat, she is ${myPetAge} years old.`;
console.log(presentationText);
*/

// Medium level
/*
let sumAges = myAge + myPetAge;
console.log("sum: " + sumAges);
let substractAges = myAge - myPetAge;
console.log("substract: " + substractAges);
let productAges = myAge * myPetAge;
console.log("product: " + productAges);
let divisionAges = myAge / myPetAge;
console.log("division: " + divisionAges);

let student = {
  age: 31,
  name: "Diego",
  surename: "Vallejo",
  studies: "programación web",
  hasPC: true,
};
console.table(student);
console.log("tiene pc " + student.hasPC);

let pet = {
  name: "Donna",
  furrColor: "white",
  hasCollar: true,
  age: 6,
  favoriteFood: "cat chow",
};
console.table(pet);
console.log("comida favorita " + pet.favoriteFood);
*/
let fruits = ["manzana", "pera", "banana", "lima", "cereza"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

// High level
/*
let age = prompt("How old are you?");
console.log(`I´m an Adult? ${age >= 18}`);
if (age >= 18) {
  let iAmAdult = age;
  console.log("I am an Adult, I´m " + iAmAdult);
}
*/

let numbers = [23, 34, 45, 56, 67, 78];
console.log(
  numbers[0] +
    " " +
    numbers[1] +
    " " +
    numbers[2] +
    " " +
    numbers[3] +
    " " +
    numbers[4] +
    " " +
    numbers[5]
);

let father = {
  name: "Juan",
  surname: "Juanes",
  age: 50,
  work: "astronaut",
  favoriteFood: "asado",
};
let mother = {
  name: "Joana",
  surname: "Joans",
  age: 45,
  work: "spy",
  favoriteFood: "pizza",
};
let firstSon = {
  name: "Jeremy",
  surname: "Juanes Joans",
  age: 25,
  work: "student",
  favoriteFood: "sushi",
};
let secondSon = {
  name: "Jorge",
  surname: "Juanes Joans",
  age: "20",
  work: "student",
  favoriteFood: "hamburger",
};
let thirdSon = {
  name: "Jaime",
  surname: "Juanes Joans",
  age: "19",
  work: "pro gamer",
  favoriteFood: "",
};
let family = [father, mother, firstSon, secondSon, thirdSon];

console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);

let randomText = `Hey, do you know why there are ${fruits[1]} on the floor, there are ${numbers[3]}, it was ${family[4].name} idea ?`;
console.log(randomText);
