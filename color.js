function randomgen(){
    let str='123456789ABCDEF'
    let result='#'
    let d=document.createElement("div");
    for(let i=0;i<6;i++){
        result+=str[Math.floor(math.random()*15)]
    }
    d.style.width="100px";
    d.style.height="70px";
    d.innerHTML=result;
    d.style.backgroundColor=result;
    d.style.display="inline-block";
    d.style.textAlign="center";
    d.style.borderStyle.appendchild(d);

    }
setInterval(randomgen,1000);
