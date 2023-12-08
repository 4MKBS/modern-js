function log(anything){
    return console.log(anything);
}

// // let myArray= new Array();
// let mySet= new Set();
// mySet.add(55);
// mySet.add('sakib');
// // mySet.delete('sakib');
// mySet.add(22).add(33).add('mkbs').add(66);

// log(mySet.size);

/*
import export

export const pi=3.1416;
 const name='sakib';
export default name;

import {pi,name} from 'path';
//import all 
import * as ok from "path";
import {pi as p, name as n} from "path";
import external from 'path';
import external , {other} from 'path';
log(ok.name);



*/



// let a=[4,5,6,7,3,3,55,7,8];
// log([...new Set(a)].sort());

// let a=new Set([1,2,3]);
// let b=new Set([4,3,2]);
// let union=new Set([...a,...b]);
// log(union);
// let intersection=new Set([...a].filter(x=>b.has(x)));
// log(intersection)
// let diff=new Set([...a].filter(x=> !b.has(x)));
// log(diff);


// let a =['js','php','py','rubi','rust','go'];
// a.copyWithin(3,1,2);
// log(a);


// let arr=[1,2,4,6,23,2,3,2,2,11,22,44,53,2,2,4];

// let compare=function(a,b){
//     return a-b;//assending order
//     // return b-a;//desecding order
// }

// let sort=arr.sort(compare);
// log(sort);


// const car=[
//     {
//         type:'volvo',
//         year:2015,
//     },
//     {
//         type:'saab',
//         year:2011,
//     },
//     {
//         type:'bmw',
//         year:2014,
//     },
// ];
// const sortcarwithyear=car.sort(function(a,b){
//     return a.year - b.year;
// });
// log('sort by year');
// log(sortcarwithyear);

// const sortcarbytype=car.toSorted(function(a,b){
//     const x=a.type.toLowerCase();
//     const y=b.type.toLowerCase();
//     if(x<y){
//         return -1;
//     }else if(x>y){
//         return 1;
//     }else{
//         return 0;
//     }
// });
// log('sort by type');
// log(sortcarbytype);
// log(car);


