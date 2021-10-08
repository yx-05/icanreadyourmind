const iconbackground = document.querySelector('.iconbackground');
const icons = iconbackground.children;



for(let i=0; i<icons.length; i++){
    let random1 = Math.floor(Math.random() * (40+25+1)-30);
    icons[i].style.top = random1 + "vh";
}


setInterval(function(){
    let random = Math.floor(Math.random() * 85) + 1;
    let random2 = Math.floor(Math.random() * 79) + 1;
    icons[11].style.left = random + "vw";
    icons[11].style.top = random2 + "vh";
}, 4000);






