//1-2 
let formulario = document.querySelector("form")
let wall = document.getElementById("wall")
let text = document.getElementById("texto")
let color = document.getElementById("color")

let fontStyle =italic;
formulario.addEventListener("submit", e=>{
e.preventDefault() 
createSquare(wall)
fontStyle = e.target.font.value
document.getElementById("cerrar").addEventListener("click", ()=>wall.innerHTML ="")
})

let createSquare = (place)=>{
let square = `<div class="w-[300px] h-[300px] bg-[${color.value}] ${fontStyle} mt-4 rounded-lg flex flex-wrap flex-col items-end"><span class="close cursor-pointer h-[40px] pr-6 pt-2" id="cerrar">X</span><p class="text-center self-center">${text.value}</p></div>`
let renderSquare = (item)=>template=item;
place.innerHTML=renderSquare(square)
}



