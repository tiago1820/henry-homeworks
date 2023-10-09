const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const request = require("../utils/request");

function pwd(print) {
    print(process.cwd());
}

function date(print) {
    print(Date());

}

function echo(print, args) {
    print(args);
}

function ls(print) {
    fs.readdir('./', (err, files) => {
        if (err) throw new Error(err);
        print(files.join(' '));
    });
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (err, data) => {
        if (err) throw new Error(err);
        print(data);
    });
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (err, data) => {
        if (err) throw new Error(err);
        print(data.split('\n').at(0));
        // for (let i = 0; i < 8; i++) {
        //     print(data.split('\n').at(i));
        // }
    })
}

function tail(print, args) {
    fs.readFile(args, 'utf-8', (err, data) => {
        if (err) throw new Error(err);
        print(data.split('\n').at(-1).trim());
    })
}

function curl(print, args) {
    utils.request(args, (err, response) => {
        if (err) return new Error(err);
        print(response);
    })
}

module.exports = {
    pwd, date, echo, ls, cat, head, tail, curl
};
