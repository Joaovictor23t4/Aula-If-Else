/*
If (condição) {
    alert(`Se if for verdadeiro execute isto`)
}

else {
    alert(`Se if for falso execute isto`)
}
*/

const num1 = 5
const num2 = 7

if (num1 > num2) {
    console.log(`5 é maior que 7`)
}

else {
    console.log(`5 é menor do que 7`)
}

/*
if (condição === "alguma coisa") {
    alert (`Se if for verdadeiro execute isto`);
}

else if (condição === "alguma outra coisa") {
    alert(`Se if for falso execute isto`);
}

else {
    alert (`Se if e else if forem ambos falsos execute isto`);
}
*/

/*
OPERADORES ARITMÉTICOS (OPERADORES DE MATEMÁTICA)

+ adição
- subtração
* multiplicação
/ divisão
** potência 
*/

/*
OPERADORES DE COMPARAÇÃO

> maior que
< menor que
>= maior ou igual que
<= maior ou igual que
== igual NÃO USE ESTE OPERADOR // Só se importa com o valor
=== estritamente igual USE ESTE OPERADOR // Se importa com o valor e com o tipo
!= diferente de NÃO USE ESTE OPERADOR // Só se importa com o valor
!== estritamente diferente de USE ESTE OPERADOR // Se importa com o valor e o tipo
*/

/*
OPERADORES RELACIONAIS

&& E
|| OU
!  INVERTE O VALOR BOOLEANO, ISTO É, !TRUE === FALSE 
*/

const num3 = 10;
const num4 = 20;

if (num3 > 8 && num4 > 21) {
    console.log(`É verdadeiro!`)
}

else {
    console.log(`É falso!`);
}

// TABELA VERDADE OPERADOR &&

/*
x > y && x < y
V         V = VERDADEIRO
V         F = FALSO
F         V = FALSO
F         F = FALSO
*/

// TABELA VERDADE OPERADOR ||

/*
x > y || x > z

V         V = VERDADEIRO
V         F = VERDADEIRO
F         V = VERDADEIRO
F         F = FALSO
*/

if (num3 < 15 || num3 < 12) {
    console.log(`É verdade!`)
}

else {
    console.log(`É falso!`)
}

// TABELA VERDADE !

if (10 > 15) {
    console.log(`É falso!`);
}

else {
    console.log(`É verdade!`);
}

console.log(!true);