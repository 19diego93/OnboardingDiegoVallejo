// low
// 1/2
/*
let num1 = 4;
let num2 = 5;

if (num1 > num2) {
  console.log(num1 + " es mas grande");
} else if (num1 < num2) {
  console.log(num2 + " es mas grande");
} else {
  console.log(num1 + " y " + num2 + " son iguales.");
}
*/

// 3
/*
if (num1 == num2) {
  console.log("The numbers are equal");
} else {
  console.log("The numbers are different");
}
*/
//4/5
// let date1 = "2018-9-2";
// let date2 = "2023-7-5";
/*
let date1 = "2-2-2023";
let date2 = "2020-1-4";
//se debe mantener un formato para poder comparar las strings, sino se debe usar date() para tener formato de fecha
if (date1 > date2) {
  console.log(`The date ${date1} is grater than ${date2}`);
} else if (date1 < date2) {
  console.log(`The date ${date2} is grater than ${date1}`);
} else {
  console.log("The dates are the same!");
}
*/

//6
/*
let number1 = 5;
let number2 = 7;
let number3 = 9;
if (number1 > number2) {
  if (number1 > number3) {
    console.log(`The number ${number1} is the largest.`);
  } else {
    console.log(`The number ${number3} is the largest.`);
  }
} else if (number2 > number3) {
  console.log(`The number ${number2} is the largest.`);
} else {
  console.log(`The number ${number3} is the largest.`);
}
*/
//Medium level

//1
// let color = prompt("Type a color!");
//funciona dentro del switch!
/*
switch (prompt("Type a color!")) {
  case "red":
    console.log("The color of passion");
    break;
  case "blue":
    console.log("The color of the sea.");
    break;
  case "green":
    console.log("The color of nature");
    break;
  default:
    console.log("Try another color");
}
*/
//2
/*
let firstNumber = parseInt(prompt("number1 must be 0-100"));
let secondNumber = parseInt(prompt("number2 must be 0-100"));
let operation = prompt("operation(addition-substraction-multiplication-division)");
if (
  firstNumber > 100 ||
  firstNumber < 0 ||
  secondNumber > 100 ||
  secondNumber < 0
) {
  console.log("Try numbers between 0-100");
} else {
  switch (operation) {
    case "addition":
      console.log(firstNumber + secondNumber);
      break;
    case "substraction":
      console.log(firstNumber - secondNumber);
      break;
    case "multiplication":
      console.log(firstNumber * secondNumber);
      break;
    case "division":
      console.log(firstNumber / secondNumber);
      break;
    default:
      console.log("try another operation");
  }
}
*/

//3
/*
let person1 = {
  name: "Aang",
  age: 112,
  height: 1.5,
};
let person2 = {
  name: "Juan",
  age: 39,
  height: 1.69,
};
person1.name = prompt("person 1 name");
person1.age = prompt("person 1 age");
person1.height = parseFloat(prompt("person 1 height"));
person2.name = prompt("person 2 name");
person2.age = prompt("person 2 age");
person2.height = parseFloat(prompt("person 2 height"));
if (person1.height > person2.height) {
  console.log(`${person1.name} is taller than ${person2.name}`);
} else if (person1.height < person2.height) {
  console.log(`${person2.name} is taller than ${person1.name}`);
} else {
  console.log(`${person2.name} and ${person1.name} have the same height.`);
}
if (person1.age > person2.age) {
  console.log(`${person1.name} is older than ${person2.name}`);
} else if (person1.age < person2.age) {
  console.log(`${person2.name} is older than ${person1.name}`);
} else {
  console.log(`${person2.name} and ${person1.name} have the same age`);
}
*/

//4
/*
let person = {
  name: "",
  age: 0,
  height: 0,
  vision: 0,
};
person.name = prompt("Name: ");

person.age = parseInt(prompt("Age: "));
if (person.age >= 18) {
  person.height = parseInt(prompt("Height in cm: "));
  if (person.height > 110) {
    person.vision = parseInt(prompt("Vision: "));
    if (person.vision >= 8 && person.vision <= 10) {
      console.log("You are qualified to drive");
    } else {
      console.log("You not are qualified to drive");
    }
  } else {
    console.log("You not are qualified to drive");
  }
} else {
  console.log("You not are qualified to drive");
}
*/

//5
/*
let age = parseInt(prompt("how old are you? .."));
if (age >= 0 && age <= 12) {
  alert("infant");
} else if (age > 12 && age <= 18) {
  alert("adolescent");
} else if (age >= 19 && age <= 45) {
  alert("older young");
} else if (age >= 46 && age <= 100) {
  alert("elderly");
} else if(age >100){
  alert("is he really taht old? " + age);
}else{alert("enter your real age!")}
*/

//6
/*
let number = prompt("enter 1 to 3 numbers: ");
if (number < 1000 && number > -1000) {
  if (number[0] == "-") {
    alert("the first number is " + number[1]);
    alert("the second number is " + number[2]);
    alert("the third number is " + number[3]);
  } else {
    alert("the first number is " + number[0]);
    alert("the second number is " + number[1]);
    alert("the third number is " + number[2]);
  }
} else if (number > 1000 || number < -1000) {
  alert("That value is not allowed");
} 
*/

//High level

//1
let customer = {
  name: "",
  pass: "",
  entrance: "",
};
let ticket = "";
let ticketCost = "";
customer.name = prompt("Enter customer name");
customer.pass = prompt("Enter customer pass");
customer.entrance = prompt("Enter customer entrance");

if (customer.name == "diego") {
  alert(`Hello ${customer.name}!`);
  if (customer.entrance == "yes") {
    ticket = confirm("do you want to use your ticket?");
    if (ticket) {
      alert("Welcome in " + customer.name);
    } else {
      alert("Good bye " + customer.name);
    }
  }
} else if (customer.pass == "vip") {
  alert(`Welcome in ${customer.name}!`);
} else if (customer.name != "diego") {
  alert(`Hello ${customer.name}!`);
  if (customer.entrance == "yes") {
    ticket = confirm("do you want to use your ticket?");
    if (ticket) {
      alert("Welcome in " + customer.name);
    } else {
      alert("Good bye " + customer.name);
    }
  }
} else if (customer.entrance == "no") {
  ticket = confirm("do you want to buy your ticket?");
  if (ticket) {
    ticketCost = prompt("how much are you willing to pay? ");
    if (ticketCost > 1000) {
      alert("Succesful transaction!");
      alert(`Welcome in ${customer.name}!`);
    } else {
      alert("Failed transaction!");
    }
  } else {
    alert("Good bye " + customer.name);
  }
}
