let ash=document.getElementById("ash_png")
let burn=document.getElementById("burn_png")
let second_page=document.getElementsByClassName("page2")[0]
ash.addEventListener('mouseover',()=>{
    console.log("mouse enter")
    tl=gsap.timeline()
    
    // gsap.to("#flames",{
    //     opacity:0.4,
    //     duration:1.8
    // })
    gsap.to("#ash_png",{
        opacity:0,
        duration:1.8
    })
})
ash.addEventListener('mouseleave',()=>{
    console.log("mouse leave")
    tl=gsap.timeline()
    gsap.to("#ash_png",{
        opacity:1,
        duration:1.8
    })
    // gsap.to("#flames",{
    //     opacity:0,
    //     duration:1.8
    // })
    
})
gsap.from(".page2",{
    y:350,
    opacity:0.1,
    duration:2.2,
    scrollTrigger:{
        trigger:".page2",
        start: "top 65%",
        end: "top 30%",
        
    }
})
