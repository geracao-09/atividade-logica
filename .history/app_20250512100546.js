const readline = require("readline-sync");

// Escreva um programa que solicite ao usuário um número de 1 a 7 e informe o dia correspondente da semana (por exemplo, 1 para segunda-feira, 2 para terça-feira, etc.).
// Descubra o dia da semana

const diasDaSemana = () => {
  const numero = Number(readline.question("Digite um número de 1 a 7"));
  let nomeDia = "";
  switch (numero) {
    case 1:
      nomeDia = "Domingo";
      break;
    case 2:
      nomeDia = "Segunda";
      break;
    case 3:
      nomeDia = "Terça";
      break;
    case 4:
      nomeDia = "Quarta";
      break;
    case 5:
      nomeDia = "Quinta";
      break;
    case 6:
      nomeDia = "Sexta";
      break;
    case 7:
      nomeDia = "Sábado";
      break;
    default:
      console.log("numero invalido, digite um numero de 1 a 7");
  }
  console.log(`o dia é ${nomeDia}`);
};
// diasDaSemana()

const diasDaSemana1 = () => {
  let registro = readline.questionInt("Digite um número maior que 0\n");
  let diasDaSemana = "segunda terça quarta quinta sexta sabado domingo";
  diasDaSemana = diasDaSemana.split(" ");
  registro = registro % 7;

  if (registro < 0) console.log("Digite um número maior que 0.");
  if (registro === 0) registro = 7;

  console.log(`Dia da semana: ${diasDaSemana[registro - 1]}`);
};

// diasDaSemana();
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

// const quantidade = readline.questionInt("Quantos hot dogs deseja comprar?");

// console.log(`total: ${vendaHotDogs(quantidade)}`);
// Escreva uma função que remova todas as vogais de uma string de entrada.
// Exemplo:
// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"

const troca = () => {
  const removerVogais = (texto) => {
    return texto.replace(/[aeiouAEIOU]/g, "");
  };

  function iniciarRemocaoDeVogais() {
    console.log("=== REMOÇÃO DE VOGAIS ===");

    const entrada = readline.question("Digite uma frase: ");

    const resultado = removerVogais(entrada);

    console.log("\nFrase sem vogais: ");
    console.log(resultado);
  }

  iniciarRemocaoDeVogais();
};

// troca();

function removerVogais(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}
// let frase = readline.question("Digite uma frase para remover as vogais: ");
// let resultado = removerVogais(frase);
// console.log("frase sem vogais:", resultado);

// Faça uma função em que receba três argumentos
// Dois números
// operador aritmético
// A partir desta função retorne o cálculo desejado com os dois números

function calculadora(numero1, numero2, operadorAritmetico) {
  switch (operadorAritmetico) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      if (numero2 === 0) {
        return "Operação Invalida";
      }
      return numero1 / numero2;
    case "%":
      return numero1 % numero2;
    default:
      return "operação invalida";
  }
}
// const numero1 = readline.questionInt("Digite um numero:")
// const numero2 = readline.questionInt("Digite o segundo numero:")
// const operadorAritmetico = readline.question("Digite um operador:")

// console.log(`Resultado: ${numero1} ${operadorAritmetico} ${numero2} = ${calculadora(numero1, numero2, operadorAritmetico)}`); */

// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
const listaNomes = () => {
  let nomes = [];
  let nomesInvertido = [];
  for (let i = 0; i < 7; i++) {
    let nome = readline.question(`Digite o nome da pessoa ${i + 1}:`);
    nomes.push(nome);
  }
  for (let i = 6; i >= 0; i--) {
    nomesInvertido.push(nomes[i]);
  }
  console.log("Nome das pessoas inversamente:");
  nomes.reverse().forEach((nome, index) => {
    console.log(`${index + 1}${nome}`);
  });
};

// Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

const jankenpo = () => {
  let vidasUsuario = 3;
  let vidasVegeta = 3;
  const opções = ['Pedra', 'Papel', 'Tesoura']

  const verificarVencedor = (escolhaUsuario, escolhaVegeta) => {
    if (escolhaUsuario === escolhaVegeta) return 0;

    const regras = {
      0: {vence: 2, perde: 1}
    }
  }
}

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
// Todos os numeros multiplicados por 2

const arrayMethods = (array, option) => {
  let resultado;
  switch (option) {
    // A soma dos numeros
    case 1:
      resultado = array.reduce((acc, num) => {
        acc + num;
      }, 0);
      break;
    // Os numeros pares dentro da array
    case 2:
      resultado = array.filter((n) => {
        n % 2 === 0;
      });
      break;
    // A media dos numeros
    case 3:
      resultado = array.reduce((acc, num) => {
        acc + num;
      }, 0);
      resultado = resultado / array.length;
      break;
    case 4:
      // A ordem crescente dos numeros
      resultado = array.sort((a, b) => a - b);
      break;
    case 5:
      // Todos os numeros multiplicados por 2
      resultado = array.map((numero) => {
        return numero * 2;
      });
      break;
  }
  return resultado;
};

const listaNumeros = [12, 5, 3, 9];

console.log(arrayMethods(listaNumeros, 2));

// Crie uma função que retorne a quantidade de itens de um array

const qtdItensArray = (array) => {
  return array.length;
};

// Crie uma função que retorne todos os números pares deste array [1,2,3,4,5,6,7,8,9,10]

const numerosPares = (array) => {
  return array.filter((n) => n % 2 === 0);
};

// Crie uma função que transforme frases de snake_case para camelCase

// Crie uma função que retorne "true" caso todos os itens de um array obedecerem a uma condição

// Crie uma função em que verifica a força da senha:
// - Letra Maiuscula
// - numero
// - caractere especial
// - minimo 8 careteres (obrigatorio)

// forte: 4 requisitos
// medio: pelo menos 3 requisitos
// fraca: 2 requisitos
// muito fraca: 1 requisito
// invalida: 0 requisitos

// Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const horarios = () => {
  let listasDeHorarios = [];

  while (listasDeHorarios.length < 5) {
    const registro = readline.question("Digite um horário (HH.MM.SS)");
    const arrayDeHorario = registro.split(".").map(Number);
    if (arrayDeHorario.length !== 3) {
      console.log("Registro inválido.");
      continue;
    }

    const [horas, minutos, segundos] = arrayDeHorario;

    if (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59) {
      listasDeHorarios.push({ horas, minutos, segundos });
      console.log("Horário registrado.");
    }
  }

  console.table(listasDeHorarios);
};

// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const contraCheque = () => {
  const listaFuncionarios = [];
  let continuar = true;

  while (continuar) {
    const registro = readline.question("Digite o nome e sobrenome, matricula e salario bruto (separados por ,)");
    const [nome, matriculaStr, salarioBrutoStr] = registro.split(",");
    const matricula = parseInt(matriculaStr);
    const salarioBruto = parseFloat(salarioBrutoStr).toFixed(2);
    const deducao = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - deducao;

    listaFuncionarios.push({ nome, matricula, salarioBruto, deducao, salarioLiquido });

    continuar = readline.keyInYNStrict("Deseja registrar outro?") ? true : false;
  }

  listaFuncionarios.map((funcionario) => {
    console.log(`
      Nome: ${funcionario.nome}
      Matricula: ${funcionario.matricula}
      Salario Bruto: R$${funcionario.salarioBruto}
      Dedução INSS: R$${funcionario.deducao.toFixed(2)}
      Salário Líquido: R$${funcionario.salarioLiquido.toFixed(2)}
      `);
  })
};

contraCheque()