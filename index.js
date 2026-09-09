const menu = document.querySelector(".main i")

const cross = document.querySelector(".items i")


var t1 = gsap.timeline();

t1.to(".items", {
    right: 0,
    duration: 0.2,
});

t1.from("h2",{
    x:120,
    opacity:0,
    stagger:0.2

})

t1.from(".items i",{
    opacity:0,
    duration:0.1

})

t1.pause()


menu.addEventListener("click",function(){
    t1.play()
})

cross.addEventListener("click",function(){
    t1.reverse()
})