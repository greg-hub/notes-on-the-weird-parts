# The Execution context: Code Execution
+ see [part one](https://github.com/greg-hub/notes-on-the-weird-parts/blob/master/1-hoisting.md) about the first execution context phase you if missed it.
+ After the [first phase](https://github.com/greg-hub/notes-on-the-weird-parts/blob/master/1-hoisting.md) the Javascript engine runs your code line by line.

+ Let's have another look at the example from the first phase.
```javascript
function b() {
    console.log('called b!');
}
b(); // called b

console.log(a); // undefined 

var a = 'hello world!'; // a is not set to hello world and no longer undefined

console.log(a); // hello world 
```
+ The first time the JavaScript engine called _a_ it got _undefinded_ the second time it got _hello world!_
    + it printed _hello world_ the second time because now we are in the execution phase. 
+ In the creation phase __function b__ and _var a_ is set then it executes the code. 
    +Exection being b() and the first and second console.log(a)
+ Now we are starting to understand each phase and why we see what we see and why Javascript behaves this way.


//single threaded: one command at a time - under the hood of the browser maybe not
// Synchronous: one at a time: and in order. 
