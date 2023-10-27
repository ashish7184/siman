let gameSeq=[];
let usreSeq=[];
let red=0;
let green=0;
let yel=0;
let pal=0;
let btns=["yellow","green","red","purpal"];

let started =false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    },250);
}

function levelup(){
    usreSeq=[];
    level++;
    h2.innerText=`Level : ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameflash(randbtn);
    console.log(gameSeq); 
}


 function checkAns(idx){
    // console.log("curr Level : ",level);
    // let idx=level-1;
    if(usreSeq[idx]===gameSeq[idx]){
       if(gameSeq.length==usreSeq.length){
       setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML=`Game over! Your score was <b> ${level} </b> <br> any key press and Re-Start game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
 }
//add Eevent Listner

function btnpress(){
    // console.log(this);
   let btn=this;
   userflash(btn);

   userColor=btn.getAttribute("id");
   if(userColor=='red'){
    red++;
   }else if(userColor=='green'){
    green++;
   }else if(userColor=='yellow'){
    yel++;
   }else{
    pal++;
   }
   usreSeq.push(userColor);
   console.log("Red : "+red);
   console.log("Green : "+green);
   console.log("Yellow : "+yel);
   console.log("parpal : "+pal);
   checkAns(usreSeq.length-1);
}

let allbtn=document.querySelectorAll(".first");

for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    usreSeq=[];
    gameSeq=[];
    level=0;
}
