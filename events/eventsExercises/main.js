
// 1
let cuadrado = document.getElementById("cuadrado");
let boton = document.querySelector("button");
let colores = ["bg-gray-500","bg-blue-400","bg-red-300"]
let cambioColor= ()=>{
if(cuadrado.className==`${colores[0]} w-[300px] h-[300px] border`){cuadrado.className = `${colores[1]} w-[300px] h-[300px] border`}else if(cuadrado.className==`${colores[1]} w-[300px] h-[300px] border`){cuadrado.className = `${colores[2]} w-[300px] h-[300px] border`}else{cuadrado.className = `${colores[0]} w-[300px] h-[300px] border`}
}
boton.addEventListener("click", cambioColor) 
// 2
let inputText = document.getElementById("inputText")
let textScreen = document.getElementById("textScreen")
 
inputText.addEventListener("keyup",e=> {
textScreen.innerText = e.target.value
})

// 3


let claculoMasa = (kg,mts)=>kg/(mts*mts)
let resultadoCuadro =(kg,mts)=>( `<div class="w-[300px] bg-blue-300 flex flex-col items-center"><p>Resultado</p><p>su indice de masa corporal es</p><p>${claculoMasa(kg,mts).toFixed(2)}</p></div>`)
let contenedorMasa = document.getElementById("cajaMasaCorporal");

let formMasa = document.getElementById("formMasa");
formMasa.addEventListener("submit",e=>{
    e.preventDefault();
    console.log(e)
let metros= (e.target[0].value)/100
let kilos=e.target[1].value
contenedorMasa.innerHTML += resultadoCuadro(kilos,metros)
})

// 4

let formConversor = document.getElementById("formConversor")
let botonResetear = document.getElementById("resetear")
let dolares = document.getElementById("dolares")
let local = document.getElementById("local")
let conversorADolar = (num)=> num/500 ;
let conversorALocal = (num)=> num*500 ;

botonResetear.addEventListener("click",e=>{
  dolares.value = 0
  local.value = 0
})

formConversor.addEventListener("submit", e=>{
e.preventDefault()
let mLocal = e.target[0].value
let dolar = e.target[1].value
if(mLocal != 0){
    dolares.value = conversorADolar(mLocal)
}else{
     local.value = conversorALocal(dolar)
}
})