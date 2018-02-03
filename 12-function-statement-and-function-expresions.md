# function statements and function expressions.
+ expression: a unit of code that results in the value. It doesn't have to save a variable.
+ statements just do work, an expression ends up returning a value

```javascript
    greet();
    function greet() {
        console.log('hi');
    } // function statement, when evaluated it doesn't return a value. The function is places into memory.
      // it gets hoisted. you can call greet before you declare it.

    //function expresion.
    anonymousGreet(); // unknown type error anonymousGreet() is not a function
    
    var anonymousGreet = function () {
        console.log('hi'); // when this line is executed it resluts in an object being created.
    }
    anonymousGreet(); // hi
```
+ function greet() will be hoisted as the engine see the function and puts it in memory.
    + so it runs greet() and sees I have that in memory.
+ Then it sees anonymousGreet() and it's undefined type error as we haven't set anything equal to the value yet and it's not a function.
    + only the variable anonymousGreet() is hoisted and not the function. 

### Creating an object on the fly.
```javascript 
    function log(a) {
        console.log(a)
        a(); //invoke the log function. 
    }
    log(3); //3
    log('hello'); // hello
    log({
        greeting: 'hi'
    });
    log(function() {
        console.log('hi'); 
    }); // this is a function passed to a function.
```

+ You can pass functions to functions and use them as variables. This introduces a whole new class of programming called functional programming.
+ A function expression is available because of first-class functions because functions in JavaScript are objects.

+ IIFE
+ function statement
```javascript 
function greet(name) {
    console.log('hello ' + name);
}
greet();
```

+ using a function expression
```javascript
var greetFunc = function(name) {
    console.log('hello ' + name);
}('John');
console.log(greeting());

var firstname = 'John';

(function (name) {

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);

}(firstname)) //classic IIFE
```