# Types and JavaScript

## DYANAMIC TYPING: 
### You dont' tell the engine what type of data a variable holds, it figures it out while the code is running.
# Static typing
```javascript
bool isNew = 'hello'; // an error
```
# DYANMIC
```javascript
var isNew = true // no error
isNew = 'Yup';
isNew = 1;
```
# PRIMITIVE TYPES:
### a type of data that represents a single value. That is not an object.
+ :Undefined - represents lack of existence
+ :NULL -  represents lack of existence. you can set vars to this 
+ :Boolean - true of false.
+ :NUMBER - floating point only
+ :STRING - a sequence of characters.
+ :SYMBOL - used in es6
    
# OPERATORS: 
### a special function that is syntactically (written)  differently.
+ generally.operators take two parameters and return one result.
```javascript
var a = 3 + 4;
console.log (a); // 7 - the + operator is are special types of functions. it can be look at the same a writting an normal function
```
#operators are fucntions.
### OPERATOR PRECEDENCE: which operator function get called first(higher precedence wins) 

### ASSOCIATIVITY: What order the functions get called it. left to right or right to left.
```javascript
var a = 3 + 4 * 5;
console.log(a); // 4 * 5 = 20 + 3 = 23

var a = 2, b = 3, c =4;
a = b = c;
console.log(a); //4  the = operator is right to left.
console.log(b); //4
console.log(c); //4

var a = (3 + 4) * 5;

console.log(a); // 3 + 4 = 7 * 5 = 35
```
# COERCION: 
### converting a value from one type to another.
```javascript 
var a = 1 + "2";
console.log(a); //12  
```
+ when you set a number and a string the engine is going to guess that you wanted 1 + 2 not a string so it coerced. This is due to it being dyno typed.

# Comparison operators
```javascript
console.log (3 < 2 < 1); //true
console.log (1 < 2 < 3); //true 
//1 < 2 = true then true < 3 = true (because of coercion / true becomes 0)
false == 0 //true
var a = false; // undefined
    a == 0 // true
//default values
function greet(name) {
    console.log(name);
    console.log('hello ' + name);
}
greet(); // hello undefined --  as a js don't care name was not set to a var. It created it and put it in the name space and set to undefined.
```
# Objects and functions.
```javascript
    person["firstname"] = "Greg";
    person["lastname"] = "Clinton";

    var firstnameProperty = "firstname"

    console.log(person);
    console.log(perosn[firstnameProperty]);

    console.log(person.lastname);
    console.log(person.firstname);

    perosn.address = new object();
    person.address.street = "111 main St.";
    person.address.state = "NY";

    console.log(person.address.street);
    console.log(person.address.city);
    console.log(person["address"]["state"]);
        // objects are name-value pairs that are sitting in memory that contain other name-value pairs. 
            // . operator is always the best way create objects.

        //objects and object literals
    var person = { 
        firstname: 'Tony', 
        lastname: 'Clinton'
        address: {
            street: '111 main st',
            city: 'NY'
        }
    }; 

    function greet(person) {
        console.log('Hi ' + person.firstname);
    }

    greet(Tony);

    greet({ firstname: 'Mary',
            lastname: 'Doe'
    });

    Tony.address2 = {
        street: '333 Second St.'
    };
```            
# Namespace: a container for vairables and functions: Typically to keep variables and functions with the same name sperate.
```javascript

    console.log(person)

    // JSON and object literals 
    var objectLiteral = {
        firstname: 'Mary',
        isAMary: true
    }

    console.log(JSON.stringify(objectliteral));

    var jsonValue = JSON.parse(' { "firstname": "Mary",
    "isAProgrammer": true }');

    console.log(jsonValue);
```