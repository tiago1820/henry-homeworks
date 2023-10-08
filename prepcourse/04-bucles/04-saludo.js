const saludo = (idioma) => {
    const saludos = {
        aleman: "Guten Tag!",
        mandarin: "Ni Hao!",
        ingles: "Hello!"
    };

    return saludos[idioma] || "Hola!";
}

console.log(saludo("aleman"));