const clock= document.querySelector('.clock');

const tick=()=> {
    const now= new Date();
    let am_pm= 'am';
    let h= now.getHours();
    
    if(h>12){
         h-= 12;
         am_pm= 'PM';
    }
    else{
         h= h;
         am_pm= 'AM';
    }
    if(h<10){
        h= '0'+h;
    }
    else{
        h=h;
    }
    let m= now.getMinutes();
    if(m<10){
        m= '0'+m;
    }
    else{
        m=m;
    }

    let s= now.getSeconds();
    if(s<10){
        s= '0'+s;
    }
    else{
        s=s;
    }

    const html=`
    <span>${h}</span> : 
    <span>${m}</span> :
    <span>${s}</span> 
    <span>${am_pm}</span>
    `;
    clock.innerHTML= html;
};

setInterval(tick, 1000);