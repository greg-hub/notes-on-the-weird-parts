# Objects and Functions

+ Functions are Objects: Everything you can do with other types you can do with functions.
+ assign them to variables, pass them around and create them on the fly.
```javascript
function sayHi() {
    console.log('hi');
}

sayHi.language = 'english'; // adding a property to a function. this is just not possible in other languages.
console.log(sayHi.language); //english
```

