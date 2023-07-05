let  btn = document.getElementsByClassName('btn');
Array.from(btn).forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        let x_pos = e.clientX - e.target.offsetLeft
        let y_pos = e.clientY - e.target.offsetTop
        let overlay = document.createElement("span")
        overlay.classList.add("overlay")
        overlay.style.top = `${y_pos}px`
        overlay.style.left = `${x_pos}px`
        elem.appendChild(overlay)
        setTimeout(() => {
            elem.removeChild(overlay)
        }, 500);
    })
})
let switchTab = document.getElementsByClassName('underline');
let switch_s = document.getElementById('switch-s');
let switch_e = document.getElementById('switch-e');
let switchTabarr = Array.from(switchTab);
switch_s.addEventListener('click',()=>{
    document.getElementsByClassName('skills')[0].style.display = "block";
    document.getElementsByClassName('edu')[0].style.display = "none";
    switchTabarr[1].classList.add('sktabClose');
    switchTabarr[1].classList.remove('sktabActive');
    switchTabarr[0].classList.remove('sktabClose');
    switchTabarr[0].classList.add('sktabActive');
})
switch_e.addEventListener('click',()=>{
    document.getElementsByClassName('skills')[0].style.display = "none";
    document.getElementsByClassName('edu')[0].style.display = "flex";
    switchTabarr[0].classList.add('sktabClose');
    switchTabarr[0].classList.remove('sktabActive');
    switchTabarr[1].classList.remove('sktabClose');
    switchTabarr[1].classList.add('sktabActive');
})