const startbutton = document.querySelector('.startbutton');
const wordlist1 = document.querySelector(".wordcontainer1");
const words1 = wordlist1.children;
const wordlist2 = document.querySelector(".wordcontainer2");
const words2 = wordlist2.children;
const queslist = document.querySelector(".ques");
const ques = queslist.children;
const outro = document.querySelector(".outro");

startbutton.style.display = "none";

let tl1 = anime.timeline({ loop: false, easing: 'linear', autoplay: true });
let tl2 = anime.timeline({ loop: false, easing: 'linear', autoplay: true });

let a = 0;

for (let i = 0; i <= 4; i++) {
    tl1.add({
        targets: words1[i],
        opacity: [
            { value: 1, duration: 500, endDelay: 1500 },
            { value: 0, duration: 500 },
        ],
        endDelay: 500,
        complete: function () {
            a += 1;
            if (a === 5) {
                startbutton.style.display = "block";
                start.play();
            }
        }
    });
}


let start = anime({
    autoplay: false,
    targets: '.six',
    translateY: anime.stagger(-30 + 'vh'),
    opacity: 1,
    duration: 4000
});

let startdown = anime({
    targets: '.six',
    autoplay: false,
    easing: 'easeOutExpo',
    translateY: 10 + 'vh',
    opacity: 0,
    duration: 1000,
    complete: function () {
        wordlist1.style.display = "none";
        queslist.style.display = "unset";
        quesAnimation();
    }
});

let b = 0;

function quesAnimation() {
    anime({
        begin: function () {
            ques[b].style.display = "flex";
        },
        autoplay: true,
        targets: ques[b],
        opacity: 1,
        delay: 500,
        duration: 1000
    })
}

startbutton.onclick = startdown.play;
document.querySelectorAll(".sel").forEach(div =>
    div.onclick = function () {
        b += 1;
        ques[b - 1].style.display = "none";
        quesAnimation();
    }
)

document.querySelectorAll(".lastsel").forEach(div =>
    div.onclick = function () {
        ques[b].style.display = "none";
        wordlist2.style.display = "flex";
        result();
    }
)

function result() {
    let a = 0;
    for (let i = 0; i < words2.length; i++) {
        tl2.add({
            delay: 100,
            targets: words2[i],
            opacity: [
                { value: 1, duration: 500, endDelay: 2000 },
                { value: 0, duration: 500 },
            ],
            endDelay: 500,
            complete: function () {
                a += 1;
                if (a === words2.length) {
                    console.log("hi");
                    wordlist2.style.display = "none";
                    outro.style.display = "flex";
                    tl3.play();
                }
            }
        });
    }
}

var textWrapper = document.querySelector('.outrotxt');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var tl3 = anime.timeline({autoplay:false});
  tl3.add({
    targets: '.outrotxt .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });
  tl3.add({
    begin: function(){
        console.log("hi");
    },  
    targets: ".btn",
    opacity: 1,
    duration: 3000
  });