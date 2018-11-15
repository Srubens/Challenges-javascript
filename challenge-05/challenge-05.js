/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrRandom = ['rubens', {age:23}, function byname(){ return 'Ola mundo' }, true, 2.3];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArr(arr = []){
    return arr;
    console.log(arr);
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArr([10,87,'rubens',23]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrNew(arr = [], paramArr) {
    var arrObj = arr[paramArr];
    return console.log(arrObj);
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArr = [2.3, 'rubens', {age:23}, function myFunc(){ return 'ola mundo!' }, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrNew(myArr,0));
console.log(arrNew(myArr,1));
console.log(arrNew(myArr,2));
console.log( arrNew(myArr,3));
console.log(arrNew(myArr,4));

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
function book(bookName){
    var books = {
        'O Guia Definitivo': 
        {
        quantidadePaginas:1080,
        autor:'David Flanagan',
        editora: 'O REILLY MEDIA'
        },
        'PRINCIPIOS DE ORIENTAÇAO A OBJETOS EM JAVASCRIPT': 
        {
            quantidadePaginas: 180,
            autor: 'ZAKAS, NICHOLAS C.',
            editora: 'NOVATEC'
        },
        'Javascript': 
        {
            quantidadePaginas: 300,
            autor: 'TSUR-MAYER, GILAD E',
            editora: 'KOBO EDITIONS'
        }
    };

    return !bookName ? books : books[bookName]; 

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var newbook = 'Javascript';
console.log('O livro ' + newbook + ' tem ' + book(newbook).quantidadePaginas +' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var newbook = 'Javascript';
console.log('O autor do livro '+ newbook +' é ' + book(newbook).autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var newbook = 'Javascript';
console.log('O livro ' + newbook + ' tem ' + book(newbook).quantidadePaginas + ' páginas!');