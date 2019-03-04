(function (){

	/*
	Declare uma variável chamada `sum` e atribua a ela uma função chamada
	`calculateSum`. A função deve receber dois parâmetros e retornar a soma
	desses parâmetros.
	*/
	let sum = function calculateSum(a, b){
		return a + b;
	}

	console.log(sum(80,7));

	/*
	Invoque a função criada acima, passando dois números que serão somados, e mostre
	o resultado no console, com a frase:
	"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
	*/
	let a = 20;
	let b = 25;
	console.log(`A soma de ${a} e ${b} é igual a ${sum(a,b)} .`);

	/*
	Mostre no console o nome da função criada acima, com a frase:
	"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
	*/
	console.log(`O nome da função que faz a soma é ${sum.name}.`);

	/*
	Crie uma função literal chamada `showName`. Essa função deve retornar o
	seu nome.
	*/
	function showName(){
		return 'Rubens Filipe';
	}

	/*
	Declare uma variável chamada `varShowName` que recebe a função criada acima.
	*/
	let varShowName = showName();
	console.log(varShowName);

	/*
	Usando a variável criada acima, mostre no console o nome e o retorno da função
	atribuída a ela, com a seguinte frase:
	"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
	*/
	console.log(`A função ${showName.name} retorna ${varShowName}.`);

	/*
	Crie uma função literal chamada `calculator`, que funcione assim:
	- A função deve receber um parâmetro que dirá qual operação matemática ela
	vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
	- Essa função deve retornar uma segunda função que fará o seguinte:
	  - Essa segunda função deve receber dois parâmetros;
	  - Esses dois parâmetros serão os operandos usados na operação matemática;
	  - O retorno dessa segunda função é a operação matemática completa, com a frase:
	  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
	  - Se o operador não for válido, retornar a frase:
	  "Operação inválida."
	*/
	function calculator(param){
		return (a,b) =>{
			let total;
			switch(param){
				case '+':
					total = a + b;
				break;
				case '-':
					total = a - b;
				break;
				case '*':
					total = a * b;
				break;
				case '/':
					total = a / b;
				break;
				case '%':
					total = a % b;
				break;
				default:
					return 'Operação inválida!';
				break;
			}
			return `Resultado da operação: ${a} ${param} ${b} = ${total}.`;
		}
	}

	/*
	Declare uma variável chamada `sum`, que receberá a função acima, passando como
	parâmetro o operador de soma.
	*/
	let soma = calculator('+');
	soma(12,12);


	/*
	Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
	*/
	console.log(soma(12,12));

	/*
	Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
	`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
	correto por parâmetro para cada uma delas.
	*/
	let subtraction = calculator('-'); 
	let multiplication = calculator('*');
	let division = calculator('/');
	let mod = calculator('%');

	/*
	Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
	no console.
	*/
	console.log(subtraction(4,3));
	console.log(multiplication(4,3));
	console.log(division(49,3));
	console.log(mod(42,3));

})();