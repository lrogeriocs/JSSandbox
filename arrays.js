
var printTitle = (title)=>{
    console.log();
    console.log((title+" ==============================================================").substring(0,50));
    console.log();
}

//traditional for
printTitle('Tradicional For');
const array1 = [1,2,3,4,5];
for (let i = 0; i <array1.length; i++){
    console.log(array1[i]);
}
//for ..in ( interates over the index )
printTitle('For ...in');
const array2 = [6,7,8,9,10];

for(let key in array2){
    console.log(key);
}

printTitle('For ...in  using object');
//using object 

const jsonObject ={
    name : "Luiz",
    occ : "SE",
    tec: "Apex"
}

for (let key in jsonObject){
    console.log(jsonObject[key]);
}

printTitle('For ...of');

//for.. of interates over the values

const array3 = ['Anna', 'MAria', 'Silva'];

for(let value of array3){
    console.log(value);
}

const name = 'Jose Silva Sauro';

for(let value of name){
    console.log(value);
}

//array.prototype.foreach
printTitle('forEach');

array3.forEach((value)=>{
   console.log(value);
})

//you can also access the index :

array3.forEach((value, i)=>{
    console.log(`value = ${value}`);
    console.log(`index = ${i}`);
});

//Array.from
printTitle('Array.from');

const array4 = Array.from('Luiz');
console.log(array4);

let line1 = `this is the first line`;
let line2 = `this is the second line`;
let line3 = `this is the thrid line`;

//array from with arrow functions

const lines = Array.from([line1, line2, line3], (line)=>{
    return `<li>${line}</li>`
        }
    )
console.log(lines);
printTitle('Array.of');

//Array.of
const array5 = Array.of(7, 4);
const array6 = Array(7);

const array7 = Array.of(2, 'Luiz', [14,5,5], {name: 'luiz'});

console.log(array5);
console.log(array6);
console.log(array7);

//Array fill
printTitle('Array fill');

const arrayFill =[2,3,'a', 23, 45, 'ss'];
console.log(arrayFill);
arrayFill.fill("b",3,4); // this mutate the array
console.log(arrayFill);




