// AMBITO SUPERGLOBAL 
/* 
Tenemos acceso desde cualquier archivo  
*/ 

//AMBITO GLOBAL **************************************************************************
/* 
tenemos acceso desde cualquier lado del archivo 
*/   
var perro ="lucas" 
console.log(perro)

//Ambito LOCAL ****************************************************************************
/*
tenemos acceso desde una funcion  
*/   

function saltar(){
    var gato ="venus"  
   
    
}   





//AMBITO DE BLOQUE ************************************************************************
/* 
es el contexto que esta englobado dentro de un bucle o un condicional 
*/  
let nombre ="maria" 

if(nombre === "maria"){
    let apellido = "gonzoles" 
    console.log(apellido)

} else{
    console.log("nombre incorrecto")
}

console.log(nombre) 

let fuerzaEnemigo = 50
console.log("la fuerza del enemigo no cambia " + fuerzaEnemigo) 

if (true) {
  let fuerza = 20
  console.log(fuerza)
  console.log("la fuerza es de "+fuerza+" por ahora") 
}  


fuerza = 30
console.log("la fuerza cambio a "+fuerza+" fase 2")
 
const suma=()=>{  
    

}
