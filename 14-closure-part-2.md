### Closure part 2

```javascript
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i) //executed on the function call
            }
        )
    }
    return arr;
}

var fs = buildFunctions();

fs[0](); //3
fs[1](); //3
fs[2](); //3
```
### Lets break down whats happening here.

+ global execution context contains __buildFunctions()__ which is executed. 
+  __buildFunctions()__ execution context which has two variables __i - 3__ and __arr - [f0,f1,f2]__.
    + The for loop runs with i = 0 then it pushes the function to the array. 
    + console.log is not actually running it's just creating an object and it and putting it in memory.
    + i++ runs and becomes and 1 then it creates another function and pushes it to the array and repeats. 
    + Once the for loop is complete it returns arr (holding three functions)
    + buildFunctions() is now popped off the stack but we have it in memory. 
    + all three functions have the same outer environment reference as they were created in the same spot in memory which is 3.
    + we have three functions that are being executed later.
    + when executed it's only going to be able to tell you what the value is it has in memory of its parent context.
    // all three output the same thing as all three point to the same place in memory.

### 

+ in ES6 __Let__ can be used to create a parent scope, in ES5 an IIFE can be used.
    + let's have a look at an example.

```javascript

function buildFunctions2() {

    var arr = [];
    
    for (var i = 0; i < 3; i++) {
    arr.push( //the push is going to be the result of the executed function, executing the function gives us back a function.
        (function (j) {
            return function(){
            console.log(j); //when this is executed it won't need to go back into the for loop it can just use the context above it.
            }
        }(i))
    )
}

    return arr;
}


var fs2 = buildFunctions2();

fs2[0](); // 0
fs2[1](); // 1
fs2[1](); // 2
```

+ TO preserve the value of I for this function you need a sperate execution context for the array.
    + A parent scope is needed to hold the value as the loop runs.
+ An IIFE is needed to be executed for this with a parameter __j__ passing __i__.
    + doing this each time the function is run a new execution context will be created for __j__.
    + when the console.log gets executed it looks for __j__ and it doesn't need to go out into the for loop.
        + it will stay in the IIFE execution context.
+ Now when it runs you will see the expected value.