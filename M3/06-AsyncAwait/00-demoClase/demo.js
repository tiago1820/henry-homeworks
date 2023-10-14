const axios = require("axios");

const miFunction = async () => {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
};

miFunction();
console.log(miFunction()); // retorna pending
//La ejecucion de una funcion async, me retorna una promesa.
//una funcion async es una PROMESA.
//
//

/*CASOS DE USOS Y COMPARACIONES DE EJEMPLOS

-------------------------------------------------------
// axios.get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res.data));
//CASO 1:
const miFunction = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
    // VA A ESPERAR, Y Guarda en response, el resultado de la resolucion.
    //OJO, SI DEMORA HAY QUE ESPERAR.
  );
  console.log(response);
};
miFunction();

--------------------------------------------------------

// CASO 2:
const miFunction2 = async () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
    "https://jsonplaceholder.typicode.com/users/4",
    "https://jsonplaceholder.typicode.com/users/5",
  ];
  let responses = [];
  for (let i = 0; i < urls.length; i++) {
    let data = await axios.get(urls[i]);
    // Si no tuviese el await seria mas rapido. pero me resolveria todo en pending.
    //Lo que haria que todo lo que esta en mi responses fuesen undefined.
    responses.push(data);
    console.log("listo");
  }
  console.log("fin");
  console.log(responses);
};
miFunction2();

----------------------------------------------------------------------

//CASO 3
const miFunction3 = async () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
    "https://jsonplaceholder.typicode.com/users/4",
    "https://jsonplaceholder.typicode.com/users/5",
  ];
  let results = [];
  const arrayPromesas = urls.map((url) => axios.get(url));
  Promise.all(arrayPromesas) //recibe un array de promesa; resuelve todas las promesas del array.
    .then((responses) => {
      // array de respuestas
      responses.forEach((response) => {
        results.push(response.data);
      });
    })
    .then((response) => console.log(results));
};
miFunction3();
*/
