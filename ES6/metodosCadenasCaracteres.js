/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
SECCION 2 Nuevos métodos con cadenas de caracteres - String
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function startEndInclude(){
  /*En ES6 se han incluido 3 funciones básicas que permiten trabajar con Strings*/

  /*En el ES5 para saber si un String comenzaba con un caracter en especifico,
    se tenía que hacer algo similar al siguiente ejemplo (con substr())*/
  var saludo = "Hola Mundo!"

  console.log("substr: "+saludo.substr(0,1)  === "H"); /*<--- Devuelve un True al ser verdadera
                                              la condición*/

  /*En el ES6 se agregó la siguiente funcion para hacer lo mismo que arriba, pero
    con menos código*/

  console.log("startsWith: "+saludo.startsWith("Hola"))/*<--- Regresa un True, al ser verdadera
                                          la condición*/

  /* La función endWith(), para saber en que letra o palabra termina un string*/

  console.log("endWith: "+saludo.endsWith("Mundo!")) /*<--- Regresa un True al ser verdadera
                                          la condición*/

  /*En el ES5 para saber si una cadena contenía una palabra o caracter, usabamos
    la funcion "indexOf", la cual no regresa un Booleano, si no un entero con la
    posición del caracter o palabra que estabas buscando, ejemplo:*/

  console.log("indexOf: "+saludo.indexOf("z")) /*<--- Regresa la posición del caracter buscando
                                      en caso de no encontrarlo, regresa un -1*/

  /*Para hacer lo siguiente pero con mucho menos esfuerzo, y regresando un Booleano
    ES6 incluyó la siguiente funcion*/

  console.log("includes: "+saludo.includes("a"))/*<--- Regresa un Booleano, true si la encuentra
                                    False si no la encuentra*/

  /*Adicional a esto, se puede obviar (en las 3 funciones) ciertos caracteres
    se le agrega el caracter donde se necesita empezar a validar la cadena*/

  console.log("startsWith especificando inicio: "+saludo.startsWith("Mundo",5)) /*<--- Regresa un true, si se cumple
                                              la condición*/
}

function funcionRepeat(){

  /*La función repeat, sirve para repetir determinado número de veces un caracter
    o una cadena string*/

  let texto = "Hola";
  console.log(texto.repeat(5)) /*Imprime la cadena texto repetida 5 veces*/


  /*Esto es muy util cuando se necesita dar formato a caracteres o trabajar con
    archivos de texto, como en el siguiente ejemplo:

    Se requiere imprimir en pantalla el siguiente formato
    Fernando    |55194930
    Melissa     |66554477
    Juan        |77889955
  */

  const ESPACIOS = 12   /* Número total de caraceteres que hay desde el inicio
                           hasta el inicio del caracter "|"*/

  let nombres = ["Fernando", "Melissa", "Juan"];  //Arreglo con los nombres
  let telefonos = ["55194930", "66554477",  "77889955"];  //Arreglo con los telefonos

  /*Ciclo "for in" para recorrer nuestro primer arreglo*/
  for (i in nombres){
    let dif = ESPACIOS - nombres[i].length /*<--- Se calcula el número de ESPACIOS
                                                  entre el nombre y los teléfonos*/

    /*Se imprime el resultado con el formato esperado*/

    console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
  }
}

