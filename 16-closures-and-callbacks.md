# Closures and callbacks
```javascript    
    function sayHiLater() {
        var greeting = 'Hi';

        setTimeout(function () {
            console.log(greeting);
        }, 3000);
    }
    sayHiLater() // Hi after 3secs
```
+ This code contains a function expression and closure.
+ setTimeout goes out into the browser and waits 3secs and when it's finished it asked if any functions are listening. 
+ it then runs the console.log but greeting doesn't exist yet. sayHiLater() has already finished running. So what happens?
+ It goes up the scope chain and it has a closure for the greeting variable. It's saved in memory.

+ jQuery uses fucntion expressions and first-class functions.
```javascript
$("button").click(function(){
    // the click is a function and it expects another function.
});
```
## CALLBACK FUNCTION 
+ A function you give to another function, to be run when the function is finished. So the function you call     (i.e invoke), 'calls back' by calling the function you gave when it finishes.
```javascript 
    function tellMeWhenDone(callback) { 
        var a = 1000; // some work
        var b = 2000; //some work
        callback(); // the 'callback', it runs the function I give it!   
    }
    tellMeWhenDone(function() {
        console.log('I am done!');
    });
    tellMeWhenDone(function() {
        console.log('All done!');
    });
```
+ I call the function then the function calls what it's given.