/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
SECCION 1 Cómo funcionan las declaraciones y las uniones (binding)?
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function declaracionVariables(){
  /*Declaración de Variables en ES6*/

  /*Variables*/

  /*Declaración Normal de versiones anteriores, permite usar variables
  aun antes de declararlas*/

  var mensaje = "Hola Mundo"

  /*Declaracion ES6 de una variable Usando LET*/
  let mensajeES6 = "Hola Mundo"

  /*LET permite declarar varibales limitando su alcance al bloque, declaración
  o expresión donde se esta utilizando y VAR define una variable Global o Local
  en una función sin importar el ambito del bloque*/
  console.log("Variable mensaje: " + mensaje)
  console.log("Variable mensajeES6 declarada con LET: " + mensajeES6)
}

/*No puede haber re-declaraciones
  var variable1 = 12;
  let variable1 = 12*/

function declaracionDobleES5(){
  /*En Javascript5 Podía hacerse lo siguiente*/
  var declaracion = 1;
  var declaracion = 2;
  var declaracion = 3;

  console.log("Variable 'declaracion', ejemplo de declaración doble: "+declaracion);
}

function declaracionVaribalesES6(){
  /* En ES6 la declaración LET obliga a que en el bloque solo exista una variable
    definida con el nombre*/
  let declaracionLet = 1
  var declaracionLet = 2 /*<---Da error por tener dos variables con el mismo
                             nombre en el mismo bloque*/
}

function clicloDeVidaLET(){
  /*En EM6 el ciclo de vida de una variable declarada con LET es limitado al
    bloque donde se haya declarado es decir:*/

  let mensaje = "Hola Mundo"; /*Variable declarada a nivel global (entiendase
                                como nivel global el entorno de la funcion)*/

  if(true){
    let mensaje = "Que tal!"; /* Variable declarada a nivel bloque IF */
    console.log(mensaje); /*Se imprime la variable mensaje declarada solo en
                            en el bloque IF es una variable que vive solo
                            dentro del IF, esa variable es un espacio de memoria
                            diferente, es una variable totalmente diferente*/
  }

  console.log(mensaje); /*Se imprime la variable declarada en el Scope global
                          (entiendase como scope global como el scope de la
                          funcion)*/
}

function declaracionConstantesES6(){
  /*En ES6 se ha incorporado el concepto de las CONSTANTES*/
  const CONSTANTE_UNO = "Hola Constante" /*Es un tipo de dato que no puede
                                          variar o mutar de valor*/
  /*Dato importante, la CONSTANTE, debe iniciarlizarse en el instante en que else {
    declarada, si no se inicializa, da error en tiempo de ejecución*/

  /*Al igual que el LET, si se declara otra constante con el mismo nombre dentro
    de un bloque diferente al scope global(la funcion) esa CONSTANTE solo vivirá
    dentro del bloque*/

  if(true){
    const CONSTANTE_UNO = "Hola bloque IF" /* Constante completamente nueva,
                                            que solo vive dentro de un bloque*/

    console.log(CONSTANTE_UNO) /* <---Imprime "Hola bloque IF"*/
  }

  console.log(CONSTANTE_UNO)  /* <----Imprime "Hola Constante"*/

  /*Como buena practica, los nombres de las CONSTANTES se escriben en mayusculas
  */

  /*También se pueden declarar Objetos de la siguiente manera*/

  const PERSONA = {
    nombre : "David",
    apellido : "Reyes",
  }

  console.log("Objeto Constante: ");
  console.log(PERSONA);

  /*En el ES6 está permitido cambiar el valor de alguna de las propiedades del
    objeto, es decir: */

  PERSONA.nombre = "Alejandro";
  console.log("Constante PERSONA, con un nombre diferente al declarado: ");
  console.log(PERSONA);

  /*Pero no está permitido hacer el cambio de todo el objeto, es decir*/

  PERSONA = {
    nombre: "Alejandro",
    apellido: "Dominguez"
  }
  /*Da error en tiempo de ejecución*/
}

function declaracionDentroDeCiclos(){
  /*Tomamos como ejemplo para fines prácticos un ciclo FOR*/

  for(var i = 0; i<=10; i++){
    //La variable i, al ser declarada con Var puede ser accesible a ella en todo
    //el bloque de la función.
    //
  }

  console.log("Variable i declarada con Var accediendo a ella fuera del for: "+i);

  /*For con su incremental declarado con LET*/

  for(let x = 0; x<=10; x++){
      //x, al ser declarada con LET no es accesible fuera del bloque en el que
      //vive, es decir, el bloque del ciclo for
      //
      console.log("Variable X dentro del ciclo: "+x)
  }

  console.log("Variable X fuera del ciclo for: "+x);  /*<--- Da error en tiempo
                                                        de ejecución, ya que la
                                                        variable X no existe en
                                                        este Scope*/
}

function declaracionFuncionesDentroFor(){
  /*Declaracion de Funciones dentro de un ciclo For*/
  /*Diferencia entre var y let*/

  //Declaramos un arreglo para después poblarlo con funciones
  var funciones = []

  /*for(var i = 0; i <= 9; i++){
    /*------------------------------------------------------------------------*/
    /*De esta forma, el resultado al invocar el arreglo de funciones el resultado
      será el ultimo valor de i, ya que var, al permitir la multiple asignación
      de variables, toma siempre el último valor que haya tomado la variable en cuestion*/
    //funciones.push(function(){
      //console.log(i);
    //})
    /*------------------------------------------------------------------------*/
    /*Para poder imprimir los 9 datos correspondientes al ciclo for se puede hacerse
      algo por el estilo*/
      /*funciones.push(
        (function(valor){
            return function(){
                console.log(valor)
            }
         })(i)
      );
  }*/

  for(let i = 0; i <= 9; i++){
    /*Para el ejemplo anterior, y ahorrando muchas lineas de código, se puede
      hacer de la siguiente manera,*/
    funciones.push(function(){
      console.log(i);
    })

    /*La diferencia está en la declaración de nuestro contador, ahora se usa
      let*/
  }

  funciones.forEach(function(func){
    func()
  })

  /*Con let, por cada iteracción, se crea una nueva instancia de la variable
    totalemente independiente*/
}
