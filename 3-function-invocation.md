# Function invocation and the execution stack
+ Let's look at an example of function invocation
+ Here we have __function b()__ that does nothing. __function a()__ calls __b()__ and then __function a()__; is invoked. 
+ This is a simple example but it helps us understand what is happening under the hood.
```javascript
function b() {
}

function a() {
    b();
 }

 a();
```
+ First the global execution context is created. Then we have the creation phase and the engine will set up the functions in memory space.
+ __b()__ and __a()__ will be in memory and the code will be executed line by line.
+ __b()__ is created and executed when __a()__ executes __b()__ and another execution context is created in the stack.
+ when it hits __a()__ at the end, the engine knows it needs to invoke (call) the function
    + This creates a new execution context for __a()__ and put on the execution stack.
    + This will invoke __b()__ and create another execution context on the execution stack and run the function.
+ Every function runs through the execution context which runs a create phase then executes line by line.
+ When __b()__ finishes it will get popped off the stack then so will __a()__ then the engine goes back to global context.

+ let's put __a()__ above __b()__ and we also have some other code surrounding the function calls.

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

+ __a();__ at the bottom will invoke __function a()__ and that will get put on the execution stack.
    + __var d;__ won't be run yet as JavaScript is synchronous - one line at a time.
+ __function a()__ is run then it invokes __b()_.
    + __b()__ creates a new execution context so that then gets moved to the top of the stack.
    + __function b()__ runs line by line and only when it finishes __b()__ is popped off the stack.
    + Now we are back inside __a()__ to finish its execution context which will run the next line of code __var c;__
    + once this has been run and finished a() pops off the stack.
+ The last thing to run is the global execution context which is the last line of code __var d;__
+ Every time a function is called a new execution context is called for that function.