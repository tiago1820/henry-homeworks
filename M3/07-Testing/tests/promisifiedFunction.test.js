const { promisifiedFunction } = require("../index");

beforeAll(() => {
    console.log(
        "Me conecto a una BDD a la que pediré información"
    );
});

afterAll(() => {
    console.log("Cierro la conexión");
});

xdescribe("PromisifiedFunction", ()=>{
    it("Debe resolverse al valor OK", () => {
        return promisifiedFunction().then((value) => {
            expect(value).toEqual("OK");
        });
    });
});