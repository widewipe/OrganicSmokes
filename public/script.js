let ash=document.getElementById("ash_png")
let burn=document.getElementById("burn_png")
let second_page=document.getElementsByClassName("page2")[0]
let tl = gsap.timeline({});


// const button = document.getElementsByClassName('circle')[0];
// const textbase = document.getElementsByClassName('text-base')[0];
// // Get the button's bounding rectangle dimensions and position
// let boundingRect = button.getBoundingClientRect();

// // Add an event listener to the window to update the bounding rectangle dimensions
// // when the window is resized
// window.addEventListener('resize', () => {
//   boundingRect = button.getBoundingClientRect();
// });
// console.log(boundingRect);
// // Add an event listener for mouse movement over the button
// textbase.addEventListener('mouseover', (e) => {
//   // Calculate mouse position relative to the button
//   const mousePosX = e.x - boundingRect.left; // X position
//   const mousePosY = e.y - boundingRect.top;  // Y position
//   console.log("enter");
//   // Use GSAP (GreenSock Animation Platform) to animate the button
//   // This creates a 'magnetic' effect where the button moves towards the mouse
//   gsap.to(button, {
//     x: (mousePosX - boundingRect.width / 2) * 0.4, // Move horizontally towards mouse
//     y: (mousePosY - boundingRect.height / 2) * 0.4, // Move vertically towards mouse
//     duration: 0.8, // Duration of the animation
//     ease: 'power3.out', // Easing function for smooth animation
//   });
// });

// // Add an event listener for when the mouse leaves the button area
// button.addEventListener('mouseleave', () => {
//   // Animate the button back to its original position
//   gsap.to(button, {
//     x: 0, // Reset horizontal position
//     y: 0, // Reset vertical position
//     duration: 0.8, // Duration of the animation
//     ease: 'elastic.out(1,0.3)' // Easing function for a 'springy' return
//   });
// });

ash.addEventListener('mouseover',()=>{
    console.log("mouse enter")
    
    
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

// page2

gsap.from(".box",{
    y:200,
    opacity:0,
    delay:0.3,
    ease: "power2.out" ,
    duration:1,
    stagger: 0.1,
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
