/*
const dice = document.getElementById("dice");
const number = document.getElementById("number");
const advice = document.getElementById("advice");

let numbers = 117;
let advic = [
    "my mom is iking",
    "empy barrels makes th ost noise",
    "imon a deeper level"
]; 

 dice.addEventListener('click', ()=>{

       let random = advic[Math.floor(Math.random() * advic.length)];
         numbers++;         
         number.innerHTML = numbers;
         advice.innerHTML ='"'+ random +'"';
 })
 */

 dice.addEventListener('click', ()=>{

     fetch('https://api.quotable.io/random')
     .then(response => {
         return response.json ();
     })

     .then (random => {
         advice.innerHTML = `${'"'+ random.content + '"'}`;
         numbers++;
         number.innerHTML = numbers;
        
     })

     
    

    });
    
//  });



// const promiseEg = new Promise((resolve, reject)=>{


//     sum = 7+5;
//     if ( sum > 0 ){
//         resolve("Thats correct")
//     }else{
//         reject("Thts wrong")
//     }
// })
// console.log("Online");
// console.error("err");
// alert ("We're live")