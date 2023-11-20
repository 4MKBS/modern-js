// function number(){
//     return 10;
// }

// console.log(number());
// let n=()=> console.log(10);
// // let n=()=> return 12; we cant do this we need to earase return 

// // console.log(n());
// // n()
// let ok=(n)=>{
//     console.log(n);
// }
// ok(23);
// let ok=(n,m)=>{
//     console.log(n+m);
// }
// ok(23,7);
// let ok=(n,m)=>n+m;
// console.log(ok(23,7));
// let javascript={
//     name:'javascript',
//     library:['react','angular','vue'],
//     prnt: function(){
//         this.library.forEach((a)=>console.log(`${this.name} loves ${a}`)
//         )
//     },
// };
// javascript.prnt();
const inp=document.querySelector(".search");
const result=document.querySelector(".res");
const thanks=document.querySelector(".thnk");
function show(){
    result.innerHTML=this.value;
    setTimeout(()=>{
        thanks.innerHTML=`you just typed ${this.value}`;
    },1000);
}
inp.addEventListener("keyup",show);

// console.log(inp);
// console.log(result);
// console.log(thanks);
