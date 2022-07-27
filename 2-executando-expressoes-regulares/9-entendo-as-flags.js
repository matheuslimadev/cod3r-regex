// Duas flags:

// g -> representa Global. Se estiver procurando (sem a flag 'g') a letra 'a', em um texto, e ele encontrar o primeiro 'a' no texto ele vai parar a busca, já com a flag 'g', ele continua buscando o restante das letras 'a' no texto.

// i -> ignora letras maíusculas e letras minúsculas. Ele vai tanto achar uma letra maíscula ou minúscula quando você fizer uma busca que envolva string.

// String.match(regex)
// Retorno do método: Array()
// Posição Array[0]: A string encontrada
// Chave Array.index: A posição da string encontrada - baseada na regex setada

const texto = "Carlos assinou o abaixo-assinado. 3"
// A expressão abaixo, significa 'encontre na variável texto a letra 'C' OU ('|') as letras 'ab' 
console.log(texto.match(/C|ab/))
console.log(texto.match(/C|ab/)[0]) // No índice [0] do retorno da função .match está a string encontrada pelo regex.

console.log(`.charAt encontrou: ${texto.charAt(texto.match(/C|ab/).index)}`) // No argumento do charAt(param) você passa o índice(number) do caractere que está na string

console.log(texto.charAt(3).toLocaleUpperCase()) // O método string.toLocaleUpperCase() faz o mesmo que string.toUpperCase(). Porém, é mais recomendado usar o string.toLocaleUpperCase() pois ele retornar a string para maíuscula (sem alterar a string original), mas de acordo com as configurações de idioma do navegador, sem ocorrer conflitos de mapeamento unicode, o que acontece usando o string.toUpperCase().

console.log(`indexOf 0: ${texto.indexOf(3)}`) // string.indexOf(param), no parâmetro do string.índexOf(param) você passa o argumento do tipo string, caso você passe um número, ele tentará encontrar esse número (caractere) dento da string que ele foi aplicado.
console.log(`indexOf 1: ${texto.indexOf('-')}`)
console.log(`indexOf 2: ${texto.indexOf(texto.match(/C/))}`)
console.log(`indexOf 3: ${texto.indexOf(texto.match(/C/)[0])}`)


// Método(.keys(param)) muito louco da função nativa 'Object':
texto.match(/C/)[Object.keys(texto.match(/C/))[1]]