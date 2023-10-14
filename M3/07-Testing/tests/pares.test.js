const { pares } = require("../index");

xdescribe("La función pares", () => {
    it("Debe ser una función", () => {
        expect(typeof pares).toBe("function");
    });

    it("Debe recibir una array como parámetro o arrojar un error", () => {
        expect(() => pares(5)).toThrow("Debe ser un array");
        expect(() => pares("Holis")).toThrow("Debe ser un array");
        expect(() => pares({})).toThrow("Debe ser un array");
    });

    it("Debe retornar un nuevo array con los números pares", () => {
        expect(pares([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([2, 4, 6, 8]);
        expect(pares([10, 20, 30, 40, 50, 60, 70, 80, 90])).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90]);
        expect(pares([])).toEqual([]);
        expect(pares([1,3,5,7,9])).toEqual([]);

    });
});