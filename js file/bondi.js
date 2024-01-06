let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav-ele")
menu.addEventListener("click",()=>{
    document.querySelector(".menu .fa-bars").classList.toggle("opened")
    if(document.querySelector(".menu .fa-bars").classList.contains("opened")) {
        nav.style.display="flex";
    } else {
        nav.style.display="none";
    }
})
