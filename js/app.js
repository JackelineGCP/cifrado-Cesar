// creando la primera función llamada Cifrado
function cipher (text){
   var phrase = prompt("Ingrese una frase");
   array = text.split(""); //convierte el texto a un array
   newArray= array.splice(0,7);
   dobleNewArray= array.concat(newArray); //Unimos arrays
   finalText= dobleNewArray.join("");// Transformamos arrays a String

//Validamos, si tipo de texto es igual a una cadena String, devolver mensaje, sino error
   if ( typeof(text) === typeof("h")){
     return ("Texto original es " + text + "\n" + " texto cifrado es : "+ finalText);
         }  return alert("Error");

}
cipher("abcdefgh")

//Creando la segunda funcion llamada Decifrado
function decipher (text1){
  

}
