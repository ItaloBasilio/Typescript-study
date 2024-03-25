/**
 *  Tipos primitivos
 *  Number => inteiros, decimais
 *  string => textos, caracteres
 *  boolean => true ou false
 */

let age: number = 22; // No momento que determino a classe da variavel, ela não aceita outro, neste caso, determinamos o tipo number
let fullName: string = 'Kurt Kobain';
let isAlive: boolean = false;

// inferencia de Tipos

let animal = 'Cat';
let quantity = 23;

// Parametros e retornos de funções
function sum ( a:number, b:number): number{
    const result = a + b;

    return result;
}

sum(1,2)

console.log(sum (1, 2));

//Função com retorno opcional

function greeting( fullname:string):string | void {
    if(fullname){
        return `Hello, ${fullname}!`
    }
    
}

// Função com parametros opcionais
function stringOrNumberSize(value: string | number):number{
    if(typeof value == 'string'){
        return value.length;
    }

    return value;
}

console.log(stringOrNumberSize('Hello'));
console.log(6);
