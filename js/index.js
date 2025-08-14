

let procom2 = document.querySelectorAll(".pro_com2"), Allprocom2 = Array.from(procom2),
proitem2 = document.querySelectorAll(".pro_com2_item"), Allproitem2 = Array.from(proitem2);
document.getElementById("pro_nav_art").addEventListener("click", () => {
    for (let index = 0; index < Allprocom2.length; index++) {
        if(index == 1){
            Allprocom2[1].classList.add("active");
        }else{
            Allprocom2[index].classList.remove("active");
        }
        
    }
    // for (let index = 0; index < Allproitem2.length; index++) {
    //     if(index > 0){
    //         Allproitem2[index].classList.add("animate__animated", "animate__bounceInRight");
    //     }
         

    // }
});
document.getElementById("pro_nav_all").addEventListener("click", () => {
    
   
    for (let index = 0; index < Allprocom2.length; index++) {
        if(index == 0){
            Allprocom2[0].classList.add("active");
        }else{
            Allprocom2[index].classList.remove("active");
        }
        
    }
});
document.getElementById("pro_nav_flyers").addEventListener("click", () => {
    
   
    for (let index = 0; index < Allprocom2.length; index++) {
        if(index == 2){
            Allprocom2[2].classList.add("active");
        }else{
            Allprocom2[index].classList.remove("active");
        }
        
    }
});
document.getElementById("pro_nav_logo").addEventListener("click", () => {
    
   
    for (let index = 0; index < Allprocom2.length; index++) {
        if(index == 3){
            Allprocom2[3].classList.add("active");
        }else{
            Allprocom2[index].classList.remove("active");
        }
        
    }
});
document.getElementById("pro_nav_cart").addEventListener("click", () => {
    
   
    for (let index = 0; index < Allprocom2.length; index++) {
        if(index == 4){
            Allprocom2[4].classList.add("active");
        }else{
            Allprocom2[index].classList.remove("active");
        }
        
    }
});
const mycarousel = document.getElementById("myCarousel");
const carousel = new bootstrap.Carousel(mycarousel, {
    interval: 5000,
    ride: 'carousel',
    pause: false,
})
document.getElementById("next-c").addEventListener("click", () => {
    carousel.next();
})
document.getElementById("prev-c").addEventListener("click", () => {
    carousel.prev();
})

let menub = document.getElementById("menu-b");
let menu = document.getElementById("menu");
let hm = document.getElementById("hidden-nav");

menub.onclick = function (){
    if(hm.classList.contains("dropdown")){
        hm.classList.remove("dropdown");  
        hm.classList.add("dropdownc");  
    }else if(hm.classList.contains("dropdownc")){
        hm.classList.remove("dropdownc"); 
        hm.classList.add("dropdown");
    }else{
        hm.classList.add("dropdown");
    }
}
const header = document.querySelector("header");
let offhead = header.offsetHeight;
let head = document.getElementById("head");
window.addEventListener("scroll", (e) => {
    if(window.scrollY > offhead - 2){
        head.classList.add("h-change");
        // cname.classList.add("h-bchange1");
        // navul.classList.add("h-bchange2");
        // headcon.classList.add("h-pchange3");

    }
    if(window.scrollY < offhead - 2){
        head.classList.remove("h-change")
        // cname.classList.remove("h-bchange1");
        // navul.classList.remove("h-bchange2");
        // headcon.classList.remove("h-pchange3");
    }
    if(hm.classList.contains("dropdown")){
        hm.classList.remove("dropdown");  
        hm.classList.add("dropdownc");  
    }
})
// let isScrolling = false;
// let lastwheel = 0;
// const COOLDOWN = 600;
// mycarousel.addEventListener("wheel", function (e){
//     e.preventDefault();
//     let oe = e.originalEvent;
//     // if (isScrolling) return;
//     const now = Date.now();
//     if(now - lastwheel < COOLDOWN) return;

//     const delta = Math.abs(oe.deltaX) > Math.abs(oe.deltaY) ? oe.deltaX : oe.deltaY;

//     if(delta > 0){
//         carousel.next();
//     }else if(delta < 0){
//         carousel.prev();
//     }
//     // isScrolling = true;
//     // setTimeout(() => {
//     //     isScrolling = false;
//     // }, 800);
//     lastwheel = now;
// }, { passive: false });
console.log("jjjjj");
