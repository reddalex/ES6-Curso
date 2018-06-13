/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
SECCION 3 Funciones en ECMAScript 6
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/*Vídeo 1: PARAMETROS OPCIONALES*/
/*En el ES6 se han expandido las funciones, tal es el caso que ahora reciben
Parametros Opcionales*/

/*EJEMPLO: Declaremos una función saludo que recibirá dos parametros*/



/*
*mensaje : El mensaje que queremos mostrar
*tiempo: tiempo en el que queremos que se muestre el mensaje
*Se imprime el mensaje en el tiempo que le indicamos que se tiene que imprimir
*/
function saludo(mensaje, tiempo){
  setTimeout(function(){
    console.log("Funcion sin control de parametros de entrada; " + mensaje)
  }, tiempo);
}

saludo();

/* Al ejecutar el anterior ejemplo, nos imprime "undefined", esto debido a que la
  variable mensaje, no está inicializada ni contiene algú valor, Java script
  asigna por default el valor undefined, y en el caso de la variable tiempo, es
  un caso similar, si al setTimeout se le manda un tiempo como "undefined", la
  instruccón es ejecutada al instante*/

/*Ejemplo de como se validaba el valor entrante en ES5*/
function saludoEs5(mensaje, tiempo){
  // mensaje = mensaje || "Hola Mundo"; //Forma poco segura de tratar los parametros
  mensaje  = (typeof mensaje !== "undefined") ? mensaje : "Hola Mundo ES5"
  setTimeout(function(){
    console.log("Funcion ES5 de como se conotrolan parametros de entrada: "+mensaje)
  }, tiempo);
}

saludoEs5()

/*Ejemplo de parametros opcionales con ES6*/

function saludoEs6(mensaje = "Hola mundo ES6", tiempo = 2000){
  setTimeout(function(){
    console.log("Funcion ES6 Parametros Opcionales: "+mensaje)
  }, tiempo);
}

saludoEs6()


/*Los parametros opcionales no se limita a ser unicamente Strings o Numeros enteros,
  estos pueden ser, objetos, arreglos incluso funciones*/

/*Ejemplo de Paramtros opcionales con Objetos y Funciones ES6*/

function funcionesOpcionales(fn = funcionSaludo){

  /*En ES5 se podría validar el valor de fn de la siguiente manera, para tener
    el error mas controlador*/
  if(typeof fn === "undefined"){
    console.error("No es una función")
    return;
  }

  fn()
}

function funcionSaludo(){
  for(let i = 0; i<10; i++){
    console.log("Parametros opcionales Funciones " + i)
  }
}

funcionesOpcionales();

/*Ejemplo de parametros opcionales con arreglos y objetos*/

function objetosOpcionales(persona = {nombre:"David"}){
  console.log(persona)
}

objetosOpcionales()

/*VIDEO: 2 Como los valores por defecto, afectan el objeto Arguments*/

/*Los parametros Opcionles alteran el valor del objeto arguments de una funcion*/

/*Ejemplo*/

function sumaArguments(a,b){
  /*el objeto arguments, recibe todos los valores que entren  a la funcion, aún
    y cuando no están declarados en la definición de la función*/
  console.log(arguments)
}

sumaArguments(5,6,"Hola Arguments")

function sumaArgumentsParametrosOpcionales(a = 6, b= 5){
  /*Cuando la función admite parametros opcionales, el objeto argumentos no recibe
    tales valores, por lo que debemos tener cuidado cuando se trabaje con los PARAMETROS
    opcionales*/
  console.log(arguments)
}

sumaArgumentsParametrosOpcionales()

/*VIDEO 3: Parametros Rest -  Parametros sin Nombre*/

/*El parametro REST es indicado con 3 puntos (...) seguido del nombre que le asignaremos
  a dicho parametro. Este parametro se convierte en un arreglo que contiene el
  "RESTo" de los parametros pasados a la funcoón. De ahí se origina el nombre "REST".*/77

/*Ejemplo con ES5: agregar alumnos a un arreglo*/

function agregar_alumno( ){

  console.log("Ejemplo con ES5 agregar Alumnos")
  console.log(arguments);

  for(var i = 1; i < arguments.length; i++){
    arguments[0].push(arguments[i]);
  }

  return arguments[0];
}

var alumnos_arr = ["Fernando"];
var alumnos_arr2 = agregar_alumno(alumnos_arr,"Maria","Pedro ","Susana","Juan")

console.log("Ejemplo con ES5 agregar Alumnos Resultado")
console.log(alumnos_arr2)


/*Ejemplo con ES6 : Agregar alunos a un arreglo*/

function agregar_alumnoEs6(arr_alumno, ...alumnos ){

  console.log("Ejemplo con ES6 agregar Alumnos")
  console.log(arguments);

  for(let i = 0; i < alumnos.length; i++){
    arr_alumno.push(alumnos[i]);
  }

  return arr_alumno;
}

let alumnos_arrEs6 = ["Fernando"];
let alumnos_arr2Es6 = agregar_alumnoEs6(alumnos_arrEs6,"Maria","Pedro ","Susana","Juan")

