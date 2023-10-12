'use strict';

function $Promise(executor) {
    if (typeof executor !== "function")
        throw TypeError("Executor must be a function");
    this._state = "pending";
    this._value = undefined;
    this._handlerGroups = [];
    const resolve = (value) => {
        this._internalResolve(value);
    };
    const reject = (reason) => {
        this._internalReject(reason);
    };
    executor(resolve, reject);
}

$Promise.prototype._internalResolve = function (value) {
    if (this._state !== "pending") return;
    if (value && (typeof value === "object" || typeof value === "function")) {
        if (typeof value.then === "function") {
            value.then(
                this._internalResolve.bind(this),
                this._internalReject.bind(this)
            );
            return;
        }
    }
    this._state = "fulfilled";
    this._value = value;
    this._callHandlers();
};

$Promise.prototype._internalReject = function (reason) {
    if (this._state !== "pending") return;
    this._state = "rejected";
    this._value = reason;
    this._callHandlers();
};

$Promise.prototype.then = function (successCb, errorCb) {
    const downstreamPromise = new $Promise(() => { });
    const handlerGroup = {
        downstreamPromise,
        successCb: typeof successCb === "function" ? successCb : false,
        errorCb: typeof errorCb === "function" ? errorCb : false,
    };
    this._handlerGroups.push(handlerGroup);
    if (this._state !== "pending") {
        this._callHandlers();
    }
    return downstreamPromise;
};

$Promise.prototype._callHandlers = function () {
    while (this._handlerGroups.length) {
        const currentHandler = this._handlerGroups.shift();
        if (this._state === "fulfilled") {
            if (currentHandler.successCb) {
                try {
                    const x = currentHandler.successCb(this._value);
                    currentHandler.downstreamPromise._internalResolve(x);
                } catch (e) {
                    currentHandler.downstreamPromise._internalReject(e);
                }
            } else {
                currentHandler.downstreamPromise._internalResolve(this._value);
            }
        } else if (this._state === "rejected") {
            if (currentHandler.errorCb) {
                try {
                    const x = currentHandler.errorCb(this._value);
                    currentHandler.downstreamPromise._internalResolve(x);
                } catch (e) {
                    currentHandler.downstreamPromise._internalReject(e);
                }
            } else {
                currentHandler.downstreamPromise._internalReject(this._value);
            }
        }
    }
};

$Promise.prototype.catch = function (errorHandler) {
    return this.then(null, errorHandler);
};

$Promise.resolve = function (value) {
    if (value instanceof this) return value;
    return new $Promise((resolve) => resolve(value));
};

$Promise.all = function (promises) {
    if (!Array.isArray(promises)) {
        throw new TypeError("The argument must be an array");
    }
    return new $Promise((resolve, reject) => {
        let count = promises.length;
        const values = new Array(count);
        if (count === 0) resolve(values);
        promises.forEach((promise, i) => {
            this.resolve(promise).then(
                (value) => {
                    values[i] = value;
                    if (--count === 0) resolve(values);
                },
                (reason) => reject(reason)
            );
        });
    });
};

module.exports = $Promise;