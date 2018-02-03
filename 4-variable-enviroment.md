# Variable Environments

+ A variable environments are where the variables live, and how they relate to each other in memory.

+ lets breakdown whats going on with this code below. 
```javascript
function b() {
   var myVar;
}

function a() {
   var myVar = 2;
   b();
}
var myVar = 1;
a();
```
+ Execution context starts and it sets var myVar = 1; 
+ a(); is executed then a new execution context is created  
+ when its created it will be put into a() variable enviorment and then var myVar = 2 is run updating it to 2 
    + every execution context has it's own variable environment 
+ then b() is executed and another execution context is created which myVar is undefined 
    + this is to do with scope. (where are we able to see the variable)
+ each variable we are looking at is defined in its own execution context because it's defined within a function
+ everytime you call a function a new execution context is created.


### lets use the same code but print myVar to the console in each execution context.

```javascript
function b() {
   var myVar;
   console.log(myVar); // undefined 
}
                 
function a() {
   var myVar = 2;
   console.log(myVar); //2
   b();
}

var myVar = 1;
console.log(myVar); // 1
a();
console.log(myVar); // 1
```
+ You may have noticed I added an extra console.log at the end of the code. 
+ The final myVar log is equal to 1 as it's running in the global execution context. When then code hits it myVar has been set to 1. 


