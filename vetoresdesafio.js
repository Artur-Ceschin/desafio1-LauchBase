//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const programmer = {
  name: "Carlos",
  age: 32,
  technologies: [
    { name: "C++", speciality: "Desktop" },
    { name: "Python", speciality: "Data Science" },
    { name: "Javascript", speciality: "Web/Mobile" },
  ],
};
console.log(
  `O usário ${programmer.name} tem ${programmer.age} e usa a tecnologia ${programmer.technologies[0].name} com especialidade em ${programmer.technologies[0].speciality}`,
);
