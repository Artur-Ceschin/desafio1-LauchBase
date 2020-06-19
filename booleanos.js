//Functions Aula
//Estruturas de repetição
//Escopo

const alunosTurmaA = [
  {
    nome: "Artur",
    nota: 8.8,
  },
  {
    nome: "Fernanda",
    nota: 3,
  },
  {
    nome: "Maria",
    nota: 5,
  },
  {
    nome: "Petra",
    nota: 8,
  },
];

const alunosTurmaB = [
  {
    nome: "Pedro",
    nota: 9.8,
  },
  {
    nome: "Carla",
    nota: 6,
  },
  {
    nome: "Silvia",
    nota: 5,
  },
  {
    nome: "João",
    nota: 5,
  },
];

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }
  const media = soma / alunos.length;
  return media;
}
const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);

function enviaMensagem(media, turma) {
  if (media > 6) {
    console.log(`A media da turma ${turma} foi ${media}.`);
  } else {
    console.log(`A média da turma ${turma} foi menor que 6`);
  }
}

enviaMensagem(media1, "TurmaA");
enviaMensagem(media2, "TurmaB");

function marcarComoReprovado(alunos) {
  for (let aluno of alunos) {
    aluno.reprovado = false;
    if (aluno.nota < 6) {
      aluno.reprovado = true;
    }
  }
}

marcarComoReprovado(alunosTurmaA);

function enviarMensagemReprovado(aluno) {
  if (aluno.nota) {
    console.log(`O Aluno ${aluno.nome} está reprovado`);
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno);
  }
}

alunoReprovado(alunosTurmaA);
alunoReprovado(alunosTurmaB);
