function verificarParOuImpar() {
    var numero = document.getElementById("numero").value;
    if (numero % 2 == 0) {
        document.getElementById("resultado:").innerHTML = numero + " é um número par.";
    } else {
        document.getElementById("resultado:").innerHTML = numero + " é um número ímpar.";
    }
}

function ordenarNumeros() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);

    var numeros = [num1, num2, num3, num4, num5];

    numeros.sort(function(a, b) {
        return b - a;
    });

    document.getElementById("resultado decrescente").innerHTML = "Números em ordem decrescente: " + numeros.join(", ");
}

function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    var imc = peso / (altura * altura);

    var resultado = "Seu Índice de Massa Corporal (IMC) é: " + imc.toFixed(2);

    if (isNaN(imc)) {
        resultado = "Por favor, insira valores válidos para altura e peso.";
    }

    document.getElementById("resultado IMC:").innerHTML = resultado;
}

function classificarTriangulo() {
    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoC = parseFloat(document.getElementById("ladoC").value);

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para os lados do triângulo.";
        return;
    }

    if (ladoA === ladoB && ladoB === ladoC) {
        document.getElementById("resultado").innerHTML = "É um triângulo equilátero.";
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
        document.getElementById("resultado").innerHTML = "É um triângulo isósceles.";
    } else {
        document.getElementById("resultado").innerHTML = "É um triângulo escaleno.";
    }
}
