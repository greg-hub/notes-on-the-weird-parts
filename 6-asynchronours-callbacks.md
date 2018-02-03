# Asynchronous: More than one at a time. 
+ The the Javascript engine is synchronous, It executes code one line at a time.
+ any events that happen outside of the engine get placed into a queue and if the execution stack is empty it will process the event.
+ if a click event happens then an HTTP event it will process the click event first then run the function, complete it. Then look in the queue again for the next function (HTTP in this case
+ What's happening is the browser is asynchronously putting things in the event queue, but the code that is running is still running line by line. 

## This long-running function shows how Javascript handles asynchronous callbacks.
```javascript
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}


function clickHandler() {
    console.log('click event!');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finsihed execution');

//If you don't click after three seconds the browser will print
    // > finished function
    // > finished execution

//if clicked during the three seconds the browser will print
    // > finished function
    // > finished execution
    // > click event!
```
+ The function completed and the global execution finished before it created an execution context for click handler function. 
+ The javaScript engine won't look at the event queue until the stack is empty. 
+ Any events that happen outside of the engine get placed into the queue 
