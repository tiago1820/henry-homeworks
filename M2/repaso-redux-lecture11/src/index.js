const { createStore } = require("redux");
const contadorReducer = require("./reducer");
const { incremento, decremento } = require("./actions");

const store = createStore(contadorReducer);

const valor = document.querySelector("#valor");

const renderContador = () => {
    let counter = store.getState().contador;
    valor.innerHTML = counter;
}

renderContador();

store.subscribe(renderContador);

const incrementoBtn = document.querySelector("#incremento");
const decrementoBtn = document.querySelector("#decremento");
incrementoBtn.addEventListener("click", () => store.dispatch(incremento()));
decrementoBtn.addEventListener("click", () => store.dispatch(decremento()));