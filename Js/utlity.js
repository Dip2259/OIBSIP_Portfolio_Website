let menuli = document.getElementsByClassName('menuli');
Array.from(menuli).forEach((e)=>{
    if(e.classList.contains('active')){
        e.style.color = "#7464d1";
    }
})
let navmenu = document.getElementsByClassName("navmenu")[0];
let barImg = document.getElementById("barImg");
barImg.addEventListener("click",()=>{
    navmenu.classList.toggle("Active")
})