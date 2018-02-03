# By Value vs By Reference 
```javascript 
    b = a  //(or pass to a function) 
``` 
### Value
+ a is a primitive value 
+ b copy of a primitive value held in memory, this is called by value.
+ they become the same by copying the var to two separate spots in memory

### for objects:
+ when a variable is set equal to an object it is still saved in memory for reference.
+ when b = a for an object no copy is created. They have the same value as they look in the same place in memory.
+ this is called by Reference.
+ It's important to know that all objects act by reference when setting them equal to each other or passing them to a function.
+ This can cause problems if you don't understand how it works.

### by value (primitives)
```javascript 
 var a = 3;
 var b;
 b = a;
 a = 2
console.log(a); // 3
console.log(b) // 2
```
+ These are two separate copies in memory. b is just a copy of a so the output here makes sense. 
+ When a was changed it has its own space in memory so it's didn't have any impact on b when a was set to 2.


### by reference (all object (including functions))
```javascript
var c = {greeting: 'hi'};
var d;
d = c;
//once one object is changed they all will be changed as they are pointintg to the same space in memory
c.greeting = 'hello'; // greeting is is now changed...
console.log(c); //hello
console.log(d); //hello
// Now you understand how this works the console logs above should not be supprising. As they are pointing to the same place in memory.
```


### by reference (even as parameters objects are passed by refference)
```javascript
function changeGreeting(obj) {
obj.greeting = 'hola'; // changed..
}
changeGreeting(d);
console.log(c); //'hola'
console.log(d); //'hola'
// obj is pointing to the same memory location as d
    // And c already points to the same location as d

//equals operator sets up new memory space (new address)
c = { greeting: 'howdy'};
console.log(c); // 'howdy'
console.log(d); // 'hola'
// d and c are no longer pointing to the same space in memory.
```