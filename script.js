const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

function obtenerNumeros() {
    if (numero1.value.trim() === "" || numero2.value.trim() === "") {
        resultado.textContent = "Escribe los dos números.";
        return null;
    }

    const a = Number(numero1.value);
    const b = Number(numero2.value);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        resultado.textContent = "Ingresa valores numéricos válidos.";
        return null;
    }

    return [a, b];
}

document.getElementById("sumar").addEventListener("click", function () {
    const numeros = obtenerNumeros();
    if (numeros === null) return;

    resultado.textContent = "Resultado: " + (numeros[0] + numeros[1]);
});

document.getElementById("restar").addEventListener("click", function () {
    const numeros = obtenerNumeros();
    if (numeros === null) return;

    resultado.textContent = "Resultado: " + (numeros[0] - numeros[1]);
});

document.getElementById("multiplicar").addEventListener("click", function () {
    const numeros = obtenerNumeros();
    if (numeros === null) return;

    resultado.textContent = "Resultado: " + (numeros[0] * numeros[1]);
});

document.getElementById("dividir").addEventListener("click", function () {
    const numeros = obtenerNumeros();
    if (numeros === null) return;

    if (numeros[1] === 0) {
        resultado.textContent = "No se puede dividir entre cero.";
        return;
    }

    resultado.textContent = "Resultado: " + (numeros[0] / numeros[1]);
});