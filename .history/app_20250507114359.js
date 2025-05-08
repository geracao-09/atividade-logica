const readline = require("readline-sync");

// Escreva um programa que solicite ao usuário um número de 1 a 7 e informe o dia correspondente da semana (por exemplo, 1 para segunda-feira, 2 para terça-feira, etc.).
// Descubra o dia da semana

// Escreva um algoritmo que construa um menu de cadastro com as opções:
// C) Create	(Cadastrar/Inserir)
// R) Read	(Buscar/Ler)
// U) Update	(Editar/Atualizar)
// D) Delete	(Excluir/Apagar)

// console.log("Escolha uma opcao\n C) CREATE\n R) READ\n U) UPDATE\n");
const menuCad = ()=> {
const opcao = readline.question("Digite sua opção").toUpperCase();


    switch (opcao){
        case "C":
        console.log("Cadastrar");
        break;
        case "R":
        console.log("Leia");
        break;
        case "U":
        console.log("Atualize");
        break;
        case "D":
        console.log("Exclua");
        break;
        default:
        console.log("Escolha uma opção válida, C, R, U ou D");
    }

}
menuCad()




// Crie uma função vendaHotDogs que recebe n (quantidade de hotdogs). Dependendo da quantidade, o preço unitário varia:
// Quantidade de hotdogs
// Preço por unidade (centavos)
// n < 5
// 100
// 5 ≤ n < 10
// 95
// n ≥ 10
// 90

// Escreva uma função que remova todas as vogais de uma string de entrada.
// Exemplo:
// "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
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