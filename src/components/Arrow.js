
// let greet=()=>{
//     console.log(this)
// }
// const greet=function(n){
//      this.name=n;
//      this.talk=function(){
//         console.log(this)
//      }
//     return setTimeout(function(){
//         console.log("hello"+this.name)
//         console.log(this)
//     }.bind(this),1000)
// }
// const hello=new greet("Vibhu");
// console.log(hello)
// function intro(){
//     console.log("hello"+this.name)
//     console.log(this)
// }
// let obj={
//     name:"Vibhu",
//     intro
    
    
// }
// console.log(obj.intro())
// let obj1={
//     name:"Ravi",
    
    
// }
// console.log(intro.bind(obj)());
// {
//     {
//         let a=89;
//     }
//   var a=90;
//    console.log(a)
// }
// console.log(a)
// const array=[45,56,89,88,7]
// Array.prototype.game=function(value){
//     value=78;
   
//     console.log(this)
//     return value
// }
// const sum=array.game((value1)=>{
//     return value1
// });
// console.log(sum)
//  const sum1=array.reduce((acc,cuur,index,array)=>{
//    return acc=acc+cuur
//  },0)
//  console.log(sum1)
//  Array.prototype.myReducefn=function(callback,intialvalue){
//      let accumaltor=intialvalue
//     for(let i=0;i<this.length;i++){
//        accumaltor=accumaltor?callback(accumaltor,this[i],i,this):this[i]
//    }
//    return accumaltor
//  }
//  const sum2=array.myReducefn((acc,curr)=>{
//     acc=acc+curr
//     return acc
//  },0)
// console.log(sum2)

// let hello=function(word){
//     console.log(word)
// }
// let greet=function(callback){
//     let name="Vibhu"
//     let sirname="Mathur"
//     console.log(name)
//    let s=callback(sirname);
//    return s
// }
 
    // console.log(greet(hello))
const block1=document.getElementById("b1")
console.log(block1)
let counter=0;
 block1.addEventListener(("click"),()=>{
  counter++;
  block1.classList.toggle("style")
 })
 
 
