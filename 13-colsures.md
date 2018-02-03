# Closures
```javascript
function greet(whattosay) {
    
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

var sayHi = greet('Hi');
sayHi('Tony');
```
### Lets break down exactly what is happening here.

+ Code starts - a new global execution context and variable __sayHi = greet('Hi');__ invockes greet() and a new exectuion context is created, 
    + __whatttosay__ is passed to it and is sitting in it's own variable enviroment.
    + It creates a new function on the fly and returns it. After the return the greet function is poped of the stack and gone.
+ when the exection context finishes __whatttosay__ is still hanging around in memory before the collection.
+ Next we are back in global exection and invoke the function that __sayHi()__ is pointing at. 
    + That creates a new execution context. (name) set to tony which will end up in it's memory. 
    + when console.log(whattosay + ' ' + name); is invoked. The JavaScript engine sees whatosay. Then it goes up the scope chain to look for that variable. 
+ Even though the greet function had ended, any function called inside it will still have access to the greet functions memory space.
+ Greet is gone but whats in memory ins't, and the JavaScript engine makes sure that my function can still go down the scope chain and find it. Even though its not on the execution stack anymore.
+ The exeuction context has closed in it's outer variables. The variables it would have refrence to anyway even though there exection context are gone.
+ This is called a __closure__.
+ They are simple a feature of the js language that is very important and powerful. 
