# Function invocation and the execution stack
+ Let's look at an example of function invocation
+ Here we have function b() that does nothing, a function a() that calls b() and then function a(); is invoked. 
+ this is a simple example but it helps us understand what is happening under the hood.
```javascript
function b() {
}

function a() {
    b();
 }

 a();
```
+ first the global execution context is created. Then we have the creation phase and the engine will set up the functions in memory space.
+ b() and a() will be in memory and the code will be executed line by line.
+ is created and executed when a executes b() another execution context is created in the stack.
+ when it hits a(); at the end, the engine knows it needs to invoke (call) the function
    + This creates a new execution context for a(); and put on the execution stack.
    + Then will invoke b(), and create another execution context on the execution stack and run that code.
+ every function runs through the execution context which runs a create phase then executes line by line.
+ when b() finishes it will get popped off the stack then a(); then back to the global.

+ let's put a() above b() and we had some other code surrounding the function calls.

```javascript
function a() {
   b();
   var c;
}

function b() {
   var d;
}

a();
var d;
```

+ a(); at the bottom will invoke function a() and that will get put on the execution stack
    +var d; won't be run yet as JavaScript is synchronous - one line at a time.
+ function a() is run then invokes b();
    + b() creates a new execution context so that gets moved to the top of the stack.
    + function b() runs line by line and only when it finishes b() is popped off the stack.
    + now we are back inside a() to finish its execution context to run the next line of code var c;
    + once this has been run and finished a() pops off the stack.
+ The last thing to run is the global execution context which is the last line of code var d;
+ every time a function is called a new execution context is called for that function.