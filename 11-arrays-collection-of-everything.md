# Arrays: collection of everything.

### JavaScript is dynamically typed so arrays can hold anything. You can refrence them and they can even hold functions and can be callled.
 
```javascript
var arr = [
    1,
    false,
    {
        name: 'tony',
        address: '111 main st.'
    },
    function (name) {
        var greeting = 'hello ';
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr);
arr[3](arr[2].name);
```