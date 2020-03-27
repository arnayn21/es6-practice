// function doubleIt(num){
// const result = num*2;
// return result;
//  }

//    const doubleIt = function(num){
//    return num *2;
//    }


const doubleIt = num => num*2;
const add = (x,y) => x+y ;
const gives =()=> 5;
const math =(x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result3=sum*diff;
    return result3;
}

const result =add(50,100);
const result1 = doubleIt(5);
const result2=gives();
const result4 =math(7,5);


console.log(result1);
console.log(result);
console.log(result2);
console.log(result4);