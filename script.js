function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // Validation
    if (temp === "") {
        result.innerHTML = "❌ Please enter a number";
        return;
    }

    temp = parseFloat(temp);
    let convertedText = "";

    if (unit === "celsius") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        convertedText = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }
    else if (unit === "fahrenheit") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        convertedText = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }
    else if (unit === "kelvin") {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        convertedText = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    result.innerHTML = `Converted Temperature: <br>${convertedText}`;
}
