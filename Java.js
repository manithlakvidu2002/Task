const startbtn = document.querySelector("#btnStart");
const stopbtn = document.querySelector("#btnStop");
const minusbtn = document.querySelector("#btnMinus");
const plusbtn = document.querySelector("#btnIncrement");
let display = document.querySelector("#display");
let txt;
let interval;
let bool = true;

startbtn.addEventListener("click",function (){
    bool = true;
    txt = document.querySelector("#txt").value;
    if (txt === "0"){
    }else{
        display.innerText = txt;
    }

    interval = setInterval(function (){
        if (bool){
            display.innerText = parseInt(display.innerText)+1;
        }
    },1000);
});

stopbtn.addEventListener("click",function (){
    bool = false;
    clearInterval(interval);
});

minusbtn.addEventListener("click",function (){
    display.innerText = parseInt(display.innerText)-1;
});

plusbtn.addEventListener("click",function (){
    display.innerText = parseInt(display.innerText)+1;
});