console.log("Ejemplo con ES6 agregar Alumnos Resultado")
console.log(alumnos_arr2Es6)

/*VIDEO 4 : Restricciones de los parametrs REST*/

 /*Las reestricciones para estos parametros son la siguientes
    1.- Solo puede existir un parametros REST en la función
    2.- Debe de ir como último parametro


 function ejemploRestricciones(...nombres, ...apodos ){

 }*/


/*VIDEO 5: El operador Spread*/

 /* Mientras que el operador REST permite especificar argumentos independientes
  que serán combinados en un arreglo, el operador SPREAD permite especificar un
  arreglo que será separado y cada item enviado será un argumento independiente
  a la función*/
 /*

 /*Ejemplo*/

function ejemploSpred(){
  var num1 = 10,
      num2 = 30;
  var max = Math.max(num1,num2);

  console.log("Ejemplo en ES5 (SPREAD)");
  console.log(max);

  var numeros = [1,6,8,3,45,23,80];
  var maxES6 = Math.max( ...numeros );

  console.log("Ejemplo en ES6 (SPREAD)");
  console.log(maxES6);
}

/*VIDEO 6: Diferencias entre REST y SPREAD*/

/*
    REST: Junta los elementos en un arreglo

    SPREAD: Esparce los elementos como si fueran enviados de forma separada
*/

function saludarRest(saludo, ...nombres){
  for (i in nombres){
    console.log(`${saludo} ${nombres[i]}` )
  }
}

saludarRest("Hola Mundo", "David","Alejandro","Reyes","Dominguez")

function saludarSpread(saludo, nombre, apellido, apellido2){
    console.log(`${saludo} ${nombre}`)
    console.log(`${saludo} ${apellido}`)
    console.log(`${saludo} ${apellido2}`)
}
let listaParametros = ["David","Reyes","Dominguez"]
saludarSpread("Hola Spread", ...listaParametros)

let partes = ["brazos","piernas"]
let cuerpo = ["cabeza","cuello", ...partes,"pies","dedos" ]

console.log(cuerpo);

/*VIDEO 7: Aclarando el doble comportamiento de las funciones*/

/* En el ES5 las funciones sirven con un doble proposito de ser llamadas con
  o sin la palabra reservada New

  Cuando se hace el llamada con New el valor de "THIS" dentro de la función es un
  nuevo objeto y ese nuevo objeto es retornado.

  Cuando la llamamos sin el new, simplement se hace un llamada a la función, y
  esperamos el retorno de algún valor procesado que puede ser un objeto, undefined
  o null*/

/*Ejemplo*/

function Persona(nombre){
  this.nombre  = nombre;
}

var persona = new Persona("Alejandro");
var noEsPersona = Persona("Alejandro Reyes Dominguez"); /*<<< Cuando la función
no es declarada con el New y pasa por un THIS como en el ejemplo, THIS lo que hace
apunta al objeto global "WINDOW", y esto debemos controlarlo. Cuando declaramos
una variable en el scope global, y después llamamos una funcion sin el new y dentro
pasa por un seteo de variables (this.nombre = nombre) estaríamos modificando
la variable que se encuentra previamente declarada en el scope global. */

console.log(persona);
console.log(noEsPersona);

/*Ejemplo de como podemos verificar si se mando a llamar una función mediante la
  palabra reservada NEW o si se mando a llamar sin el NEW*/

  /*Ejemplo ES5*/
  function PersonaErrorControlado(nombre){
    if(this instanceof PersonaErrorControlado){
      this.nombre = nombre
    } else{
      throw new Error("Esta función debe ser utilizada con el New")
    }
  }

  //var personaError = PersonaErrorControlado("Alejandro Dominguez")

  /*Todas las funciones en su proptotipo tienen otra funcion que se llama Call
    En la cual se manda como parametro el elemento que vamos a trabar como si fuera this
    es decir*/
  var personaError = new PersonaErrorControlado("David");
  var personaCall =  PersonaErrorControlado.call(personaError,"Alejandro");

  /*Debería dar error, la función debe llamarse con NEW Forzosamente*/

  /*En ES6 se implemento una nueva meta propiedad "NEW.TARGET". Es una propiedad
    de un no-objeto, que provee información adicional relacionada con su procedencia
    (como el new).
    Cuando un constructor de la función es llamada, new.target se llena con el
    operador NEW.
    Si la función "CALL()" es ejecutada, "new.target" no está definida ya que no
    se ejecutó el constructor*/

    /*Ejemplo ES6*/
    function PersonaErrorControladoES6(nombre){
      if(typeof new.target !== "undefined"){
        this.nombre = nombre
      } else{
        throw new Error("Esta función debe ser utilizada con el New")
      }
    }

    var personaErrorEs6 = new PersonaErrorControladoES6("David");
    var personaCallEs6 =  PersonaErrorControladoES6.call(personaErrorEs6,"Alejandro");

  /*Esto nos asegura que nuestros objetos siempre sean creados con la palabra
    reservada NEW*/
