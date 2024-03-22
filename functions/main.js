//Low level

//1/2
/*
function add() {
  console.log(100 + 20);
}
add();
*/
//3
/*
function add(a, b) {
  console.log(a + b);
}
add(2, 5);
*/
//4
/*
let number1 = 100;
let number2 = 20;
function add(a, b) {
  console.log(a + b);
}
add(number1, number2);
*/
//5
/*
let number1 = 100;
let number2 = 20;
function add(a, b) {
  let resultado = a + b;
  return resultado;
}
add(number1, number2);
*/
//6
/*
let number1 = 100;
let number2 = 20;
let add = function (a, b) {
  let resultado = a + b;
  return resultado;
};
console.log(add(number1,number2));
*/

//Level medium

//1
/*
function greet(n) {
  console.log(`Hello ${n} we miss you !`);
}
greet(prompt("enter name: "));
*/
//2
/*
let number1 = prompt("first number: ");
let number2 = prompt("second number: ");
let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(number1, number2));
*/
//3
/*
let altura = prompt("altura del triangulo: ");
let base = prompt("base del triangulo: ");
function area(a, b) {
  return (b * a) / 2;
}
console.log(area(altura, base));
*/
//4
/*
let lado1 = parseInt(prompt("lado a: "));
let lado2 = parseInt(prompt("lado b: "));
let lado3 = parseInt(prompt("lado c: "));
function perimetro(a, b, c) {
  return a + b + c;
}
console.log(perimetro(lado1, lado2, lado3));
*/
//5
/*
function totalPrice(a, b) {
  return a * b;
}
function calculate() {
  let quantity = parseInt(prompt("cantidad"));
  let price = parseInt(prompt("precio por unidad"));

  if (quantity >= 10 && quantity<20) {
    let discount10 = totalPrice(quantity, price) * 0.9;
    console.log(discount10);
  } else if (quantity >= 20) {
    let discount20 = totalPrice(quantity, price) * 0.8;
    console.log(discount20);
  } else {
    console.log(totalPrice(quantity, price));
  }
}
calculate();
*/
//6
/*
function isAnAdult(n) {
  if (n >= 18) {
    alert("You are an adult!");
  } else {
    alert("You are not an adult!");
  }
}
isAnAdult(parseInt(prompt("Enter your age")));
*/

//Level high

//1
/*
function taxes(n) {
  if (n <= 10000) {
    alert("Tax -> $" + n * 0.1);
  } else if (n <= 20000) {
    alert("Tax -> $" + n * 0.15);
  } else {
    alert("Tax -> $" + n * 0.2);
  }
}
taxes(parseInt(prompt("Enter your annual income: ")));
*/
//2
/*
function almanac(n) {
  switch (n) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      alert("It is a business day!");
      break;
    case 6:
    case 7:
      alert("It is the weekend! :D");
      break;
    default:
      alert("Weeks in the earth only have 7 days!");
  }
}
almanac(parseInt(prompt("Enter the day number")));
*/
//3
/*
let person = {
  firstName: "",
  lastName: "",
  age: 0,
};
function validator() {
  let name = prompt("Enter your first name: ");
  if (name != "" && name != " ") {
    person.firstName = name;
    let lName = prompt("Enter your last name: ");
    if (lName != "" && lName != " ") {
      person.lastName = lName;
      let years = prompt("Enter your age: ");

      if (years != "" && years != " ") {
        person.age = years;
        console.table(person);
      } else {
        console.error("The age cannot be empty");
      }
    } else {
      console.error("The last name cannot be empty");
    }
  } else {
    console.error("The name cannot be empty");
  }
}
validator();
*/
//4
/*
function greet(name) {
  return "Hello, my name is " + name;
}
function calculateAge(n, m) {
  return parseInt(n - m);
}
function present() {
  let name = prompt("Enter your name");
  let bday = prompt("Enter your birthday year");
  let year = prompt("Enter actual year");
  alert(greet(name) + " I am " + calculateAge(year, bday) + " year young!");
}
present();
*/