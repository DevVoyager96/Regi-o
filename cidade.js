const prompt = require("prompt-sync")();
const { lerIndiceEstado } = require("./estado");

const cidades = [];

const lerIndiceCidade = () => {
  listarCidades();

  if (cidades.length > 0) {
    const indice = prompt("Digite o índice da cidade que você deseja atualizar: ") - 1;

    if (indice >= 0 && indice < cidades.length) {
      return indice;
    } else {
      console.log("Índice inválido");
    }
  }
};

const validarCidade = (cidade) => cidade.nome != "" && cidade.estado != undefined;

const modelo = () => {
  const nome = prompt("Digite o nome da cidade: ");
  const estado = lerIndiceEstado();

  if (validarCidade({ nome, estado })) {
    return { nome, estado };
  }

  console.log("Dados inválidos");
};

const criarCidade = () => {
  const cidade = modelo();

  if (cidade != undefined) {
    cidades.push(cidade);
    console.log("Cidade criada com sucesso");
  }
};

const listarCidades = () => {
  if (cidades.length == 0) {
    console.log("Nenhuma cidade está cadastrada");
  } else {
    cidades.forEach((cidade, indice) => {
      console.log(indice + 1, cidade);
    });
  }
};

const atualizarCidade = () => {
  const indice = lerIndiceCidade();

  if (indice != undefined) {
    const cidade = modelo();

    if (cidade != undefined) {
      cidades[indice] = cidade;
      console.log("Cidade atualizada com sucesso");
    }
  }
};

const removerCidade = () => {
  const indice = lerIndiceCidade();
  if (indice != undefined) {
    cidades.splice(indice, 1);
    console.log("Cidade removida com sucesso");
  }
};

module.exports = {
  criarCidade,
  listarCidades,
  atualizarCidade,
  removerCidade,
};
