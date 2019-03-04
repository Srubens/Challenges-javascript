(function(){
	/*
	Crie um array com 5 items (tipos variados).
	*/
	let myArr = ['a', 2, true, {name:'rubens'}, function myfunc(){ return 'ola rubens'; }];
	// console.log(myArr);

	/*
	Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
	A função deverá retornar o array atualizado.
	*/
	function addItem(value){
		myArr.push(value);
		return myArr;
	}

	console.log(addItem(5));

	/*
	Adicione um novo array ao array criado no início do desafio, com ao menos 3
	itens de tipos diferentes, mostrando o resultado no console.
	*/
	addItem(false);
	addItem('banana');
	addItem(24);
	console.log(myArr);

	/*
	Mostre no console o segundo elemento desse último array, criado acima, com a
	frase:
	"O segundo elemento do segundo array é [ELEMENTO]."
	*/
	console.log(`O segundo elemento do segundo array é ${myArr[1]}`);

	/*
	Mostre no console quantos itens tem o primeiro array criado, com a frase:
	"O primeiro array tem [QUANTIDADE DE ITENS] itens."
	*/
	console.log(`O primeiro array tem ${myArr.length - 4} itens.`);

	/*
	Agora mostre no console quantos itens tem o segundo array criado, com a frase:
	"O segundo array tem [QUANTIDADE DE ITENS] itens."
	*/
	console.log(`O segundo array tem ${myArr.length - 1} itens.`);

	/*
	Utilizando a estrutura de repetição `while`, mostre no console todos os números
	pares entre 10 e 20, inclusive esses 2.
	*/
	console.log('Números pares entre 10 e 20:');
	let pair = 0;
	while(pair <= 20){
		pair % 2 === 0 ? console.log(pair) : '';
		pair++;
	}

	/*
	Na mesma ideia do exercício acima: mostre agora os números ímpares.
	*/
	console.log('Números ímpares entre 10 e 20:');
	let numPair = 10;
	while(numPair <= 20){
		numPair++ % 2 === 0 ? console.log(numPair) : '';
	}

	/*
	Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
	Só vamos mudar o range:
	- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
	- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
	*/
	console.log('Números pares entre 100 e 120:');
	let numberPair;
	console.log(numberPair);
	for(let numberPair = 100; numberPair <= 120; numberPair++){
		numberPair % 2 === 0 ? console.log(numberPair) : '';
	}

	console.log('Números ímpares entre 111 e 125:');
	let NPair;
	for(let NPair = 101; NPair <= 125; NPair++){
		NPair % 2 === 0 ? '' : console.log(NPair);
	}


})();