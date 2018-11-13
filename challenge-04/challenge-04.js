/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function isTruthy(param){
    if(!!param){
        return 'true';
    }else{
        return false;
    }
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(0);
isTruthy(-0);
isTruthy(undefined);
isTruthy(NaN);
isTruthy('');

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('rubens');
isTruthy(87);
isTruthy(2.3);
isTruthy(function myfunc(){return 'ola'});
isTruthy({name:"tagore"});
isTruthy(["laranja","banana"]);
isTruthy(55);
isTruthy('sport');
isTruthy(2*3);
isTruthy('a'+'b');

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca:'Fiat',
    modelo:'UNO',
    placa:'KGJ 2258',
    ano:2018,
    cor:'verde',
    quantasPortas:2,
    assentos:5,
    quantidadePessoas:0
}; 

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function mudarCor(param){
    return carro.cor = param;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function obterCor(){
    return 'A cor do carro é ' + carro.cor;
}; 

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function obterModelo(){
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function obterMarca() {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function obterMarcaModelo(){
    return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPeople = function addPeople(numpeople){
    var totalPessoas = carro.quantidadePessoas + numpeople;
    var quantasCabem = carro.assentos - carro.quantidadePessoas;
    var pluralSingular = quantasCabem === 1 ? 'pessoa' : 'pessoas';

    if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos){
        return 'O carro já esta lotado!';
    }

    if(totalPessoas > carro.assentos){
        return 'Só cabem mais '+ quantasCabem + ' ' + pluralSingular + ' no carro';
    }

    carro.quantidadePessoas += numpeople;
    return 'Já temos '+ totalPessoas +' pessoas no carro!';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor();

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor();

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor();

// Qual a marca e modelo do carro?
carro.obterMarcaModelo();

// Adicione 2 pessoas no carro.
carro.addPeople(2);

// Adicione mais 4 pessoas no carro.
carro.addPeople(4);

// Faça o carro encher.
carro.addPeople(3);

// Tire 4 pessoas do carro.
carro.quantidadePessoas = 1;

// Adicione 10 pessoas no carro.
carro.addPeople(10);

// Quantas pessoas temos no carro?
carro.quantidadePessoas;