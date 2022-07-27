const texto = '0,1,2,3,4,5,6,7,8,9,a,A,b,c,d,e,f';

// Criando uma regex usando a função RegExp()
const regexNove = RegExp('9');
console.log(regexNove); // /9/

// Função RegExp(argumento_1, argumento_2) - Sendo o argumento 2 as flags que você pode ou não passar
const regexZero = RegExp('0', 'gi'); // /0/gi
// console.log(regexNove); // /0/gi


/**
 * Métodos da RegExp:
 * regex.test(); regex.exec();
 */
console.log(regexNove.test(texto)); // true

console.log(regexNove.exec(texto)); // ['9', index: 18, input: '0,1,2,3,4,5,6,7,8,9,a,A,b,c,d,e,f', groups: undefined]

/**
 * Estranhisse do JS com Regex:
 */
const sequencia = '1,2,a,A,b,a';
const findA = RegExp('a','gi'); // /a/gi
console.log(findA.exec(sequencia)); // [ 'a', index: 4, input: '1,2,a,A,b,a', groups: undefined ]
console.log(findA.exec(sequencia)); // [ 'A', index: 6, input: '1,2,a,A,b,a', groups: undefined ]
console.log(findA.exec(sequencia)); // [ 'a', index: 10, input: '1,2,a,A,b,a', groups: undefined ]
console.log(findA.exec(sequencia)); // null


/**
 * Métodos da String: 
 * String.match(regex)
 * String.search(regex) - Este método retorna o índice do primeiro elemento encontrado no texto baseado na regex setada.
 * String.replace(regex, '')
 * String.split(regex) - Cria um array, colocando como novo índice o que foi encontrado no regex.
 */
const regexLetras = /[a-f]/g; // Dentro do colchetes eu defini que quero pegar todas as letras entre 'a' e 'f'
console.log(texto.match(regexLetras)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log(texto.search(regexLetras)); // 20 
console.log(texto[20]); // 'a'

console.log(texto.replace(regexLetras, 'Achei')); // 0,1,2,3,4,5,6,7,8,9,Achei,A,Achei,Achei,Achei,Achei,Achei

console.log(texto.split(regexLetras)); // [ '0,1,2,3,4,5,6,7,8,9,', ',A,', ',', ',', ',', ',', '' ]








