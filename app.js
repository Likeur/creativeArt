const btnNav = document.querySelector('#btn-nav')
const barUn = document.querySelector('#barun')
const barDeux = document.querySelector('#bardeux')
const navLinks = document.querySelector('#nav-links')

btnNav.addEventListener('click', ()=>{
    btnNav.classList.toggle('rotate-180')
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('mt-2')
    barUn.classList.toggle('absolute')
    barDeux.classList.toggle('-rotate-45')
    navLinks.classList.toggle('-translate-x-[100rem]')
})

const darkBtn = document.querySelector('#dark-btn')
const toggleDark = document.querySelector('#toggle-dark')
const moon = ''

// darkBtn.addEventListener('click', ()=>{
//     document.documentElement.classList.toggle('dark')
//     if (document.documentElement.className == 'dark'){
//         toggleDark.className = 'bx bx-sun'
//     } else{
//         toggleDark.className = 'bx bx-moon'
//     }
// })

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.text-un',
        start: '85% 50%',
        end: 'bottom 10%',
        scrub: true,
        
    }
})
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.text-deux',
        start: 'top 50%',
        end: 'bottom 10%',
        scrub: true,
        
    }
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.text-trois',
        start: 'top center',
        end: 'bottom 30%',
        scrub: true,
    
    }
})
let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: '.text-quatre',
        start: 'top center',
        end: 'bottom 30%',
        scrub: true,
        
    }
})
let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: '.sec-deux',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: ".pin-sec",
      
    }
})
let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: '.art-image',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      
    }
})
let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: '.text-cinq',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        
    }
})

tl.to('.text-un', {
    x:700,
    duration: 9,
    opacity:0

})

tl2.to('.text-deux',{
    x:800,
    duration: 5,
    opacity:0
})
tl3.to('.text-trois',{
    opacity:1
})
tl5.to('.text-quatre',{
    opacity: 1
})
tl7.to('.text-cinq', {
    opacity: 1
})
tl6.to('.art-image',{
    y:-580,
    duration: 3
})

let tl8 = gsap.timeline({
    scrollTrigger:{
        trigger: '.bubble',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      
        
    },
})
let tl9 = gsap.timeline({
    scrollTrigger:{
        trigger: '.hello',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,

        
    },
})
let tl11 = gsap.timeline({
    scrollTrigger:{
        trigger: '.hellodeux',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
         
    },
})
let tl10 = gsap.timeline({
    scrollTrigger:{
        trigger: '.change',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
   
        
    },
})

tl10.to('.change', {
    backgroundColor : ""
})

tl8.to('.bubble', {
    scale : 4,
    opacity : 0
    
})

tl9.fromTo('.hello', {
    scale: 0.5,
    opacity: 0,
    x:-800
}, {
    scale: 5,
    opacity:1,
    x:100
})
tl11.fromTo('.hellodeux', {
    scale: 0.5,
    opacity: 0,
    x:800
}, {
    scale: 5,
    opacity:1,
    x:100,
    color : "red"
})

