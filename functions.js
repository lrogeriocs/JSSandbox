//Template Literal

console.log('===================Template literal section================');
const name = 'Luiz';

//without template literal
const selectQueryWithoutTL = 'select * from table where name = '+ name;
console.log(selectQueryWithoutTL);
//using template literal
const selectWithTL = `select * from table where name = ${name}`;
console.log(selectWithTL);

//multilines
const multlineWithoutTL = 'This is a paragraph ' 
+'with 3 lines without '
+'Template Location';

console.log(multlineWithoutTL);

const multilinesWithTL = `this is a 3 lines
 paragraph using
 Template location`;
console.log(multilinesWithTL);

console.log('===============End of Template literal section=============');
console.log();
console.log('==================Rest Argments section=====================');

//old way
//Using this way you cannot use the filter function because
// the argments are not a stardand array (see on console)
function getMax (upperLimit){
    console.log('getMax======================');

    console.log(`upperLimit: ${upperLimit}`);
    console.log(`arguments: ${arguments}`);
    let max = 0;
    for(let i = 0; i < arguments.length; i++){
        if((upperLimit > arguments[i]) && (arguments[i] > max )){
            max = arguments[i];
        }
    }
    console.log(`max = ${max}`);
    console.log("============================");
}

//using rest Parameter
function getMaxWithRestParameter (upperLimit, ...numList){
    console.log('getMaxWithRestParameter============');
    
    console.log(`upperLimit: ${upperLimit}`);
    console.log(`arguments: ${upperLimit}`);
    let max = 0;
    numList.filter(function(n){
        if((upperLimit > n) && (n  > max)){
            max = n;
        }
    });
    console.log(`max = ${max}`);
    console.log("============================");

}


console.log(getMax(8,9,10,11,1,2,4,7,12,25));
console.log(getMaxWithRestParameter(8,9,10,11,1,2,4,7,12,25));

function sum (...numbers){
    console.log('printing sum');
    return numbers.reduce(function(total, num){
       return total+num;
    })
}

const restway = sum (1,2,3,4,5);
console.log(restway);


console.log('===============End of Rest Argments section=================');
console.log();
console.log('======================Spread Syntax=========================');

function getSum(a, b, c, d ,e, f){
    console.log('get Sum spread syntax: ');
    return a +b +c +d + e+f;
}

console.log(getSum(...[1,2,3,4,5,6]));

function getPriceMember(price, des, tax){
    console.log('getPriceMember');
    return (price -(price * des)) * (1+tax);
}

console.log(getPriceMember(...[10, 0.3, 0.02]));

console.log('array copy ===========');
//using this way array A and B point to same place, 
//any change in A or B will be reflected in both arrays.
let arrayA = [1,2,3,4];
console.log(`array A value :${arrayA}`);
let arrayB = arrayA;
console.log(`array B value :${arrayB}`);
arrayB.push(44);
console.log(`array B value after Push In B :${arrayB}`);
console.log(`array A value after Push In B :${arrayA}`);

console.log('array copy using Spread Syntax=============');
//using this way array D is a copy of Array C, 
//any change in C or D will be reflected just in itself.
let arrayC = [1,2,3,4];
console.log(`array A value :${arrayC}`);
let arrayD = [...arrayC];
console.log(`array B value :${arrayD}`);
arrayD.push(44);
console.log(`array D value after Push In D :${arrayD}`);
console.log(`array C value after Push In D :${arrayC}`);
console.log('===================End of Spread Syntax=========================');











