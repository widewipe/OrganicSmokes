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
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        start: "top 80%",
        end: "top 30%",
        
    }
})

// PAGE 3

gsap.from(".p3h", {
    opacity: 0,
    y: 75,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.p3h',
        start: 'top 80%',
        end: 'top 30%',
    }
})

gsap.from(".lrow", {
    x: -200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.lrow',
        start: 'top 80%',
        end: 'top 30%',
    }
})

gsap.from(".rrow", {
    x: 200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.lrow',
        start: 'top 80%',
        end: 'top 30%',
    }
})