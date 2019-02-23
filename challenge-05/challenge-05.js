(function (){

    /*
    Crie uma variável qualquer, que receba um array com alguns valores aleatórios
    - ao menos 5 - (fica por sua conta os valores do array).
    */
    // let newArr = [87, 'rubens', { job: 'designer' }, false, function myfunc(){ return `Minha função`; }];
    let newArr = [87, 'rubens', { job: 'designer' }, false, () => `Minha função` ];
    let Arrnova = [24, 'Luciana', { job: 'web designer' }, true, () => `outra função` ];
    // console.log(newArr);

    /*
    Crie uma função que receba um array como parâmetro, e retorne esse array.
    */
    function receivesArray(array){
        return array;
    }
    console.log(receivesArray(newArr));
    console.log(receivesArray(Arrnova));

    /*
    Imprima o segundo índice do array retornado pela função criada acima.
    */
    console.log(newArr[1]);
    console.log(Arrnova[1]);

    /*
    Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
    segundo, um número. A função deve retornar o valor de um índice do array que foi passado
    no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
    segundo parâmetro.
    */
    function twofunc(array,paramB){
        let obj = array[paramB];
        if (!obj || obj === undefined) {
            return array;
        }
        return obj;
        
    }
    console.log( twofunc(newArr,2) );

    /*
    Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
    */
    let places = ['India', 3.4, true, () => { `87` }, {name:'Rildo'}];
    // console.log( places );

    /*
    Invoque a função criada acima, fazendo-a retornar todos os valores do último
    array criado.
    */
    console.log(twofunc(places));

    /*
    Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
    livro. Dentro dessa função, declare uma variável que recebe um objeto com as
    seguintes características:
    - esse objeto irá receber 3 propriedades, que serão nomes de livros;
    - cada uma dessas propriedades será um novo objeto, que terá outras 3
    propriedades:
        - `quantidadePaginas` - Number (quantidade de páginas)
        - `autor` - String
        - `editora` - String
    - A função deve retornar o objeto referente ao livro passado por parâmetro.
    - Se o parâmetro não for passado, a função deve retornar o objeto com todos
    os livros.
    */
    function book(param){
        let livros = {
            'Dois Mundos um Heroi':{
                quantidadePaginas:144,
                autor: 'Rezendeevil',
                editora: 'Suma de letras Brasil'
            },
            'A SUTIL ARTE DE LIGAR O FODA-SE':{
                quantidadePaginas: 224,
                autor: 'MARK MANSON',
                editora: 'INTRINSECA'
            },
            'EXTRAORDINÁRIO':{
                quantidadePaginas: 320,
                autor: 'R. J. PALACIO',
                editora: 'INTRINSECA'
            }
        };
        let result = livros[param];
        if(!result || result === undefined){
            return livros;
        }
        return result;
    }

    
    // console.log( book('EXTRAORDINÁRIO') );

    /*
    Usando a função criada acima, imprima o objeto com todos os livros.
    */
    console.log(book());

    /*
    Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
    usando a frase:
    "O livro [NOME_DO_LIVRO] tem [X] páginas!"
    */
    let takeBook = 'EXTRAORDINÁRIO';
    console.log('O livro ' + takeBook + ' tem ' + book(takeBook).quantidadePaginas + ' páginas!');

    /*
    Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
    a frase:
    "O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
    */
    console.log('O autor do livro ' + takeBook + ' é ' + book(takeBook).autor +'.');

    /*
    Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
    a frase:
    "O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
    */
    console.log('O livro ' + takeBook + ' foi publicado pela editora ' + book(takeBook).editora + '.');

})();