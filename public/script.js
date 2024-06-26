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

tl.from(".text-center",{
    y:150,
    scale:0.9,
    opacity:0,
    // duration:2.2,
    scrollTrigger:{
        trigger:".page3",
        start: "top 65%",
        
        end: "top 10%",
        scrub:2
        
    }
})
tl.from(".flex-text",{
    y:150,
    
    opacity:0,
    // duration:2.2,
    scrollTrigger:{
        trigger:".page3",
        start: "top 65%",
        
        end: "top 10%",
        scrub:2
    }
})

gsap.to("#product_pack", { duration: 2, y:-0.5, ease: Power1.easeInOut, repeat: -1, yoyo: true })


const productanimation=()=>{
tlproduct=new TimelineMax({ repeat: -1 })

.from(".pack1",{
    opacity:0,
    y:45,
    delay:0.1,
    duration:1.5
})

.to(".pack1",{
    opacity:0,
    y:-45,
    delay:6,
    duration:1.5
})


.from(".pack2",{
    opacity:0,
    y:45,
    duration:1.5
})

.to(".pack2",{
    opacity:0,
    y:-45,
    delay:6,
    duration:1.5
})

gsap.to(tlproduct, 27, {ease:Power1.easeInOut})
}
productanimation()
