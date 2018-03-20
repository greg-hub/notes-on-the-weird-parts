# The Execution context - Creation and hoisting 

### Let's look at a phenomenon in Javascript that people find surprising.

```javascript
var a = 'hello world!';

function b () {
    console.log('called b!');
}
 b(); //called b!
 console.log(a); // hello world!
```
+ Nothing surprising here.

### Let's try something different that in other programming languages you would expect not to work.

+ We are going to move the calls to the top of the page.
+ In most programming languages you would expect an error, Here is what happens with JavaScript.

```javascript
b(); //called b!
console.log(a); //undefined - JavaScript will set it to undefined due to hoisting 

var a = 'hello world'; 

function b () {
console.log('called b' );
}
```
+ even though the function is  below where the function was executed, it still ran.

### This is called __hoisting.__

The reason JavaScript behaves the way it does is because the execution context is created in two phases. 
__First phase is the creation phase__ 
+ In the phase we have the __global object (set up in memory), 'this' (set up in memory) > Outer environment (created)__.
+ Setup memory space for variables and functions __"Hoisting"__.
+ It's not actually moving code to the top of the page.
+ Before your code starts to be executed line by line the Js engine has set up memory space for variables and functions "hosting".
+ Since the engine doesn't know what the log(a) will be it sets a placeholder called undefined 
+ All vars are set to undefined which is why it's a bad idea to rely on hosting. Don't get caught in that trap.


### To finish up this first phase lets take a quick look at undefined.

+ __a__ needs to be set in memory for the JavaScript engine to set the value, in this case undefined.
```javascript
var a; 
console.log(a); //undefined 
```
+ undefined is a value that means the variable hasn't been set. So it is equal to undefined. Let's take a look at it in action.

```javascript
var a; 
console.log(a); //undefined 

 if (a === undefined) {
     
    console.log('a is undefined!') // a is undefinded! will print to the console.
 } 
 else {
     console.log('a is defined!')
 }
```
+ The if statement above just checked if __a__ was equal to the value undefined and it was so it printed  'a is undefined!'.
+ __a__ will be undefined until you set it a value.
+ __Never__ set a variable equal to undefined.

### This is just phase one to set up the memory space. 








