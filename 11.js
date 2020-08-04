"use strict"

let num=Math.floor(Math.random() * 11);
console.log(num);
let userNumber;
do {
  userNumber = prompt("Введите число от 0 до 10" );
  if ( Number(userNumber) === num){
    alert("Вы выиграли");
  }
  else if( userNumber === null){
    alert("Вы вышли из игры");
  }
} while (userNumber!==num);

