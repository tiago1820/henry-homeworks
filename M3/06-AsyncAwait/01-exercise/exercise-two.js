"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
    return st.toUpperCase();
});

module.exports = {
    problemAx: problemA,
    problemBx: problemB,
    problemCx: problemC,
    problemDx: problemD,
};

args.forEach(function (arg) {
    let problem = module.exports["problem" + arg];
    if (problem) problem();
});

async function problemA() {
    const promises = [
        exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt"),
        exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt")
    ];

    await Promise.all(promises.map(promise => promise.then(exerciseUtils.blue)));

    console.log('done');
}

async function problemB() {
    let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
        return "poem-two/" + "stanza-0" + n + ".txt";
    });

    try {
        let stanzas = await Promise.all(filenames.map(filename => exerciseUtils.promisifiedReadFile(filename)));
        stanzas.forEach(stanza => exerciseUtils.blue(stanza));
        console.log('done');
    } catch (err) {
        console.error(err);
    }
}

async function problemC() {
    let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
        return "poem-two/" + "stanza-0" + n + ".txt";
    });

    try {
        for (let filename of filenames) {
            let stanza = await exerciseUtils.promisifiedReadFile(filename);
            exerciseUtils.blue(stanza);
        }
        console.log('done');
    } catch (err) {
        console.error(err);
    }
}

async function problemD() {
    let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
        return "poem-two/" + "stanza-0" + n + ".txt";
    });
    let randIdx = Math.floor(Math.random() * filenames.length);
    filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

    try {
        for (let filename of filenames) {
            try {
                let stanza = await exerciseUtils.promisifiedReadFile(filename);
                exerciseUtils.blue(stanza);
            } catch (err) {
                exerciseUtils.magenta(new Error(err));
            }
        }
        console.log('done');
    } catch (err) {
        console.error(err);
    }
}