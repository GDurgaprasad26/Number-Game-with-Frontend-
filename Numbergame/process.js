let num=Math.round(Math.random()*100);
let life=6;

function digit(){
    let a=document.querySelector("#message");
    let userinput = Number(document.querySelector("#index").value);
    life--;
    document.getElementById("message").style.display='block';
    if(num==userinput){
        location.href="success.html";
    }
    else if(life==0){
        location.href="lose.html";
    }
    if(num<userinput){
        a.innerHTML="oops! user input is too high and Remaining life is "+life;
    }
    else if(num>userinput){
        a.innerHTML="oops! user input is too low and Remaining life is "+life;
    }
    document.querySelector("#display").value="";
}
function retry(){
    location.href="index.html";
}


