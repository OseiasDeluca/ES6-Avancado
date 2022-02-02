/* Arrow functions */

// Funções padrão/clássica
function ola(value){
    console.log(value)
}

ola('Test')
// Test


// Funções anônimas
var log = function(value){
    console.log(value)
}

log('Test')
// Test

// Funções anônimas de soma

var sum = function(a, b){
    return a + b;
}

console.log(sum(5, 5))
// 10

//Arrow Functions - (=>) - também são funções anônimas

var sum = (a, b) => a + b // return implicito
console.log(sum(5, 5))
// 10

var sum = (a, b) => {
    return a + b;
}
console.log(sum(10, 15))
// 25

var sum = (a, b) => {
    var x = 10;

    if (a > b){ 
    }

    return a + b;
}

console.log(sum(5, 15))
// 20

// Retorna objetos literais c/ return implicito
var createObj = () => ({ test: 123 });

console.log(createObj())
// { test: 123 }

// Função construtora(constructor)
function Car() {
    this.foo = 'bar'
}

console.log(new Car())
// Car { foo: 'bar' }

var Car = () => {
    this.foo = 'bar' // esse error tem muito a ver com o 'this'
}

console.log(new Car())
//ERROR: function Car is not contructor

// Ponto a ser considerado qunado trabalharmos com ArrowFunction é o conceito de hoisting
log('teste') // Hoisting faz com que a função seja invocada antes mesmo que ela seja definida

function log(value){
    console.log(value)
}
// teste

// Já com as Arrow Function isso não ocorre
log('teste')

var log = value => {
    console.log(value)
}
// ERROR: log id not a function

var obj = {
    showContext: function showContext() {
        console.log(this);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
// { showContext: [Function: showContext], log: [Function: log] } - ReferÊncia a ele mesmo.

// Funções em JS tem o chamado contexto de invocação

var obj = {
    showContext: function showContext() {
        this.log('teste');
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
// teste

// Funções de timer, callback, eventlistenner são invocados no meu contexto global
var obj = {
    showContext: function showContext() {
        this.log('teste');

        setTimeout(function() {
            this.log('after 1000ms')
        }, 1000)
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
// TypeError: this.log is not a function

// Como resolver esse problema de contexto global e fazer a função dar certo?
// Usando bind e passando o seu primeiro parâmetro.

var obj = {
    showContext: function showContext() {
        this.log('teste');

        setTimeout(function() {
            console.log(this);
        }.bind(this),
        1000
        );
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
// teste
// { showContext: [Function: showContext], log: [Function: log] } - apontou para o objeto correto