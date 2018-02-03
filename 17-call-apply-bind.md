# Call, apply and bind.
+ How to control the __this__ keyword with call apply and bind.
+ All functions have access to call, apply and bind methods.
+ Bind controls what the __this__ keyword points to.
```javascript
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}
var logPersonName = logName.bind(person);

logPersonName()
```
+ You can pass whatever object you want to be the __this__ variable when the function runs.
+ The bind method returns a new function and makes a copy.
+ Whenever the engine looks for what to set the __this__ variable to it can see bind is set to person.
+ Bind creates a copy of whatever function you're calling it on. 
+ Then whatever the JavaScript engine sees that it's created and has to decide what the 'this' variable is. It can see that it is bound to person.
+ Person object passed to bind and __this__ will be person.

## Adding __.call__ to call the function lets you controll the __this__ variable and you can also add parameters.
```javascript 
logName.call(person); 
logName.call(person, 'en' 'es');
```    
## Bind will copy the function where as call will execute it.

## __.apply__ does the exact same thing with the only difference is it has to have an array of parameters.
```javascript
logName.apply(person, ['en', 'es']);
``` 
+ examples: 
    + you can grab methods from other objects and use them.

+ Function borrowing:
```javascript
    var person2 = {
        firstname: 'jane',
        lastname: 'Doe'
    }
    console.log(person.getFullName.apply(person2)); // you can grab methods from other names and use them as long as they have simular property names.
 ```
# function currying: creating a copy of a funciton with some preset parameters, very useful in mathematical situations.
```javascript
    function multiply (a, b) {
        return a*b;
    }
    var multipleByTwo = multiply.bind(this, 2); //creating a copy with .bind which is not execting the function. giving it 'this' & 2 params gives the function permenent values when the copy is made.  

    console.log(multiplyByTwo(4)); // 8  as a = 4 and b = 2 - 4*2 = 8
```