const colors = (color) => {
    const colorMessages = {
        blue: "This is blue",
        red: "This is red",
        green: "This is green",
        orange: "This is orange",
    };

    return colorMessages[color] || "Color not found";
}

console.log(colors("orange"));