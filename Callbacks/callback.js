//Calbacks - is just a function that will be called later
//funtions = 1st class objects
//- pass them aroud 
//- store them in varibles

const printUpper = (text)=>console.log(text.toUpperCase());

const printNumber = (number) => console.log(number);

function run (callback, input){
    callback(input);
}

run(printUpper, 'luiz');

//wonky examples -----
function a(x){
    console.log(x);
    return (y)=> console.log(x+y);
}

a(3)(4);

