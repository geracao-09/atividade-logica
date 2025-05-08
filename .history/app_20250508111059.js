const readline = require("readline-sync");

// Escreva um programa que solicite ao usuário um número de 1 a 7 e informe o dia correspondente da semana (por exemplo, 1 para segunda-feira, 2 para terça-feira, etc.).
// Descubra o dia da semana

// const diasDaSemana = () => {
//     const numero = Number(readline.question("Digite um número de 1 a 7"));
//     let nomeDia = "";
//     switch (numero) {
//         case 1:
//             nomeDia = "Domingo";
//             break;
//         case 2:
//             nomeDia = "Segunda";
//             break;
//         case 3:
//             nomeDia = "Terça";
//             break;
//         case 4:
//             nomeDia = "Quarta";
//             break;
//         case 5:
//             nomeDia = "Quinta";
//             break;
//         case 6:
//             nomeDia = "Sexta";
//             break;
//         case 7:
//             nomeDia = "Sábado";
//             break;
//         default:
//             console.log("numero invalido, digite um numero de 1 a 7");

//     }
//     console.log(`o dia é ${nomeDia}`);
// }
// diasDaSemana()

const diasDaSemana = () => {
  let registro = readline.questionInt("Digite um número maior que 0\n");
  let diasDaSemana = "segunda terça quarta quinta sexta sabado domingo";
  diasDaSemana = diasDaSemana.split(" ");
  registro = registro % 7;

  if (registro < 0) console.log("Digite um número maior que 0.");
  if (registro === 0) registro = 7;

  console.log(`Dia da semana: ${diasDaSemana[registro - 1]}`);
};

diasDaSemana();
// Escreva um algoritmo que construa um menu de cadastro com as opções:
// C) Create	(Cadastrar/Inserir)
// R) Read	(Buscar/Ler)
// U) Update	(Editar/Atualizar)
// D) Delete	(Excluir/Apagar)

const menuDeCadastro = () => {
  console.log(
    `
    C) Create	(Cadastrar/Inserir)
    R) Read	    (Buscar/Ler)
    U) Update	(Editar/Atualizar)
    D) Delete	(Excluir/Apagar)`
  );
  const menu = readline.question("Digite uma opção: ").toUpperCase();
  const listaFrutas = [];

  switch (menu) {
    case "C":
      const cadastro = readline.question("Digite a fruta que você quer inserir.\n");
      if (fruta.length <= 2) {
        console.log("Entrada inválida.");
        break;
      }
      listaFrutas.push(cadastro);
      console.log("Produto cadastrado.");
      break;
    case "R":
      const busca = readline.question("Digite a fruta que você deseja buscar.\n").toLowerCase();
      listaFrutas.includes(busca) ? `A ${busca} está na posição ${listaFrutas.indexOf(busca)}` : console.log("A fruta não está cadastrada.");
      break;
    case "U":
      const indiceAtt = readline.questionInt("Qual a posição que você quer atualizar.\n");
      if (listaFrutas[indiceAtt] !== undefined) {
        console.log(`A fruta cadastrada na posição ${indiceAtt} é a ${listaFrutas[indiceAtt]}.`);
        const atualizar = readline.question("Digite a nova fruta.\n");
        listaFrutas[indiceAtt] = atualizar;
        console.log("Atualizado com sucesso.");
        break;
      }
      console.log("Não há nenhum registro no indice desejado.");
      break;
    case "D":
      console.log(
        listaFrutas.forEach((fruta, i) => {
          console.log(`${i}: ${fruta}`);
        })
      );
      const indiceDel = readline.questionInt("Digite o indice da fruta que você deseja excluir.");

      if (listaFrutas[indiceDel] !== undefined) {
        const yesNo = readline.keyInYNStrict(`Você tem certeza que deseja excluir ${listaFrutas[indiceDel]}?`);
        if (yesNo) {
          listaFrutas.splice(listaFrutas[indiceDel], 1);
        } else {
          console.log("Operação cancelada.");
        }
        break;
      }
      console.log("Não há nenhum registro no indice desejado.");
      break;
    default:
      console.log("Opção inválida.");
  }
};
// Crie uma função vendaHotDogs que recebe n (quantidade de hotdogs). Dependendo da quantidade, o preço unitário varia:
// Quantidade de hotdogs
// Preço por unidade (centavos)
// n < 5
// 100
// 5 ≤ n < 10
// 95
// n ≥ 10
// 90

function vendaHotDogs(n) {
  let precoUnitario = 0.9;
  if (n < 5) precoUnitario = 1;
  else if (n < 10) precoUnitario = 0.95;

  return (n * precoUnitario).toFixed(2);
}

const quantidade = readline.questionInt("Quantos hot dogs deseja comprar?");

console.log(`total: ${vendaHotDogs(quantidade)}`);
// Escreva uma função que remova todas as vogais de uma string de entrada.
// Exemplo:
// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"

// const troca = () => {
//   const removerVogais = (texto) => {
//     return texto.replace(/[aeiouAEIOU]/g, "");
//   };

//   function iniciarRemocaoDeVogais() {
//     console.log("=== REMOÇÃO DE VOGAIS ===");

//     const entrada = readline.question("Digite uma frase: ");

//     const resultado = removerVogais(entrada);

//     console.log("\nFrase sem vogais: ");
//     console.log(resultado);
//   }

//   iniciarRemocaoDeVogais();
// };

// troca();

function removerVogais(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}
let frase = readline.question("Digite uma frase para remover as vogais: ");
let resultado = removerVogais(frase);
console.lo

// Faça uma função em que receba três argumentos
// Dois números
// operador aritmético
// A partir desta função retorne o cálculo desejado com os dois números
// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

// Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor damulta, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

// Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

// Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:

// Carros populares
// Até 100 Km percorridos: R$ 0,20 por Km
// Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// Até 200 Km percorridos: R$ 0,30 por Km
// Acima de 200 Km percorridos: R$ 0,25 por Km

// BONUS:
// Escreva uma função que receba uma array  de numeros como argumento, a partir dela, retorne :
// A soma dos numeros
// Os numeros pares dentro da array
// A media dos numeros
// A ordem crescente dos numeros
