let Nav = document.getElementById("res-nav");
let OpenIcon = document.getElementById("nav-toggler");
let CloseIcon = document.getElementById("nav-close");

OpenIcon.addEventListener("click", _=>{
    Nav.classList.add("nav-open");
})

CloseIcon.addEventListener("click", _=>{
    Nav.classList.remove("nav-open");
})