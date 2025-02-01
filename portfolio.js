var typed= new Typed(".text",{
    strings:["Programming", "Web Developer", "Database Developer"],
    typeSpeed:100,
    backSpeed:100,
    BackDelay:1000,
    loop:true
});

const toTop=document.querySelector(".top");
window.addEventListener("scroll",()=>{
    if(window.pageYOFFset >100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})