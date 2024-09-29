//https://v4.brittanychiang.com/#contact

let NavItems=document.querySelectorAll(".nav-items");
let currentUrl = window.location.href;

for(let i=0;i<NavItems.length;i++){
    if(NavItems[i].href==currentUrl){
        NavItems[i].style.color="#50C8B0";
        NavItems[i].style.fontSize="20px";
    }
}

function openNav(){
    document.querySelector(".close-nav").style.display="flex";
    document.querySelector("nav").style.display="flex";
    document.querySelector(".open-nav").style.display="none";
}
function closeNav(){
    document.querySelector("nav").style.display="none";
    document.querySelector(".open-nav").style.display="flex";
}

function sendEmail(){
    let contactContainer=document.querySelector(".contact-container").style.display="none";
    let conferma=document.querySelector(".conferma").style.display="flex";
}
