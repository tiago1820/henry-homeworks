const { sumar } = require("../index");

beforeEach(()=> {
    console.log("Esto lo hará antes de cada test");
});

xdescribe("La funcion sumar", () => {
    it("Debe ser una funcion", () => {
        expect(typeof sumar).toBe("function");
        expect(typeof sumar).not.toBe("number");
        expect(typeof sumar).not.toBe("string");
    });

    it("Debe arrojar un error en caso de recibir algo que no sea un numero", () => {
        expect(() => sumar("holis", "tukis")).toThrow(
            "Los parametros deben ser números"
        );
        expect(() => sumar(5, "tukis")).toThrow("Los parametros deben ser números");
        expect(() => sumar("holis", 10)).toThrow("Los parametros deben ser números");
        expect(() => sumar(5, null)).toThrow("Los parametros deben ser números");
    });

    it("Debe retornar el resultado de la suma correctamente", () => {
        expect(sumar(4, 5)).toBe(9);
        expect(sumar(4, 9)).toBe(13);
        expect(sumar(9, 9)).toBe(18);
        expect(sumar(0, 0)).toBe(0);
        expect(sumar(10, -10)).toBe(0);
    });
});