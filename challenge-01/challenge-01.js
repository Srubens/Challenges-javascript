(function(){
	'use script';
	// Declarar uma variável chamada `myvar`, sem valor.
	let myvar;

	// Após declarada, atribua o valor 10 à variável `myvar`.
	myvar  = 10;
	console.log(myvar);

	// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
	let soma = 15 + 8;
	console.log(soma);

	// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
	soma++;
	console.log(soma);

	// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
	soma=soma*3;
	console.log(soma);

	// Qual é o valor da variável `soma` até aqui?
	72

	// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
	let souninja = true;
	console.log(souninja);

	// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
	let comida = ['arroz', 'feijão', 'ovo'];
	console.log(comida);

	// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
	console.log(comida[1]);

	// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
	soma == myvar;
	console.log('myvar é igual a soma? ');
	console.log(soma == myvar);

	// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
	myvar >= soma;
	console.log('myvar é menor que soma? ');
	console.log(myvar <= soma);

	/** Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne 
	 * o resultado da divisão entre eles.
	 */
	function divisao(A,B){
		return A/B;
	}

	// Invoque a função criada acima, passando os parâmetros 10 e 2.
	console.log(divisao(10,2));

})();