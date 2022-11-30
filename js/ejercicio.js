// CREAR UN APLICACION QUE PERMITA CAMBIO DE MONEDA DE SOLES A DOLARES
// iNGRESAE U IMPORTE EN SOLES Y MUESTRE SU EQUIBVALENTE EN DOLARES
let soles = document.getElementById("soles")
let dolares = document.getElementById("dolares")
let btnsoles = document.getElementById("btnsoles")

btnsoles.addEventListener("click",calcular)

function calcular(){
    let moneda_soles = parseFloat(soles.value) || 0
    dolares.value = moneda_soles / 3.84
}


// CREAR UN APLICACION QUE PERMITA CAMBIO DE MONEDA DE DOLARES A SOLES
// iNGRESAE U IMPORTE EN DOLARES Y MUESTRE SU EQUIBVALENTE EN SOLES

let dolares2 = document.getElementById("dolares2")
let soles2 = document.getElementById("soles2")
let btndolares = document.getElementById("btndolares")

btndolares.addEventListener("click",calcular2)

function calcular2(){
    let moneda_dolares = parseFloat(dolares2.value) || 0
    soles2.value = moneda_dolares * 3.84
}