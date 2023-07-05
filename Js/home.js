let change = document.getElementsByClassName("change")[0];
const dataArray = ["data scientist","system admin","mobile developer","game developer", "Web Developer", "ML Enthsiasts"]
let i = 0;
setTimeout(()=>{
    change.classList.add("animClass2");
},4000)
setInterval(()=>{
    // change.style.transform = "translateY(-20px)";
    change.classList.remove("animClass2")
    change.classList.add("animClass1")
    if(i > 5){
        i = 0;
    }
    change.innerHTML = dataArray[i];
    i = i+1;
    setTimeout(() => {
        change.classList.remove("animClass1");
        change.classList.add("animClass2");
    }, 4000);
},5000)