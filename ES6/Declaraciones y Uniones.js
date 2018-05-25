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
}

/*No puede haber re-declaraciones
  var variable1 = 12;
  let variable1 = 12;
*/

function declaracionDobleES5(){
  /*En Javascript5 Podía hacerse lo siguiente*/
  var declaracion = 1;
  var declaracion = 2;
  var declaracion = 3;
}

function declaracionVaribalesES6(){
  /* En ES6 la declaración LET obliga a que en el bloque solo exista una variable
    definida con el nombre*/
  let declaracionLet = 1
  var declaracionLet = 2 /*<---Da error por tener dos variables con el mismo
                             nombre en el mismo bloque*/
}
