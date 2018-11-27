setTimeout(() => {
    console.log("line 1, 0 timeout") 
}, 0);

console.log('lIne 2');
setTimeout(()=>{
    console.log("line 3, 3000 timeout")
});

for(let i = 0; i<1000000; i++){
    if(i = 1000000){
        console.log('done with loop');
    }
}

//Java Script works with the event queue.. all those async calls ( SetTimeout, htpp request e etc..) 
// will be put on this event queeue and will be in another thread. 
//Every time that java scripts sees these kind of calls he passes to the next line executing the next 
//non sync operation.

// //In a really simplistc way this is what happens
// 1 - the line 1 goes to the eventQueue
// 2- line 2 goes to the call stack ( need to remember the name of this stak);
// 3- line 2 is executed and removed from the call stack
// 4 -line 3 goes to the event queue
// 5 -line 3 is executed and removed from the call stack
// 6- line 4 goes to the eventQueue
// 7- event queeue (line 1) is executed and sent to the stack
// 8- line 1 is printed
// 9- event queee(line 3) is executed and sent to the stack