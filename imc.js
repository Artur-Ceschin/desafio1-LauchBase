//Calculo de IMC do desafio do Launch Base

const nome = "Artur";
const peso = 170;
const altura = 1.77;

const imc = peso / (altura * altura);

if (imc >= 30) {
  console.log(`${nome} Está acima do peso`);
}
if (imc < 29.9) {
  console.log(`Artur não está acima do peso`);
}
