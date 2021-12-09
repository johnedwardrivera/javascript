// var , let y const

// VARIABLE: la variable es un espacio en la memoria donde vamos a 
//almacenar un tipo de datos 

// let:
// Declaracion de una varible: 
let mascota;

//Inicializacion de la variable 
mascota = 'gato'; 

//declaracion  e inicializacion de una variable 
let mascota1 = 'perro';
console.log(mascota1)

/*REGLAS DE LAS VARIABLES 
 1. let no me permite declarar la variable con el mimo nombre  
 2. let permite declarar la variable y no iniciarla  y mas tarde 
    en cualquier lugar del codigo inicializarla 
 */
 
//var: 
/*  
 1. var me permite declarar otra variable con mismo nombre 
 2. tambien me permite inicializarla sin declarara 
*/  
 
/* 
Const
 1. const no nos deja declara una variable sin inicializarla
 2. const no nos deja declara una variable con el mismo nombre
*/ 

// var
var  nombre = 'luis' 
console.log(nombre) 

var nombre = 'lina' 
console.log(nombre) 

var pajaro;
pajaro = "loro" 
console.log(pajaro)  

//variable  undefined o variable null   

// undefined
let animal; 
console.log(animal) 

// null
let mate = null
 console.log(mate)  

 function saltar (){
    let tiburon = "blanco"
    console.log(tiburon)
 } 
 saltar() 
/*comienza con un valor nulo y mas adelante podemos cambiar su valor por un 
true o false 
*/
 let encendido = null; 
 console.log(encendido) 

 encendido = true; 
 console.log(encendido) 


// const 
const gato ="venus"
console.log(gato) 

const gato2 ="tom"
console.log(gato2) 

// nunca usaremos var 
// usaremos let cuando nuestra variable valla a cambiar 
// usaremos const cuando nuesta variable sea fija no cambie 

const fuerzaEnemigo = 20
console.log("la fuerza del enemigo no cambia " + fuerzaEnemigo) 


if (true) {
  let fuerza = 20
   console.log(fuerza)
}  
console.log(fuerza)

console.log("la fuerza es de "+fuerza+" por ahora") 
fuerza = 30
console.log("la fuerza cambio a "+fuerza+" fase 2")
