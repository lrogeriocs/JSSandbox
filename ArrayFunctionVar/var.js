//1 ---- using var
console.log('using var---------')
for(var i = 0; i<10; i++){
    console.log(i);
}

//i still accesible after the loop
console.log('last value:' + i);
console.log('--------------------');

//2------using let
console.log('using let---------')
for(let k = 0; k<10; k++){
    console.log(k);
}

//K is not accesible after the loop
//k just live during the loop execution
try{
 console.log('last value:' + k);
}catch(e){
    console.log('value is not accesible');
}
console.log('--------------------');

//3---------- j inside the belogs to another context
let j = 35;
for(let j = 0; j<10; j++){
    console.log(j);
}

// j inside the loop belogs to another context
try{
 console.log('last value:' + j);
}catch(e){
    console.log('value is not accesible');
}
console.log('--------------------');



