# Function Factories  
## When a function returns or makes other things for me.
```javascript
function makeGreeting(language) {
    
    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('hello ' + firstname + ' ' + lastname);

        }
        if (language === 'es') {
            console.log('hola ' + firstname + ' ' + lastname);
        }

    }
}
var greetEnglish = makeGreeting('en'); //greetEnglish is a function object whose closure points to language en
var greetSpanish = makeGreeting('es'); //greetspanish is a function object whose closure points to a different execution context for the same function. -es

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');
// even though it's the same function everytime it's executed it creats a new execution context and memory space no matter how many times it called.
```
### Whats happening:
+ Global exection context - greetEnglish, greetSpanish, makeGreeting()
+ makeGreeting() new exection context language 'en'
    + Then it returns a function which is stored in greetEnglish, and makeGreeting() ends. 
    + it's popped off the stack and language 'en' is still hanging around in memory space. 

+ on the next line make greeting is called again. makeGreeting('es'); and you get a new execution context which has it's own variable environment 'es' which returns a function object and finishes.
+ Now we have two spots in memory that have execution context that gets contained.
+ greetEnglish('John', 'Doe'); is called with a new execution context, JavaScript knows the first one was created so it points to 'en' this is where the __closuer__ is.
+ When the greetSpanish line is hit it's pointing at a very similar object which generates its own execution context.
+ That was created in the second call. So it's outer reference points the second execution context. 'es' forms it's own __closuer__.  
+ whenever you create a function it get's its own execution context and any functions that are created inside of it will point to that execution context.
+ Now it knows which one to point to properly, this is a language feature.