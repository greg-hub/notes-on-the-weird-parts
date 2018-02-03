# Objects, functions and 'this';
+ What happens when I run code in a code property...
    + When a function is invoked a new execution context is created. This is the creation phase (Execution context).
    + When an execution context is created we have a variable environment, where the variables created by that function live. 
    + it has a reference to its outer environment, an outer lexical environment where it sits physically in code. Which tells it to look down the scope chain. 
        + If I ask for a variable and it's not there inside that functions variable environment, it will go out and out further till it reaches the global environment looking for the variable. 
    
+ Every time a function is run it gives us this variable called 'this'.
    +'this' will be pointing at a different object depending on how the function is invoked. 

```javascript
console.log(this); //window (global object)

function a() {
    console.log(this);
}

var b = function () {
    console.log(this);
}
a(); //window
b(); //window

```
+ Whenever a function is created in this level in the code 'this' will always point to the window. (global object)
+ 'this' is not pointing at the function you are crashing into the global namespace.


### Exploring 'this' in a method.
```javascript
var c = {
    name: 'The c object',
    log: function() {
        console.log(this);
    this.name = 'Updated C object';
    }
}
 c.log(); // 'this c object' -  'Updated C object' 
``` 
+ now 'this' points to the object that the method is sitting inside of.

### issues with 'this'
+ lots of people think this is a bug in JavaScript and the decision made for it to act this way is wrong. 
```javascript
var c = {
    name: 'The c object',
    log: function() {
        this.name = 'updated c object'
        console.log(this);

    var setname = function (newname) {
       this.name = newname; // even though it's sitting inside a object it points to the __global object__. which alot of people think is wrong. But it's the way that Javascript works.
    }
    setname('updated again! The c object');
    console.log(this); // should see updated again! but you don't. It has got refrence to the global object.
    }
}
c.log();
```

### fixing this issue
```javascript
var self = this;  //doing this points 'this' to the c object. then use 'self' instead of 'this'. Now we don't 
                 // have to think about if I'm pointing to the right object.

    var c = {
        name: 'The c object',
        log: function() {
            var self = this;

            self.name = 'updated c object'
            console.log(self);
    
        var setname = function (newname) {
           self.name = newname;
        }
        setname('updated again! The c object');
        console.log(self);
        // now the function will look down the scope chain until it finds self wich is inside the c object
```
    