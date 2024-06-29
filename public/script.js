let ash=document.getElementById("ash_png")
let burn=document.getElementById("burn_png")
let second_page=document.getElementsByClassName("page2")[0]

let tl = gsap.timeline({});

// orange circle 
Shery.makeMagnet(".orangeCircle", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


ash.addEventListener('mouseover',()=>{
    // console.log("mouse enter")
    
    
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
    // console.log("mouse leave")
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


//page4

//float animation

gsap.to("#product_pack", { duration: 2, y:-10, ease: Power1.easeInOut, repeat: -1, yoyo: true, willChange: "transform" })
  
 //fade animation
 
  const productAnimation = () => {
    const tlProduct = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); 
  
    tlProduct
      .fromTo(".pack1", {
        opacity: 0,
        y: 45
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out"
      })
      .to(".pack1", {
        opacity: 0,
        y: -45,
        duration: 0.5,
        ease: "power1.in",
        delay: 5.5 
      })
      .fromTo(".pack2", {
        opacity: 0,
        y: 45
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out"
      })
      .to(".pack2", {
        opacity: 0,
        y: -45,
        duration: 0.5,
        ease: "power1.in",
        delay: 5.5 
      });
  };
  
  productAnimation();
  
// PAGE 5

let p5h = document.getElementById('products-heading');
let ts = document.getElementById('topsellers');
let smoke_box=document.getElementsByClassName("smoke_box")[0]
let smoke_bottle=document.getElementsByClassName("smoke_bottle")[0]

gsap.from(p5h, {
    opacity: 0,
    x: -500,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.page5',
        start: 'top 80%',
        end: 'top 30%',
    }
})

gsap.from(ts, {
    x: -70,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.page5',
        start: 'top 60%',
        end: 'top 30%'
    }
})


    //zoom effect

// smoke_box.addEventListener('mouseover',()=>{
//     console.log("mouse enter")
    
    
    
//     gsap.to(".smoke_box",{
//         scale:1.1,
//         duration:0.8
//     })
// })
// smoke_box.addEventListener('mouseleave',()=>{
//     console.log("mouse leave")
    
//     gsap.to(".smoke_box",{
//         scale:1,
//         duration:0.8
//     })
    
    
// })

// smoke_bottle.addEventListener('mouseover',()=>{
//     console.log("mouse enter")
//     gsap.to(".smoke_bottle",{
//         scale:1.1,
//         duration:0.8
//     })
// })
// smoke_bottle.addEventListener('mouseleave',()=>{
//     console.log("mouse leave")
    
//     gsap.to(".smoke_bottle",{
//         scale:1,
//         duration:0.8
//     })
    
    
// })

    //tilt animation

const card_tilt = (element) => {
    const selector = `#${element.id}`;
    element.addEventListener('mousemove', (event) => {
        gsap.set(element, { transformPerspective: 500 });
        
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left; // X coordinate relative to the element
        const y = event.clientY - rect.top;  // Y coordinate relative to the element
        
        const xMid = rect.width / 2;
        const yMid = rect.height / 2;

        const rotateY = (x - xMid) / xMid * 5; // Tilt range is -5 to 5 degrees
        const rotateX = -(y - yMid) / yMid * 2; // Tilt range is -2 to 2 degrees
        gsap.to(selector, {
            rotateY: rotateY,
            rotateX: rotateX,
            duration: 0.5,
            ease: "slow",
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(selector, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power1.out",
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    const card1 = document.getElementById('card1');
    card_tilt(card1);
    const card2 = document.getElementById('card2');
    card_tilt(card2);
});

// 6th page
const comments = gsap.utils.toArray('.comment');
comments.reverse();

// gsap.fromTo('.comment:nth-child(n)', {
gsap.fromTo(comments,{
    y:0,
   
},{
    y:-800,
    stagger: {
        each: 0.5,
        onStart: function() {
            gsap.set(this.targets(), { rotate: gsap.utils.random(-9, 9) });
        }
    },
    scrollTrigger:{
        pin: ".page6",
        scrub:0.8,

    },
})

