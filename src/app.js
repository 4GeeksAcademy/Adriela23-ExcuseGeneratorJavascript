/* eslint-disable */
import "bootstrap";
import "./style.css";

//Esta es la primera funcion que ejecuta el navegador despues de ejecutar el HTML
window.onload = () => {
  //Esto hace que el boton del HTML responda a un click
  document.querySelector("#btnNewExcuse");
  addEventListener("click", () => {
    //Esto pone la excusa de forma aleatoria en el DOM, cada vez que se refresca la pagina
    document.querySelector("#excuse").innerHTML = newExcuse();
  });
};

//Esta funcion genera excusas concatenando un elementto de cada arreglo
let newExcuse = () => {
  //arreglo que define el quien de la oracion
  let who = [
    "A racoon",
    "A random guy",
    "The neighbor’s cat",
    "I couldn't help but"
  ];

  //arreglo que define el que de la oracion
  let what = [
    "stole my weekly report",
    "threw my keys",
    "hid my purse",
    "ate a pinecone"
  ];

  //arreglo que define el cuando de la oracion
  let when = [
    "in the middle of the night",
    "before I got inside the car",
    "during lunch time",
    "last weekend"
  ];

  //se usa Math.floor junto con Math.random para lanzar numeros aleatorios que sean enteros
  //luego el numero aleatorio se multiplica por la longitud del arreglo
  //y ese valor representa la palabra que se mostrara
  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  //aqui la funcion devuelve la oracion concatenada
  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
};
