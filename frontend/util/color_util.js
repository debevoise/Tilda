const createHexColor = () => {
    let color = '#'

    const hexValues = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e"
    ];

    for (let index = 0; index < 6; index++) {
        let randNum = Math.floor(Math.random() * 14)
        let digit = hexValues[randNum]
        color += digit;
    }

    return color;
}

export const generateGradient = () => {
    let direction = Math.floor(Math.random() * 360);
    let color1 = createHexColor();
    let color2 = createHexColor();

    let gradient = "linear-gradient(" + direction + "deg, " + color1 + ", " + color2 + ")";
    return gradient;
}

