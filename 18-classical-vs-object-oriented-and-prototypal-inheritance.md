# Classical vs object-oriented and prototypal inheritance
## Inheritance: One object gets access to the properties and methods of another object.
## Classical inheritance - Verbose. Can work well but spiral out of control. 
## Prototypal - Simple - flexible - extensible easy to understand.

##Understanding the prototype 

|               Obj > prop 1 > obj.prop              |
|----------------------------------------------------|
| proto{}  can point to another prototype object     |
|----------------------------------------------------|
|                        prop2                       |
|                        proto{}                     |
|                        prop3                       |
                                                 
+ All objects and function have a prototype property. Which is a reference to another object.
+ If proto has prop2 the obj.prop2 is called the dot operator goes and looks for it on the reference on obj and doesn't find it.
+ It goes to the proto{} and looks for it and finds it there.
+ It looks like it is on our object but it is actually on our prototype
+ Each object can have its own prototype.
+ The prototype of the prototype has can have another prop. 
+ it looks like it's on the main object but it's on the prototype chain.
+ The JavaScript engine will do the work and search the prototype chain for the next object. So you don't have to call it with .proto (don't over think this)
+ Object can share the same prototype. 

```javascript
   var person = {
    firstname: 'Default',
    lastname: 'Defalut',
    getFullName: function() {
        return this.firstname + ' ' + this.last;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}
```

### something you should never do as it will slow your applications down. 
+ This is just an example to better explain whats going on.
```javascript
     john.__proto__ = person;
     console.log(john.getFullName()) //John Doe 
     console.log(john.firstName); //John

     var jane = {
         firstname: 'Jane'
     }
     jane.__proto__ = person;
     console.log(jane.getFullName); //Jane default - it searches for last name on the jane object, doesn't find it and looks at the proto type(person).
```