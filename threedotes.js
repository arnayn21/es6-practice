const ages =[12,14,15,17];
const ages2 =[16,18,15,17];
const ages3 =[22,20,24,25,21];

const allAges = ages.concat(ages2).concat(ages3);
const allAges1=[...ages,...ages2,...ages3,5]

console.log(allAges);


const a= 250;
const b=330;
const c=260;
const d=299;
const maximum = Math.max(a,b,c,d);
console.log(maximum);

const taka=[100,102,200,199];
const maximum1 = Math.max(...taka);
console.log(maximum1);