function plantillasLiterales(){
  /*Template Literals*/

  /*En Javascript siempre se ha tenido una funcionalidad limitada en cuanto al
    uso de los Strings comparado con otros lenguajes de programación"

    /*Ejemplo del uso de Strings en PHP:

      $nombre = "Fernando"
      miTexto = "Hola $nombre"

      ---Da como resultado---
      Hola Fernando
    */

  /*En el caso de Java Script para lograr algo similar al ejemplo PHP se tendría
    que hacer algo como lo siguiente*/

  let usuario= "Alejandro";
  let telefono= "5511223";
  let saludo= "El teléfono de "+usuario+" es "+telefono;

  console.log(saludo);

  /* Esta forma de hacerlo resulta un poco tedioso, entre más complejo sea el String
    que queremos imprimri, es decir, que si tenemos algo como lo siguiente:

    var html = "<h1 class='auto'>Hola mundo </h1>"

    Debemos estar muy pendientes acerca de si son comillas, apostrofes u otro
    delimitador. Sin contar que hay que escapar de algunos caracteres que pudiesen
    romper nuestra cadena String
  */

  /*ES6 Literal Templates*/

  let nombre = "David";
  let apellido = "Reyes";

  let saludoCompleto = nombre + " " + apellido;
  console.log(saludoCompleto);

  /*Para hacer uso de los Literal Templates, se requiere el uso de estos caraceteres
    ``, Con eso se le indica a ES6 que debe esperar un String que es capaz de mutar
    en si mismo*/

  let saludoCompletoTemplate = `El nombre completo es ${nombre} ${apellido}`

  console.log("Usando Template "+ saludoCompletoTemplate);

  /*También se pueden reemplazar por resultados de funciones como en el siguiente
    ejemplo*/

  let saludoCompletoTemplate2 = `El nombre completo es ${_returnNombreCompleto()}`;
  console.log(saludoCompletoTemplate2);

  /*Lo que está dentro de ${} en un template literal, es codigo JavaScript Puro*/

  /*Otro punto importante que nos permiten hacer los TemplateLiterals, es else {
    trabajar con multilineas*/

  let multilineas = `<h1 class="clase1">${nombre}</h1>
  <p>Hola Mundo ${apellido}</p>`

  console.log(multilineas)
}

function templateLiteralTag(){
  /*Literal Templates con Tags*/

  /*Los templates literales, tienen una función bastante util, que sirve para
    cuando se  quieren validar los datos o darles algn formato antes de la
    asignación de la variable*/

  /*Ejemplo*/

  let unidades = 5,
      costo_unitario = 10;

  /*Que son los tags?, son funciones que se van a ejecutar justo cuando se esté
    construyendo el template literal, en este caso, "etiqueta" es el tag que se
    disparará cuado se esté construyendo, la función debe estar definida, para
    que no de error en tiempo de ejecución*/

  let mensaje = _etiqueta`${unidades} lapices cuestan ${costo_unitario * unidades} pesos`

  console.log(mensaje);

}

function valoresRaw(){
  /*Usando valores Raw(crudos) en los templates literals*/

  /*Cuando tenemos un String, a veces se tienen caracteres especiales que hacen
    un cambio en el String antes de ser impresos, pero cuando se necesita evaluar
    todo el string tomando en cuenta también los caracteres que especiales
    es cuando se usan los valores crudos o raw, existe un tag predeterminado para
    hacer eso
  */

  let mensaje = `Hola \n Mundo \\`,
      mensaje2 = String.raw`Hola \n Mundo \\`;

  //var mensaje3 = String.raw"Hola \n Mundo \\";

  console.log(mensaje);
  console.log(mensaje2);

  /*No funciona con Strings normales, solo es caracteristico de los Template Literales*/
  //console.log(mensaje3);
}

function _etiqueta(literales, ...sustituciones){
  /*Funcion tag para el ejemplo de templates literals con tags*/

  /*Esta función tag, va a evaluar el template literal y cambiarlo completamente
    antes de su asignación a la variable*/

  /*Nota:Toda función en JAVASCRIPT, regresa un undefined si no se especifica
    que valor retornara, y así mismo, siempre recibe argumentos aunque no se
    especifiquen. Siempre reciben un objeto llamada arguments*/

    console.log(literales);
    console.log(sustituciones);

    let resultado = "";

    for (let i =0 ; i < sustituciones.length; i++){
      resultado += literales[i];
      resultado += sustituciones[i];
    }

    /*  Esto permite un gran control en los templates literales */
  return resultado
}

function _returnNombreCompleto(){
  /*Practica de Template Literal*/
  return "David Alejandro Reyes Dominguez"
}
