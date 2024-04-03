//1
/* function printMessage(message) {
  console.log(message);
} */
// let printMessage = (message) => console.log(message);

//2
/* function createMultplication(number1, number2) {
  let result = number1 * number2;
  return result;
} */
// let createMultplication = (number1, number2) => number1 * number2;

//3
/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = array.map((numero) => createMultplication(numero*3));

console.log(newArray);
console.log(array) */

//4 intenté utilizar filter() pero me encontre que no podia ver el lenght del array de vuelto ( me decia que era any)
/* let topAbv;
let filterTen = (array) => {
  topAbv = array.sort((a, b) => b.abv - a.abv).splice(0, 10);
};
filterTen(beers, topAbv);
console.log(topAbv);
 */
//5

/* let lessBitter;
let filterTen = (array) => {
  lessBitter = array.sort((a, b) => a.ibu - b.ibu).splice(0, 10);
};
filterTen(beers);
console.log(lessBitter);
 */
//6

/* let beerFound;
let beerFinder = (array, beerName) => {
  beerFound = array.find((beer) => beer.name.toLowerCase() == beerName.toLowerCase());
};
beerFinder(beers,"Fake Lager");
console.log(beerFound);
 */
//7
/* 
let ibuFound;
let ibuFinder = (array, ibuNum) => {
  ibuFound = array.find((beer) => beer.ibu == ibuNum);
  if (!ibuFound) {
    console.log("There is no beer with an ibu of (value entered).");
  }
};
ibuFinder(beers, 50);
console.log(ibuFound);
 */
//8 tuve problemas con las llaves en el callback
// let coso = prompt("algo?");
/* let nameFound;
let nameFinder = (beerName) => {
  nameFound = beers.findIndex(
    (beer) => beer.name.toLowerCase() == beerName.toLowerCase()
  );
  if (nameFound !== -1) {
    nameFound++;
    console.log(""+nameFound);
  } else {
    console.log(`${beerName} does not exist.`);
  }
};
nameFinder("Berlin x");
 */
//9

/* let filterBeers = (array, limit) => {
  let underTheLimit = array.filter((beer) => beer.abv < limit);
  let newArray=[];

  for (const beer of underTheLimit) {
    let aux ={name: beer.name,
    alcohol : beer.abv,
    bitterness : beer.ibu,}
    newArray.push(aux)
  }
  console.log(newArray)
};
filterBeers(beers, 7); */
//!simulacro
/* nombre="diego"
let aux;
let filterBeers = (array, limit) =>
  array
    .filter((beer) => beer.abv < limit)
    .map(
      (beer) =>
         aux ={
          name: beer.name,
          alcohol: beer.abv,
          bitterness: beer.ibu,
        }
    );
console.log(filterBeers(beers,4.6))
console.log(nombre) */
//10
/* let filteredBeer;
let beerFilter = (array, prop, boolean) => {
  if (boolean) {
    filteredBeer = array.toSorted((a, b) => a[prop] - b[prop]).splice(0, 10);
  } else {
    filteredBeer = array.toSorted((a, b) => b[prop] - a[prop]).splice(0, 10);
  }
  return filteredBeer;
};
beerFilter(beers, "abv", false);
console.log(filteredBeer); */

//11
/* let contenedor = document.getElementById("contenedor");
let template = document.createElement("template");

let tableConstructor = (array) => {
  let rows = array.map(
    (beer) => ` <tr>
<td>${beer.name}</td>
<td>${beer.abv}</td>
<td>${beer.ibu}</td>
</tr>`
  );
  let table = `<table>
  <thead>
      <tr>
          <th>Name</th>
          <th>ABV</th>
          <th>IBU</th>
      </tr>
      ${rows.join("")}
  </thead>
  <tbody>
  
  </tbody>
</table>`;

  template.innerHTML = table;
  contenedor.innerHTML = template;
};
tableConstructor(beers);
console.log([template]);
 */
