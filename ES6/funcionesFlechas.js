/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
SECCION 4 Funciones de Flechas => ES6
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/*VIDEO 1: Funciones de Flecha o Arrow Functions

  Este tipo de funciones tienen una sintaxis muy variada que depende de lo que
  quieres realizar.

  Pero normalmente tienen la misma estructura:

  1.- Funcion con argumentos
  2.- Seguido de una flecha gorda =>
  3.- Seguido del cuerpo de la función

  ¿Para que nos sirven?

  1.- Menos código es mas simple de interpretar
  2.- No hay un nuevo "this" dentro de las funciones
  3.- No hay constructores, no tiene "new"
  4.- No puede cambiar el valor del "this" aunque se uses call(), apply() o
      bind()
  5.- No hay objeto arguments
  6.- Entre otras cosas...

  Tecnicamente hablando, son funciones definidas con una nueva sintaxis que usa
  una flecha "=>", pero se comportan de una forma muy diferente a las funciones
  normales en el ECMAScript 5

  CARACTERISTICAS PRINCIPALES

  1.- No hay creación de "this, super, arguments, new.target"
  2.- No pueden ser llamadas con "new", al no tener un método constructror, no
      pueden ser llamadas con new.
  3.- No hay un prototipo/prototype, dado que no tienen constructor, por consecuencia
      no hay prototitpos
  4.- No pueden cambiar el valor de this
  5.- No hay una relación con el objeto arguments de las funciones, si se requiere
      trabajar con ese tipo de objeto, dependemos unicamente de los parametros REST
  6.- No puden tener nombres de parametros duplicados.
*/

/* VIDEO 2: Ejemplos de funciones con flechas*/

var miFuncion2 = function(valor){
    return valor;
}

let miFuncion1 = valor => valor;

// console.log("Funcion ES5", miFuncion2())
// console.log("Funcion de flecha ES6 ", miFuncion1())

var sumar2 = function(num1, num2){
  return num1 + num2;
}

let sumar1 = (num1,num2) => num1 + num2

// console.log("Funcion ES5 Suma", sumar2(5,2))
// console.log("Funcion de flecha ES6 Suma ", sumar1(8,58))

var saludar2 = function(){
  return "Hola Mundo ES5 Funcion tradicional"
}

let saludar1 = ()=>"Hola Mundo ES6 Funcion Con Flecha Gorda"

// console.log("Funcion ES5 Saludar", saludar2())
// console.log("Funcion de flecha ES6 Saludar ", saludar1())

var saludarPersona2 = function(nombre){
  var salida = "Hola " + nombre;

  return salida
}

let saludarPersona1 = (nombre)=>{
  let salida = `Hola ${nombre}`

  return salida
}

// console.log("Funcion ES5 saludarPersona2", saludarPersona2("David Alejandro"))
// console.log("Funcion de flecha ES6 saludarPersona1 ", saludarPersona1("David Alejandro"))

var obtenerLibro2 = function(id){
  return {
    id: id,
    nombre: "Harry Potter"
  }
}

let obtenerLibro1 = id =>({id:id, nombre:"Harry Potter"})

// console.log("Funcion ES5 Regresar Objeto", obtenerLibro2("2"))
// console.log("Funcion de flecha ES6 Regresar Objeti ", obtenerLibro1("1"))

/*VIDEO 3: Creando Funciones Anónimas

  Las funciones anónimas son funciones que son ejecutadas inmediatemente después
  de que son creadas*/

/*Funciones Anónimas usando ES5*/

var saludoAnonimo1 = function(nombre){
  return "Hola " + nombre;
}("David R.");

console.log("Saludo 1 Anonimo ES5", saludoAnonimo1);

/*Funciones Anónimas usando ES6*/

let saludoAnonimo2 = (nombre => `Hola ${nombre}`)("Abdiel");

console.log("Saludo 2 Anónimo ES6", saludoAnonimo2);

/*VIDEO 4: Las funciones de flecha no cambian el objeto this*/


/*Ejemplo de como las funciones en ES5 alteran el valor de this cuando son creadas
  y para solventar el problema, se tiene que hacer un "bind" a la función para que
  esta apunte el objeto this al entorno del objeto. y no al entorno global*/
var manejador =  {

    id: "123",

    init: function(){
        document.addEventListener("click", (function(event){
          this.clickEnPagina(event.type);
        }).bind(this), false); /*BIND soporta varios argumentos: el primero, será el
        valor que queramos asignar a this, el resto, serán aquellos parámetros
        que sobreescribirán a los parámetros de la función sobre la que estamos
        trabajando*/
    },

    /*Si no le ponemos la funcion bind, marca error*/

    clickEnPagina: function(type){
        console.log("Manejando "+type+" para el id: "+this.id);
    }
}

manejador.init();

/*Ejemplo de como la función con flecha no altera el valor de this, por lo tanto
  el ejercicio anterior queda mucho mas sencillo*/

let manejadorFlechas =  {

  id: "ES6",

  init: function(){
    document.addEventListener("click", event => this.clickEnPaginaEs6(event.type))
  },

  clickEnPaginaEs6: function(type){
    console.log(`Manejando ${type} para el id: ${this.id}`)
  }
}

manejadorFlechas.init();


/*VIDEO 5: Funciones de Flecha y Arreglos*/

/*Ejemplo de Funcion de ordenamiento con ES5 sin usar funciones de flecha*/

var arreglo = [5,10,11,2,1,8,7,9,3,2,4];

var ordenadoES5 = arreglo.sort(function(a,b){
  return a-b;
})

console.log(ordenadoES5);

/*Ejemplo de Funcion de ordenamiento con ES6 usando las funciones de Flecha*/

let arregloES6 = [5,10,11,2,1,8,7,9,3,2,4];

let ordenadoES6 = arregloES6.sort((a,b) => a-b);

console.log(ordenadoES6);

/*VIDEO 6: Identificar funciones de flecha y otros ejemplos*/

/*Ejemplo de como podemos identificar las funciones de flecha*/

let restar = (a,b) => a - b

console.log(typeof restar) /*Type Function*/
console.log(restar instanceof Function) /*This is True*/

//var restar2 =  new restar(4,8);
/*Las funciones de flecha no tienen constructor,
                                  por lo tanto no se pueden invocar con la palabra
                                  new*/

function ejemplo(x,y){
  /*esta funcion de flecha, al estar dentro de una función normal, el objeto arguments
    va a buscarse en el scope de la función, por lo que va a imprimir los arguments
    de la funcion contenedora*/
  ((a,b)=>{
    console.log(arguments[0])
  })();
}

/*Las funciones de flecha no tienen objeto arguments, porlo que la siguiente
  función marca error, dado que la función esta declarada en el ambiente global*/

((a,b)=>{
  //console.log(arguments[0])
})();

ejemplo(78945,82);
