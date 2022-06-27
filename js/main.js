window.load = startAd();
function startAd(){
    setTimeout(function(){
        document.getElementById("screen1").classList.add("show");
    },250)
    setTimeout(function(){
        document.getElementById("screen2").classList.add("show");
    },250)
    setTimeout(function(){
        document.getElementById("copy1").classList.add("show");
    },750)
    setTimeout(function(){
        document.getElementById("copy2").classList.add("show");
    },1250)
    setTimeout(function(){
        document.getElementById("copy3").classList.add("show");
    },1250)
    setTimeout(function(){
        document.getElementById("logo").classList.add("show");
    },1500)
    setTimeout(function(){
        document.getElementById("icon1").style.transform='scale(1)'
        document.getElementById("icon1").style.transition='all 0.2s'
        document.getElementById("icon1").style.opacity='1'
    },1750)
    setTimeout(function(){
        document.getElementById("icon2").style.transform='scale(1)'
        document.getElementById("icon2").style.transition='all 0.2s'
        document.getElementById("icon2").style.opacity='1'
    },2000)
    setTimeout(function(){
        document.getElementById("icon3").style.transform='scale(1)'
        document.getElementById("icon3").style.transition='all 0.2s'
        document.getElementById("icon3").style.opacity='1'
    },2250)
    setTimeout(function(){
        document.getElementById("icon4").style.transform='scale(1)'
        document.getElementById("icon4").style.transition='all 0.2s'
        document.getElementById("icon4").style.opacity='1'
    },2500)
    setTimeout(function(){
        document.getElementById("button").style.transform='translate(-2px)'
        document.getElementById("button").style.transition='all 0.5s'
        document.getElementById("button").style.opacity='1'
    },2600)
    
}
 
