function displayTime(){
    var dateTime= new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var session= document.getElementById("session");

    if(hrs>=12){
        session.innerHTML='PM';
    }else{
        session.innerHTML='AM';
    }

    if(hrs>12){
        hrs = hrs-12;
    }

    var hours=document.getElementById("hours").innerHTML=hrs;
    var minutes=document.getElementById("minutes").innerHTML=min;
    var seconds=document.getElementById("seconds").innerHTML=sec;

    if(6<=hours.innerText && 10>=hours.innerText){
        text1.innerText="GOOD MORNING!! WAKE UP !!";
        text2.innerText='GRAB SOME HEALTHY BREAKFAST!!!';
        img.style.backgroundImage="url('Component\ 30\ –\ 1.svg')";
    }
    else if(12<=hours.innerText && 15>=hours.innerText) {
        text1.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
        text2.innerText="Let's Have Some Lunch!!";
        img.style.backgroundImage="url('Afternoon.svg')";
    }
    else if(16<=hours.innerText && 19>=hours.innerText){
        text1.innerText="GOOD EVENING !!";
        text2.innerText="STOP YAWNING,GET SOME TEA.. Its just evening!";
        img.style.backgroundImage="url('tea.avif')"
        text1.style.color= black;
        text2.style.color= black;
    }

    else if (20<=hours.innerText || 1<=hours.innerText ){
        text1.innerText="GOOD NIGHT !!";
        text2.innerText="CLOSE YOUR EYES AND GO TO SLEEP!";
        img.style.backgroundImage="url('night.svg')";
        text1.style.color= black;
        text2.style.color= black;
    }
}
setInterval(displayTime,10);

/*
function dropdown(){
    var wakeValue=document.getElementById("wakeUp").value;
    var lunchValue=document.getElementById("lunch").value;
    var napValue=document.getElementById("napTime").value;
    var nightValue =document.getElementById("nightTime").value;

    document.getElementById("wp").innerHTML=wakeValue;
    document.getElementById("lt").innerHTML=lunchValue;
    document.getElementById("nt").innerHTML=napValue;
    document.getElementById("nigt").innerHTML=nightValue;


}

let setalarm = document.getElementById("alarm");
setalarm.addEventListener("click",dropdown());

*/



let wakeup = document.getElementById("wakeUp");
setalarm=document.getElementById("alarm")

wakeup.addEventListener("change",function(event){
    // console.log(event.target.value)
    let wake=(event.target.selectedOptions[0].innerText)
    // console.log(wake)
    setalarm.addEventListener("click",function(){
    wp.innerText=wake
    })
})

let lunchTime= document.getElementById("lunch");

lunchTime.addEventListener("change",function(event){
    let lunch=(event.target.selectedOptions[0].innerText)
    setalarm.addEventListener("click",function(){
        lt.innerText=lunch
    })
})


let napTime=document.getElementById("napTime");


napTime.addEventListener("change",function(event){
    let nap=(event.target.selectedOptions[0].innerText)
    setalarm.addEventListener("click",function(){
        nt.innerText=nap;
    })

})


let night=document.getElementById("nightTme");

night.addEventListener("change",function(event){
    let ngt=(event.target.selectedOptions[0].innerText)
    setalarm.addEventListener("click",function(){
        nigt.innerText=ngt;
    })
})
