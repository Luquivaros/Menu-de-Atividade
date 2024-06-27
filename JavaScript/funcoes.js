/*EXERCÍCIO 01*/
function verificarAnoBissexto() {
    var ano = document.getElementById('ano').value;
    var resultado = document.getElementById('resultado');

    // Conversão do valor para inteiro
    ano = parseInt(ano);

    // Verificação de ano bissexto
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado.innerHTML = ano + " é um ano bissexto.";
        resultado.style.color = 'green';
    } else {
        resultado.innerHTML = ano + " não é um ano bissexto.";
        resultado.style.color = 'red';
    }
}

/*EXERCÍCIO 02*/
function calcularIMC() {
    // Obtém os valores de peso e altura dos campos de entrada
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado');

    // Certifica-se de que os valores de peso e altura foram inseridos
    if (!peso || !altura) {
        resultado.innerHTML = "Por favor, insira seu peso e altura.";
        resultado.style.color = 'red';
        return;
    }

    // Converte os valores de peso e altura para números de ponto flutuante
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // Calcula o IMC
    var imc = peso / (altura * altura);

    // Define a faixa de peso com base no IMC calculado
    var faixa;
    if (imc < 18.5) {
        faixa = "Abaixo do peso";
        resultado.style.color = 'orange';
    } else if (imc >= 18.5 && imc < 24.9) {
        faixa = "Peso normal";
        resultado.style.color = 'green';
    } else if (imc >= 25 && imc < 29.9) {
        faixa = "Sobrepeso";
        resultado.style.color = 'orange';
    } else {
        faixa = "Obeso";
        resultado.style.color = 'red';
    }

    // Exibe o IMC e a faixa de peso
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${faixa}).`;
}

/*EXERCÍCIO 03*/
function verificarNumero() {
    // Obtém o valor do campo de entrada
    var numero = document.getElementById('numero').value;
    var resultado = document.getElementById('resultado');

    // Verificação para garantir que um valor foi inserido
    if (numero === "") {
        resultado.innerHTML = "Por favor, insira um número.";
        resultado.style.color = 'red';
        return;
    }

    // Converte o valor de entrada para um número de ponto flutuante
    numero = parseFloat(numero);

    // Determina se o número é positivo, negativo ou zero
    if (numero > 0) {
        resultado.innerHTML = numero + " é um número positivo.";
        resultado.style.color = 'green';
    } else if (numero < 0) {
        resultado.innerHTML = numero + " é um número negativo.";
        resultado.style.color = 'orange';
    } else {
        resultado.innerHTML = "O número é zero.";
        resultado.style.color = 'blue';
    }
}

/*EXERCÍCIO 04*/
function verificarMaioridade() {
    // Obtém o valor da idade do campo de entrada
    var idade = document.getElementById('idade').value;
    var resultado = document.getElementById('resultado');

    // Verificação para garantir que um valor foi inserido
    if (idade === "") {
        resultado.innerHTML = "Por favor, insira sua idade.";
        resultado.style.color = 'red';
        return;
    }

    // Converte o valor de entrada para um número inteiro
    idade = parseInt(idade);

    // Verifica se a idade é maior ou igual a 18
    if (idade >= 18) {
        resultado.innerHTML = "Você é maior de idade.";
        resultado.style.color = 'green';
    } else {
        resultado.innerHTML = "Você é menor de idade.";
        resultado.style.color = 'blue';
    }
}

/*EXERCÍCIO 05*/
function verificarMaiorNumero() {
    // Obtém os valores dos três campos de entrada
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var numero3 = document.getElementById('numero3').value;
    var resultado = document.getElementById('resultado');

    // Verificação para garantir que todos os valores foram inseridos
    if (numero1 === "" || numero2 === "" || numero3 === "") {
        resultado.innerHTML = "Por favor, insira todos os três números.";
        resultado.style.color = 'red';
        return;
    }

    // Converte os valores de entrada para números de ponto flutuante
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    numero3 = parseFloat(numero3);

    // Determina o maior número
    var maiorNumero = Math.max(numero1, numero2, numero3);

    // Exibe o maior número
    resultado.innerHTML = `O maior número é ${maiorNumero}.`;
    resultado.style.color = 'green';
}

/*EXERCÍCIO 06*/
function calcularMediaPonderada() {
    // Obtém os valores das notas e dos pesos dos campos de entrada
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var peso1 = parseFloat(document.getElementById('peso1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var peso2 = parseFloat(document.getElementById('peso2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var peso3 = parseFloat(document.getElementById('peso3').value);
    var resultado = document.getElementById('resultado');

    // Verificação para garantir que todos os valores foram inseridos
    if (isNaN(nota1) || isNaN(peso1) || isNaN(nota2) || isNaN(peso2) || isNaN(nota3) || isNaN(peso3)) {
        resultado.innerHTML = "Por favor, insira todas as notas e seus respectivos pesos.";
        resultado.style.color = 'red';
        return;
    }

    // Calcula a média ponderada
    var somaPesos = peso1 + peso2 + peso3;
    var mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / somaPesos;

    // Exibe a média ponderada
    resultado.innerHTML = `A média ponderada é ${mediaPonderada.toFixed(2)}.`;
    resultado.style.color = 'green';
}

/*EXERCÍCIO 07*/
function verificarAprovacao() {
    // Obtém os valores das notas dos campos de entrada
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var resultado = document.getElementById('resultado');

    // Verificação para garantir que ambos os valores foram inseridos
    if (isNaN(nota1) || isNaN(nota2)) {
        resultado.innerHTML = "Por favor, insira as notas de ambas as disciplinas.";
        resultado.style.color = 'red';
        return;
    }

    // Verifica a aprovação em ambas, uma ou nenhuma das disciplinas
    if (nota1 >= 7 && nota2 >= 7) {
        resultado.innerHTML = "Você foi aprovado em ambas as disciplinas.";
        resultado.style.color = 'green';
    } else if (nota1 >= 7 || nota2 >= 7) {
        resultado.innerHTML = "Você foi aprovado em uma das disciplinas.";
        resultado.style.color = 'orange';
    } else {
        resultado.innerHTML = "Você foi reprovado em ambas as disciplinas.";
        resultado.style.color = 'red';
    }
}

/*EXERCÍCIO 08*/
function contarParesImpares() {
    // Array para armazenar os 10 números inseridos pelo usuário
    var numeros = [];
    for (var i = 1; i <= 10; i++) {
        var numero = parseInt(document.getElementById('numero' + i).value);
        // Verificação para garantir que todos os valores foram inseridos
        if (isNaN(numero)) {
            document.getElementById('resultado').innerHTML = "Por favor, insira todos os 10 números.";
            document.getElementById('resultado').style.color = 'red';
            return;
        }
        numeros.push(numero);
    }

    // Inicializa contadores para pares e ímpares
    var pares = 0;
    var impares = 0;

    // Loop através dos números para contar pares e ímpares
    for (var j = 0; j < numeros.length; j++) {
        if (numeros[j] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    // Exibe a contagem de números pares e ímpares
    document.getElementById('resultado').innerHTML = `Pares: ${pares}, Ímpares: ${impares}.`;
    document.getElementById('resultado').style.color = 'green';
}

/*EXERCÍCIO 09*/
function calcularFatorial() {
    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');

    // Verifica se o número fornecido é um inteiro positivo
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        resultado.innerHTML = "Por favor, digite um número inteiro positivo.";
        resultado.style.color = 'red';
        return;
    }

    // Calcula o fatorial
    var fatorial = 1;
    for (var i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    // Exibe o resultado do fatorial
    resultado.innerHTML = `O fatorial de ${numero} é ${fatorial}.`;
    resultado.style.color = 'green';
}

/*EXERCÍCIO 10*/
function gerarFibonacci() {
    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');

    // Verifica se o número fornecido é um inteiro positivo
    if (isNaN(numero) || numero < 1 || !Number.isInteger(numero)) {
        resultado.innerHTML = "Por favor, digite um número inteiro positivo.";
        resultado.style.color = 'red';
        return;
    }

    // Gera a sequência de Fibonacci até o número fornecido
    var fibonacci = [0, 1];
    for (var i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    // Exibe o resultado da sequência de Fibonacci gerada
    resultado.innerHTML = `Sequência de Fibonacci até ${numero}: ${fibonacci.join(', ')}`;
    resultado.style.color = 'green';
}

/*EXERCÍCIO 11*/
function inverterNumero() {
    // Obtém o número digitado pelo usuário
    var numero = document.getElementById('numero').value;
    var resultado = document.getElementById('resultado');

    // Verifica se o número fornecido é válido
    if (isNaN(numero) || numero === '') {
        resultado.innerHTML = "Por favor, digite um número inteiro.";
        resultado.style.color = 'red';
        return;
    }

    // Converte o número para string e inverte os caracteres
    var numeroInvertido = numero.split('').reverse().join('');

    // Exibe o número invertido
    resultado.innerHTML = `O inverso de ${numero} é ${numeroInvertido}.`;
    resultado.style.color = 'green';
}

/*EXERCÍCIO 12*/
// Armazenar as notas
var notas = [];

// Função para adicionar nota à lista
function adicionarNota() {
    var nota = parseFloat(document.getElementById('nota').value);
    var notasDiv = document.getElementById('notas');
    var resultado = document.getElementById('resultado');

    // Limpa a mensagem de resultado anterior
    resultado.innerHTML = '';

    // Verifica se a nota é -1 para finalizar a entrada
    if (nota === -1) {
        if (notas.length === 0) {
            resultado.innerHTML = "Nenhuma nota foi adicionada.";
            resultado.style.color = 'red';
        } else {
            resultado.innerHTML = "Para calcular a média, clique no botão 'Calcular Média'.";
            resultado.style.color = 'green';
        }
        return;
    }

    // Verifica se a nota fornecida é válida
    if (isNaN(nota) || nota < -1 || nota > 10) {
        resultado.innerHTML = "Por favor, digite uma nota válida entre 0 e 10.";
        resultado.style.color = 'red';
        return;
    }

    // Adiciona a nota ao array e exibe as notas na página
    notas.push(nota);
    notasDiv.innerHTML = `Notas adicionadas: ${notas.join(', ')}`;
    document.getElementById('nota').value = '';
}

// Função para calcular a média das notas
function calcularMedia() {
    var resultado = document.getElementById('resultado');

    if (notas.length === 0) {
        resultado.innerHTML = "Nenhuma nota foi adicionada.";
        resultado.style.color = 'red';
        return;
    }

    // Calcula a média das notas
    var soma = notas.reduce((total, nota) => total + nota, 0);
    var media = soma / notas.length;

    // Exibe o resultado da média
    resultado.innerHTML = `A média das notas é ${media.toFixed(2)}.`;
    resultado.style.color = 'green';
}

/*EXERCÍCIO 13*/
function encontrarNumerosPerfeitos() {
    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');

    // Limpa a mensagem de resultado anterior
    resultado.innerHTML = '';

    // Verifica se o número fornecido é um inteiro positivo
    if (isNaN(numero) || numero < 1) {
        resultado.innerHTML = "Por favor, digite um número inteiro positivo.";
        resultado.style.color = 'red';
        return;
    }

    // Função para verificar se um número é perfeito
    function ehNumeroPerfeito(n) {
        var somaDivisores = 0;
        for (var i = 1; i <= n / 2; i++) {
            if (n % i === 0) {
                somaDivisores += i;
            }
        }
        return somaDivisores === n;
    }

    // Encontra todos os números perfeitos até o número fornecido
    var numerosPerfeitos = [];
    for (var i = 1; i <= numero; i++) {
        if (ehNumeroPerfeito(i)) {
            numerosPerfeitos.push(i);
        }
    }

    // Exibe os números perfeitos encontrados ou uma mensagem se não houver nenhum
    if (numerosPerfeitos.length > 0) {
        resultado.innerHTML = `Números perfeitos até ${numero}: ${numerosPerfeitos.join(', ')}`;
        resultado.style.color = 'green';
    } else {
        resultado.innerHTML = `Não há números perfeitos até ${numero}.`;
        resultado.style.color = 'orange';
    }
}
