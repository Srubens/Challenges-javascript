(function(){

    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name:'Rubens',
        lastname:'Filipe',
        age:23
    };
    console.log('Propriedades de "person":');
    console.log(person);
    

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log('Array das propridades:');
    console.log( Object.keys( person ) );


    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];
    console.log('Array de livros');
    console.log(books);

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push( {name:'Salmos',age:1163},{name:'Romanos',age:350},{name:'Atos',age:583} );
    console.log('\nLista de livros:');
    console.log(books);

    /*
    Mostre no console todos os livros.
    */
    console.log('Lista de todos livros: ');
    console.log(books);

    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log('\nLivro que está sendo removido:');
    console.log(books.pop());
    
    /*
    Mostre no console os livros restantes.
    */
    console.log('\nAgora sobraram somente os livros:');
    console.log(books);
    console.log('sobraram apenas ' + books.length + ' livros');

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    books = JSON.stringify(books);
    console.log('\nLivros em formato string:' + JSON.stringify(books) );
    


    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books);

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(books);
    console.log('\nAgora os livros são objetos novamente:');
    console.log(books);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for(var a = 0; a < Object.keys(books).length; a++){
        for(var prop in books[a]){
            console.log(prop + ':' + books[a][prop]);
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    myName = ['r','u','b','e','n','s'];
    console.log('\nMeu nome é:');
    console.log(myName);

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log('\nMeu nome invertido é:');
    console.log(myName.reverse().join(''));

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName);

    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());
    console.log(myName.sort().join(''));

})();