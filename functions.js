//Functions Aula
//Estruturas de repetição
//Escopo

const student = [
  {
    name: "Artur",
    nota: 8.8,
  },
  {
    name: "Fernanda",
    nota: 3,
  },
  {
    name: "Maria",
    nota: 5,
  },
  {
    name: "Petra",
    nota: 8,
  },
];

const student2 = [
  {
    name: "Pedro",
    nota: 9.8,
  },
  {
    name: "Carla",
    nota: 6,
  },
  {
    name: "Silvia",
    nota: 5,
  },
  {
    name: "João",
    nota: 5,
  },
];

function calculaMedia(student) {
  let soma = 0;
  for (let i = 0; i < student.length; i++) {
    soma = soma + student[i].nota;
  }
  const media = soma / student.length;
  return media;
}
const media1 = calculaMedia(student);
const media2 = calculaMedia(student2);

function sendMessage(media, class) {
  if (media > 6) {
    console.log(`A media da classe ${class} foi ${media}.`);
  } else {
    console.log(`A média da classe ${class} foi menor que 6`);
  }
}

sendMessage(media1, "classA");
sendMessage(media2, "classB");


