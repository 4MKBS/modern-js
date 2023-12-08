// for(let i=0;i<=5;i++){
//     console.log(i);
// }
// console.log(i);

const { spread } = require("axios");

// for in
// const obj={
//     name:"sakib",
//     age:18,
//     height:5,
// };
// for(p in obj){
//     console.log(p);
// }
// console.log(obj.name);

// for of
// let arr=[1, 2, 3, 4, 5];
// let s="i love coding with google";
// for(el of s){ //if you use in then it return index
//     console.log(el);
//  }

// some of the use full think for good code

// let x=7;//this vairiable obj short hand
// let y=4;
// const obj={
//     name:"sakib",
//     age:18,
//     height:5,
//     x,//object short hand
//     y,
// };
// console.log(obj.x);
// let key=Object.keys(obj);
// console.log(key);
// let value=Object.values(obj);
// console.log(value);
// let entri=Object.entries(obj);
// console.log(entri);


// function default perameter

// function myfunc(x=5){
//     return x;
// }
// console.log(myfunc(null));

// spread oparator

// var num=[1,2,3];
// var a=[...num];//exact copy of num
// // var newnum=[num[0],num[1],num[2],5,6,7];
// var newnum=[...num,5,6,7];
// num.push(34);
// console.log(a);
// console.log(num);

// var num1=[1,2,3];
// var num2=[4,5,6];
// var num=[...num1,...num2];
// console.log(num);

// const ob1={
//     name:'sakib',
// }
// const ob2={
//     age:21,
// }
// console.log({
//     ...ob1,
//     ...ob2,
// });

/*

// rest operator

// function nums(a,...params){
//     console.log(a);
//     console.log(params);
// }
// nums(1,2,3,4,5,6,6);
*/

// destructure

// obj destructuring
// const obj={
//     name:'sakib',
//     age:21,
//     id:1,
//     educaion:{
//         degree:'bsc',
//     }
// }
// const {name:title}=obj;
// console.log(title);

// const {educaion:{degree}}=obj;
// console.log(degree)

// array destructuring
// var arr=[1,2,[3,100,500],4,5];
// var [a,b]=arr;
// var [,a,,,b]=arr;
// var [,,[,a,b]]=arr;
// console.log(a,b);
// var a=1,b=2;
// [b,a]=[a,b];
// console.log(a,b);

// end destructure

// tammplate litarature

// let a =2,b=4;

// console.log(`this is tamplate litarature
// i love ${a+b} and i love ${b}`);

