/* eslint-disable */
import "bootstrap";
import "./style.css";

//Es lo primero que ejecuta el navegador despues del HTML
window.onload = () => {
  //el boton en el HTML responde a un click
  document.querySelector("#btnNewExcuse");
  addEventListener("click", () => {
    //pone la excusa aleatoriamente en el DOM
    document.querySelector("#excuse").innerHTML = newExcuse();
  });
};

//funcion que genera excusas
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

  //devuelve la oracion concatenada
  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
};
