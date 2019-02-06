(function(){
	'use script';
	// Declarar uma variável qualquer, que receba um objeto vazio.
	let mylet = '';
	console.log(mylet);

	/*
	Declarar uma variável `pessoa`, que receba suas informações pessoais.
	As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
	- `nome` - String
	- `sobrenome` - String
	- `sexo` - String
	- `idade` - Number
	- `altura` - Number
	- `peso` - Number
	- `andando` - Boolean - recebe "falso" por padrão
	- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
	*/
	let pessoa = {
		nome:'Rubens ',
		sobrenome:'Filipe',
		sexo:'Masculino',
		idade:24,
		altura:1.72,
		peso:78,
		andando:false,
		caminhouQuantosMetros:0
	};

	let people = {
		nome: 'Luciana',
		sobrenome: 'Maria',
		sexo: 'Feminino',
		idade: 60,
		altura: 1.68,
		peso: 70,
		andando: false,
		caminhouQuantosMetros: 0
	}
	

	console.log(pessoa);
	console.log(people);

	/*
	Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
	alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
	for chamado.
	*/
	// pessoa.fazerAniversario = function fazerAniversario(){
	// 	return pessoa.idade+=1;
	// };
	pessoa.fazerAniversario = () => { return pessoa.idade+=1 } ;
	people.fazerAniversario = () => { return people.idade+=1 } ;
	

	/*
	Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
	características:
	- Esse método deve receber por parâmetro um valor que representará a quantidade
	de metros caminhados;
	- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
	valor dessa propriedade a quantidade passada por parâmetro;
	- Ele deverá modificar o valor da propriedade `andando` para o valor
	booleano que representa "verdadeiro";
	*/
	pessoa.andar = (param) => {
		if(!param){
			pessoa.andando = false;
		}
		else{
			pessoa.andando = true;
		}
		return pessoa.caminhouQuantosMetros+=param;
	}

	console.log(pessoa.andar(300));
	console.log(pessoa);



	/*
	Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
	da propriedade `andando` para o valor booleano que representa "falso".
	*/
	pessoa.parar = () => { return pessoa.andando = false };

	console.log(pessoa.parar());
	console.log(pessoa);

	/*
	Crie um método chamado `nomeCompleto`, que retorne a frase:
	- "Olá! Meu nome é [NOME] [SOBRENOME]!"
	*/
	pessoa.nomeCompleto = () => { return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}!` };
	

	/*
	Crie um método chamado `mostrarIdade`, que retorne a frase:
	- "Olá, eu tenho [IDADE] anos!"
	*/
	pessoa.mostrarIdade = () => { return `"Olá, eu tenho ${pessoa.idade} anos!"` };
	

	/*
	Crie um método chamado `mostrarPeso`, que retorne a frase:
	- "Eu peso [PESO]Kg."
	*/
	pessoa.mostrarPeso = () => { return `Eu peso ${pessoa.peso}Kg.` };
	

	/*
	Crie um método chamado `mostrarAltura` que retorne a frase:
	- "Minha altura é [ALTURA]m."
	*/
	pessoa.mostrarAltura = () => { return `Minha altura é ${pessoa.altura}m.` };
	

	/*
	Agora vamos brincar um pouco com o objeto criado:
	Qual o nome completo da pessoa? (Use a instrução para responder e comentários
	inline ao lado da instrução para mostrar qual foi a resposta retornada)
	*/
	console.log(pessoa.nomeCompleto());

	/*
	Qual a idade da pessoa? (Use a instrução para responder e comentários
	inline ao lado da instrução para mostrar qual foi a resposta retornada)
	*/
	console.log(pessoa.mostrarIdade());

	/*
	Qual o peso da pessoa? (Use a instrução para responder e comentários
	inline ao lado da instrução para mostrar qual foi a resposta retornada)
	*/
	console.log(pessoa.mostrarPeso());

	/*
	Qual a altura da pessoa? (Use a instrução para responder e comentários
	inline ao lado da instrução para mostrar qual foi a resposta retornada)
	*/
	console.log(pessoa.mostrarAltura());

	/*
	Faça a `pessoa` fazer 3 aniversários.
	*/
	pessoa.fazerAniversario();
	pessoa.fazerAniversario();
	pessoa.fazerAniversario();
	

	/*
	Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
	comentários inline ao lado da instrução para mostrar qual foi a resposta
	retornada)
	*/
	console.log('A idade de Rubens agora é de ' + pessoa.idade);

	/*
	Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
	com metragens diferentes passadas por parâmetro.
	*/
	console.log(pessoa.andar(300));
	console.log(pessoa.andar(300));
	console.log(pessoa.andar(300));

	/*
	A pessoa ainda está andando? (Use a instrução para responder e comentários
	inline ao lado da instrução para mostrar qual foi a resposta retornada)
	*/
	//1200

	/*
	Se a pessoa ainda está andando, faça-a parar.
	*/
	console.log(pessoa.parar());

	/*
	E agora: a pessoa ainda está andando? (Use uma instrução para responder e
	comentários inline ao lado da instrução para mostrar a resposta retornada)
	*/
	console.log(pessoa.andando);
	//false

	/*
	Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
	inline ao lado da instrução para mostrar a resposta retornada)
	*/
	console.log(`A pessoa andou: ${pessoa.caminhouQuantosMetros}m.`);

	/*
	Agora vamos deixar a brincadeira um pouco mais divertida! :D
	Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
	retornar a string:
	- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

	Só que, antes de retornar a string, você vai fazer algumas validações:
	- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
	apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
	- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
	palavra "ano" ao invés de "anos", pois é singular;
	- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
	deve conter no retorno da frase acima é "metro" no lugar de "metros".
	- Para cada validação, você irá declarar uma variável localmente (dentro do
	método), que será concatenada com a frase de retorno, mostrando a resposta
	correta, de acordo com os dados inseridos no objeto.
	*/
	pessoa.apresentacao = () => {
		// if(pessoa.sexo === 'Masculino'){
		// 	param = 'o'
		// }else{
		// 	param = 'a'
		// }
		let param;
		pessoa.sexo === 'Masculino' ? param = 'o' : param = 'a';
		return `Olá, eu sou ${param} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, ${pessoa.altura}, 
		meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`;
	};

	// Agora, apresente-se ;)
	pessoa.apresentacao();
	console.log(pessoa.apresentacao());

})();