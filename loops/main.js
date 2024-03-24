//!Low level

//1
/*
let condition = parseInt(prompt("Enter a number between 1-100"));
if (condition > 0 && condition < 101 && condition != NaN)
  for (let i = condition; i >= 0; i--) {
    console.log(i);
  }
else {
  alert("Enter a number! please <3 ");
}
*/
//2
/*
let number = parseInt(prompt("Enter a number between 1 and 10"));
if (number > 0 && number < 11 ) {
  for (let i = 1; i < 11; i++) {
    let result = i * number;
    console.log(`${i}X${number}=${result}`);
  }
} else {
  alert("Enter a number! please <3 ");
}
*/
//3
/*
let number = parseInt(prompt("Enter a number"));
let contador = 0;

  while (number != 0 && (number>0||number<0)) {
    contador += number;

    number = parseInt(prompt("Enter a number "));
  }
 if (number == 0) {
  console.log(contador);
}else{
    alert("Enter a number! please <3 ");
}
*/

//4
/*
let number = 0;
let contador = 0;
do {
  number = parseInt(prompt("Enter a number"));
  contador += number;
} while (number != 0);

console.log(contador);
*/
//5
/*
let persona = {
  name: "arturo",
  lastName: "vivaldi",
  origin: "viena",
  studies: "programador",
};
for (const key in persona) {
  if (Object.hasOwnProperty.call(persona, key)) {
    console.log(key);
  }
}
*/
//6
/*
let persona = {
  name: "arturo",
  lastName: "vivaldi",
  origin: "viena",
  studies: "programador",
};
for (const key in persona) {
  if (Object.hasOwnProperty.call(persona, key)) {
    console.log(persona[key]);
  }
}
*/

//! Level Medium

//1
/*
let theSecretNumber = parseInt(prompt('Enter a "Secret number"'));
let number;
let contador = 0;

do {
  number = parseInt(prompt("Enter a number"));
  contador++;
  if (number > theSecretNumber) {
    alert("go lower!");
  } else if (number < theSecretNumber) {
    alert("go upper!");
  }
} while (number != theSecretNumber);

alert(`You did it!! Congrats!! it was ${theSecretNumber} and you made ${contador} attemps`);
*/
//2
/*
let number = prompt("Enter number");
for (let i = 0; i < number + 1; i++) {
  if(number%i == 0){
    console.log("divisors: "+i)
  }
}
*/
//3
/*
function RingBell(number) {
  let sound = [];
  for (let i = 0; i < number; i++) {
    sound.push("Ding Dong");
  }
  console.log(sound.join(","));
}
RingBell(prompt("Enter number!"));
*/
//4
/*
const dateLimit = "1997-8-3";

const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];
for (let i = 0; i < dates.length; i++) {
  if (dates[i] >= dateLimit) {
    console.log(dates[i]);
  }
}
*/
//5
/*
let colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];
for (const i of colors) {
  console.log(i);
}
*/
//6
/*
function colorList() {
  let colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];
  for (const i of colors) {
    console.log(i);
  }
}
colorList();
*/
//7
/*
let numbers = [1, 2, 3, 4, 5];
for (const i of numbers) {
  console.log(
    `the number is ${numbers[i - 1]} and its double is ${numbers[i - 1] * 2}`
  );
}
*/
//8
/*
let father={
  name:"Steve",
  lastName:"Richard",
  age:60,
  member:"father",
}
let mother={
  name:"Sarah",
  lastName:"Connor",
  age:58,
  member:"mother",
}
let daughter={
  name:"Lara",
  lastName:"Richard Connor",
  age:30,
  member:"daughter",
}
let son={
  name:"Boris",
  lastName:"Richard Connor",
  age:19,
  member:"son",
}
let family = [father,mother,daughter,son];
for (const i of family) {
  console.log(`Hello, I am ${i.name} (${i.member}) and I am ${i.age} years old.`)
}
*/

//! High level
/*
//1
let numbers;
let odd = 0;
let even = 0;
do {
  numbers = parseInt(prompt("Enter numbers!"));
  if (numbers % 2 == 0) {
    even += numbers;
  } else {
    odd += numbers;
  }
} while (numbers != 0&&(numbers>0||numbers<0));

console.log("Odd number: " + odd);
console.log("Even number: " + even);
*/
//2
/*
let numbers = [-1, -2, -3, 4, -50, 6, -7, -8, 5, -11];
let giant;
for (let i = 0; i < numbers.length; i++) {
  if (i == 0) {
    giant = numbers[i];
  } else if (numbers[i] > giant) {
    giant = numbers[i];
  }
}
console.log(giant);
*/
