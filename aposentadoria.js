const nome = "Artur ceschin";
const sexo = "M";
const idade = 55;
const contribuicao = 33;

if (sexo == "F") {
  if (contribuicao >= 35) {
    console.log(`${nome} tem direito a aposentadoria`);
  } else {
    var conta = 35 - contribuicao;
    console.log(`Ainda não pode se aposentar mas faltam ${conta}`);
  }
}

if (sexo == "M") {
  if (contribuicao >= 30) {
    console.log(`${nome} tem direito a aposentadoria`);
  } else {
    var conta = 30 - contribuicao;
    console.log(`${nome} ainda não aposentadoria mas faltam ${conta}`);
  }
}
