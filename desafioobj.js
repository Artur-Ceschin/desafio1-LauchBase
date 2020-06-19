//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
const company = {
  name: "Rocketseat",
  color: "Roxo",
  focus: "Programação",
  address: {
    street: "Rua guilherme Gembala",
    number: 260,
  },
};
console.log(
  `A empresa ${company.name} está localizada em ${company.address.street}, ${company.address.number}`,
);
