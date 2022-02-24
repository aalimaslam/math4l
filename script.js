particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const height = document.body.clientHeight
document.querySelector("#particles-js").style.height = `${height}px`

const scrollToTop = (element)=>{
    element.onclick = ()=>{
        window.scrollTo({top:0});
    }
}

const toTop = document.querySelector(".to-top");
scrollToTop(toTop)