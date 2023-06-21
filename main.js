// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let number1 = Number(prompt("Digite o primeiro número:"))
let number2 = Number(prompt("Digite o primeiro número:"))
result = number1 + number2
alert(result)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

//💡 Para saber o tipo de dado você pode usar o operador `typeof`
let indNumber = -580
if (
  typeof indNumber === "number" &&
  indNumber !== Infinity &&
  indNumber !== -Infinity
) {
  alert("É um número")
} else {
  alert("Não é um número")
}

// 4.Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let indString = "Thiago"
if (typeof indString === "string") {
  alert("É uma string")
} else {
  alert("Não é uma string")
}

// 5.Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let indBooleano = false
if (typeof indBooleano === "boolean") {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let subNumber1 = 15
let subNumber2 = 5
alert(subNumber1 - subNumber2)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let mulNumber1 = 5
let mulNumber2 = 5
alert(mulNumber1 * mulNumber2)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const divNumber1 = 150
const divNumber2 = 3
alert(divNumber1 / divNumber2)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let parNumber = 19.57
let verifyPair
let valorPair

parNumber = String(parNumber)

for (let char of parNumber) {
  verifyPair = char
}

if (
  verifyPair == 0 ||
  verifyPair == 2 ||
  verifyPair == 4 ||
  verifyPair == 6 ||
  verifyPair == 8
) {
  valorPair = "É um número par"
} else {
  valorPair = "Não é um número par"
}

alert(valorPair)

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let oddNumber = 19.56
let verifyOdd
let valorOdd

oddNumber = String(oddNumber)

for (let char of oddNumber) {
  verifyOdd = char
}

if (
  verifyOdd == 1 ||
  verifyOdd == 3 ||
  verifyOdd == 5 ||
  verifyOdd == 7 ||
  verifyOdd == 9
) {
  valorOdd = "É um número ímpar"
} else {
  valorOdd = "Não é um número ímpar"
}

alert(valorOdd)
