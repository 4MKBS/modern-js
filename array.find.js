// //array.prototype.find()

// let arr=[1, 2, 3, 4, 5, 6, 7];
// let valu=arr.find(function(currentValue,currenIndex,array){//in this function we get two more value current index  and full array
//     return currentValue >= 5;
// },this);//find function first perameter is a function and second peremeter is  take THIS
// // console.log(valu);
// // console.log(arr);

// //findIndex is return your index number
// let findex=arr.findIndex(function(currentValue,index,array){
//     return currentValue >= 4;//when it can't find a number which is not exist in array then it return -1
// },this);//same thing here have this
// // console.log(findex);

// //now array filter method
// let result = arr.filter((currentValue,currenIndex,array)=>{
//     // console.log(currentValue);
//     // console.log(currenIndex);
//     // console.log(array);
//     return currentValue > 4;
// });
// console.log(result);

//now array.slice() splice()
//result=arr.slice(2,5);//this function is doing firstperemeter is take first index second paremeter is take end index and its not change main array
//result=arr.splice(2,3,22,44,55,66,77,99);//but splice is do 1sr perameter 1st index and second paremeter how many number you ant to cut,and its chang main aray and other perameter is take what value you want to add in that array
// console.log(result);
// console.log(arr);

//array concatanate
// let num=[1,2,3,4,5];
// let n2=[6,7,8,9,12];
// let res=num.concat(n2);
// console.log(res);

//array . push()
// let num=[1,2,3,4,5];
// num.push(33,44,55,66,77);
// console.log(num);

// array map()
// let num =[1,2,3,4,5];
// var result=num.map((n)=>{
//     return 2*n;
// });
// console.log(result);

// array reduce()
// let num=[1,2,3,4,5];
// let result=num.reduce((pvalue,cvalue,currenIndex,array)=>{
//     return pvalue+cvalue;
// },0);
// console.log(result);
