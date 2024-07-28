const prompt = require("prompt-sync")();
const {
  criarCidade,
  listarCidades,
  atualizarCidade,
  removerCidade,
} = require("./cidade");
const {
  criarEstado,
  listarEstados,
  atualizarEstado,
  removerEstado,
} = require("./estado");
const {
  criarPais,
  listarPaises,
  atualizarPais,
  removerPais,
} = require("./pais");

while (true) {
  console.log(`
    1 - Criar País
    2 - Listar Países
    3 - Atualizar País
    4 - Remover País
    5 - Criar Estado
    6 - Listar Estados
    7 - Atualizar Estado
    8 - Remover Estado
    9 - Criar Cidade
    10 - Listar Cidades
    11 - Atualizar Cidade
    12 - Remover Cidade
    13 - Sair
  `);

  const opcao = prompt("Qual opção deseja? : ");

  switch (opcao) {
    case "1":
        criarPais();
      break;
    case "2":
        listarPaises();
      break;
    case "3":
        atualizarPais();
      break;
    case "4":
        removerPais();
      break;
    case "5":
      criarEstado();
      break;
    case "6":
      listarEstados();
      break;
    case "7":
      atualizarEstado();
      break;
    case "8":
      removerEstado();
      break;
    case "9":
        criarCidade();
      break;
    case "10":
        listarCidades();
      
      break;
    case "11":
        atualizarCidade();
      break;
    case "12":
        removerCidade();
      break;
    case "13":
      console.log("Saindo do programa. Até logo!");
      process.exit();
    default:
      console.log("Opção inválida, tente novamente.");
      break;
  }
}
