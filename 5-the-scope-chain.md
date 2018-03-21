# The Scope Chain. 
```javascript
function b() {
    console.log(myVar);  // 1
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();

```

+ __myVar__ is 1 in __function b__. If a variable hasn't been set in that execution context it will then look for that variable in the outer reference and the result will depend on where it sits lexically. In this case it's global scope.
+ It will keep looking down the scope chain till it finds a variable to set the value to.

```javascript
function a() {

    function b() {
        console.log(myVar);  // 2
    }
    
    var myVar = 2;
    b();
}

var myVar = 1;
a();
```

+ If I don't declare a variable inside a function where will I go find it?

### SCOPE: where a variable is available in your code - and if it's truly the same variable or a new copy. 
+ let: when a variable is declared with let inside a block it is only available inside that block.
```javascript
        if (a > b) {
            let c = true;
        }
```