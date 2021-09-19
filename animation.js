let tl = anime.timeline({ loop: false, easing: 'linear' });
const wordlist1 = document.querySelector(".wordcontainer1");
const words1 = wordlist1.children;

for (let i = 0; i < words1.length; i++) {
    tl.add({
        delay: 500,
        targets: words1[i],
        opacity: 1,
        duration: 1000,
        endDelay: 5000
    })

    tl.add({
        targets: words1[i],
        opacity: 0,
        duration: 500
    })
}