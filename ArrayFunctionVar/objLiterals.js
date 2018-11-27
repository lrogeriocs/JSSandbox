//destruturing

const someJson = {
   title : 'Fight Club',
   director: 'Fisher',
   release_data : '20-01-2000',
   rating : 'good',
   duration : '120 minutes',
   genre : 'thirller'
};

//old way to get each attribute

let titleJson = someJson.title;
let directorJson = someJson.director;
let ratingJson = someJson.rating;

console.log('Old way===========');
console.log (`${titleJson}
${directorJson}
${ratingJson}`);

//new fancy way
console.log('new fancy way===========');
const {title, director, rating} = someJson;

console.log (`${title}
${director}
${rating}`);

var processData1 = (data)=>{
   console.log(`old way ${data.title} ,${data.director}, ${data.rating}`);
}

var processData2 = ({title, director, rating})=>{
   console.log(`destructuring way ${title}, ${director}, ${rating}`)
}

processData1(someJson);

processData2(someJson);