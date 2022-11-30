let categoria = document.getElementById("select_categoria")
let boton = document.getElementById("boton")
let servicio = document.getElementById("servicio")
let mostrar = document.getElementById("resultado")
let horas = document.getElementById("horas")

boton.addEventListener("click",calcular)
function calcular() {
    mostrar.innerText = ``
    let categorias = ["a","b","c"]
    let tarifa = 0
    let años_servicio = 0
    let bonificacion = 0
    let sueldobasico = 0

    let la_categoria = categorias[categoria.selectedIndex]
    if(la_categoria == "a"){
        tarifa = 40
    }
    else if(la_categoria == "b"){
        tarifa = 35
    }
    else if(la_categoria == "c"){
        tarifa = 30
    }

    años_servicio = parseFloat(servicio.value) || 0 
    
    if(años_servicio >= 1 && años_servicio <= 3){
        bonificacion = 0.15
    }
    else if(años_servicio >= 4 && años_servicio <= 7){
        bonificacion = 0.20
    }
    else if(años_servicio >= 8 && años_servicio <= 12){
        bonificacion = 0.30
    }
    else if(años_servicio >= 13 ){
        bonificacion = 0.35
    }
    
    sueldobasico = parseFloat(horas.value)  *tarifa
    
    mostrar.innerText += `el sueldo basico es de ${sueldobasico}`
    mostrar.innerText += `\nla bonificacion por años de servicio ${bonificacion}`
    mostrar.innerText += `\nel sueldo neto es de  ${sueldobasico+(sueldobasico * bonificacion)}`
}
