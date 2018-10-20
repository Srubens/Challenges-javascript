/* Desafio da semana 2 */

/*
Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! : smile:

```js
*/
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma($param1,$param2){
    return $param1 + $param2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var $sum = soma(3,5);
console.log($sum);

// Qual o valor atualizado dessa variável?
//8

// Declare uma nova variável, sem valor.
var $newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function NewVar($param){
    $newVar = 'O valor da variável agora é ' + $param + '.';
    return $newVar;
}

// Invoque a função criada acima.
console.log(NewVar(10));

// Qual o retorno da função? (Use comentários de bloco).
//10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a 
string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function newParam(a,b,c){
    if(c === undefined){
        return 'Preencha todos os valores corretamente!';
    }
    return (a*b*c)+2;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(newParam(2,3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente

/* Agora invoque novamente a função criada acima, mas passando todos os três argumentos 
necessários.*/
console.log(newParam(2, 3,10));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//62

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e 
o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function myFunc(paramA,paramB,paramC){
    if (paramA !== undefined && paramB === undefined && paramC === undefined){
        return paramA;
    } else if (paramA !== undefined && paramB !== undefined && paramC === undefined){
        return paramA + paramB;
    } else if (paramA, paramB, paramC){
        return (paramA + paramB) / paramC;
    } else if (paramA === undefined && paramB === undefined && paramC === undefined){
        return false;
    } else{
        return null;
    }
}
console.log(myFunc());

/** Invoque a função acima utilizando todas as possibilidades 
 * (com nenhum argumento, com um, com dois e com três.) Coloque um comentário 
 * de linha ao lado da função com o resultado de cada invocação.
 */ 
console.log(myFunc());//false
console.log(myFunc(3));//3
console.log(myFunc(3,4));//7
console.log(myFunc(4,40,10));//4.4

