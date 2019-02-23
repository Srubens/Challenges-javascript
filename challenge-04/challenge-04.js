(function(){
    /*
    Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
    um único parâmetro como argumento. Essa função deve retornar `true` se o
    equivalente booleano para o valor passado no argumento for `true`, ou `false`
    para o contrário.
    */
    let isTruthy = (param) => {
        return !!param;
    };

    // Invoque a função criada acima, passando todos os tipos de valores `falsy`.
    console.log(isTruthy(false));
    console.log(isTruthy(0));
    console.log(isTruthy(-0));
    console.log(isTruthy(undefined));
    console.log(isTruthy(NaN));
    console.log(isTruthy(''));

    /*
    Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
    */
    console.log('\n');
    console.log(isTruthy('a'));
    console.log(isTruthy([24]));
    console.log(isTruthy({'name':'rubens'}));
    console.log(isTruthy( function myName(){ return 'my name' } ));
    console.log(isTruthy( true ));
    console.log(isTruthy( 1.5 ));
    console.log(isTruthy( -87 ));
    console.log(isTruthy( 'Rubens' ));
    console.log(isTruthy( 'Mc donnalds' ));

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
    let carro = {
        marca: 'FIAT',
        modelo: 'ASTRO',
        placa: 'KGH 1214',
        ano: 2019,
        cor: 'Vermelho',
        quantasPortas: 4,
        assentos: 5,
        quantidadePessoas:0
    };

    console.log(carro);

    /*
    Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
    passado por parâmetro.
    */
    carro.mudarCor = (param) => {
        return carro.cor = param;
    };

    carro.mudarCor('Preto');
    console.log(carro.cor);    

    /*
    Crie um método chamado `obterCor`, que retorne a cor do carro.
    */
    carro.obterCor = () => {
        return carro.cor;
    };

    console.log( carro.obterCor() );
    console.log( carro );

    /*
    Crie um método chamado `obterModelo` que retorne o modelo do carro.
    */
    carro.obterModelo = () => {
        return carro.modelo;
    };

    console.log( carro.obterModelo() );

    /*
    Crie um método chamado `obterMarca` que retorne a marca do carro.
    */
    carro.obterMarca = () => {
        return carro.marca;
    };

    console.log( carro.obterMarca() );

    /*
    Crie um método chamado `obterMarcaModelo`, que retorne:
    "Esse carro é um [MARCA] [MODELO]"
    Para retornar os valores de marca e modelo, utilize os métodos criados.
    */
    carro.obterMarcaModelo = () =>{
        return `Esse carro é um ${carro.marca} ${carro.modelo}`;
    }

    console.log( carro.obterMarcaModelo() );    

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
    carro.AddPeople = (people) => {
        let totalPeople = carro.quantidadePessoas + people;
        let howManyFit = carro.assentos - carro.quantidadePessoas;
        let pluralSingular = (howManyFit === 1) ? 'pessoa' : 'pessoas';

        if(carro.quantidadePessoas === carro.assentos && totalPeople >= carro.assentos){
            return `O carro já está lotado!`;
        }

        if(totalPeople > carro.assentos){
            return `Só cabem mais ${howManyFit} ${pluralSingular} no carro`;
        }

        carro.quantidadePessoas+= people;
        return `Já temos ${totalPeople} pessoas no carro!`;

    };

    console.log( carro.AddPeople(6) );
    console.log( carro.AddPeople(3) );
    console.log( carro.AddPeople(1) );
    console.log( carro.AddPeople(1) );
    console.log( carro.AddPeople(10) );


    /*
    Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
    utilize sempre o formato de invocação do método (ou chamada da propriedade),
    adicionando comentários _inline_ ao lado com o valor retornado, se o método
    retornar algum valor.

    Qual a cor atual do carro?
    */
    console.log( carro.cor );

    // Mude a cor do carro para vermelho.
    console.log( carro.mudarCor('vermelho') );


    // E agora, qual a cor do carro?
    console.log( carro.cor );

    // Mude a cor do carro para verde musgo.
    console.log( carro.mudarCor('verde musgo') );

    // E agora, qual a cor do carro?
    console.log( carro.cor );

    // Qual a marca e modelo do carro?
    console.log(carro.obterMarcaModelo());

    // Adicione 2 pessoas no carro.
    carro.quantidadePessoas = 0;
    console.log(carro.AddPeople(2));

    // Adicione mais 4 pessoas no carro.
    console.log(carro.AddPeople(4));

    // Faça o carro encher.
    console.log(carro.AddPeople(3));

    // Tire 4 pessoas do carro.
    carro.quantidadePessoas = 1;

    // Adicione 10 pessoas no carro.
    console.log(carro.AddPeople(10));

    // Quantas pessoas temos no carro?
    console.log(carro.quantidadePessoas);

})();