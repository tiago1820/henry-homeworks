/*********** Yo explico `exerciseUtils` ********
 *
 * excersiceUtils es una variable que viene de un archivo en este repo
 * El archivo `./utils` esta en este nivel y se llama `utils.js`
 *
 * Este archivo crea un `promisifiedReadFile` - FIJATE EN ÉL!!!
 *
 * Las funciones `blue` y `magenta` para mantener tu código DRY
 *
 ***********************************************/

"use strict";

let exerciseUtils = require("./utils");
let args = process.argv.slice(2).map(function (st) {
    return st.toUpperCase();
});

module.exports = {
    problemA: problemA,
    problemB: problemB,
    problemC: problemC,
    problemD: problemD,
    problemE: problemE,
    problemF: problemF,
};

args.forEach(function (arg) {
    var problem = module.exports["problem" + arg];
    if (problem) problem();
});

async function problemA() {

    try {
        const stanza = await exerciseUtils.promisifiedReadFile("poem-one/stanza-01.txt");
        console.log("-- A. versión async/await --");
        exerciseUtils.blue(stanza);
    } catch (error) {
        throw new Error("problemA | No se llamó a la stanza correcta");
    }
}

async function problemB() {
    const stanza2 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt");
    console.log("-- B. versión Async Await (segunda estrofa) --");
    exerciseUtils.blue(stanza2);

    const stanza3 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt");
    console.log("-- B. versión Async Await (tercera estrofa) --");
    exerciseUtils.blue(stanza3);
}

async function problemC() {
    try {
        const stanza2 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt");
        console.log("-- C. Versión async/await (segunda estrofa) --");
        exerciseUtils.blue(stanza2);

        const stanza3 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt");
        console.log("-- C. Versión async/await (tercera estrofa) --");
        exerciseUtils.blue(stanza3);

        console.log("-- C. Versión async/await finalizada --");
    } catch (err) {
        console.error(err);
    }
}

async function problemD() {
    try {
        const stanza4 = await exerciseUtils.promisifiedReadFile("poem-one/wrong-file-name.txt");
        console.log("-- D. Versión async/await (cuarta estrofa) --");
        exerciseUtils.blue(stanza4);
    } catch (err) {
        exerciseUtils.magenta(new Error(err));
    }
}

async function problemE() {
    try {
        const stanza3 = await exerciseUtils.promisifiedReadFile("poem-one/stanza-03.txt");
        console.log("-- E. Versión async/await (tercera estrofa) --");
        exerciseUtils.blue(stanza3);
        const stanza4 = await exerciseUtils.promisifiedReadFile("poem-one/wrong-file-name.txt");
        console.log("-- E. Versión async/await (cuarta estrofa) --");
        exerciseUtils.blue(stanza4);
    } catch (err) {
        exerciseUtils.magenta(err);
    }
}

async function problemF() {
    try {
        await exerciseUtils.blue(await exerciseUtils.promisifiedReadFile("stanza-03.txt"));
        await exerciseUtils.blue(await exerciseUtils.promisifiedReadFile("stanza-04.txt"));
    } catch (error) {
        exerciseUtils.magenta(error);
    } finally {
        console.log("done");
    }
}