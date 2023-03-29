const hamburger = document.querySelector('.hamburger');
const mobile_menu= document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', function() 
    {
        hamburger.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });


const top = document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100)
    {
       top.classList.add("active") 
    }else
    {
        top.classList.remove("active");
    }
})


