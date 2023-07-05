let imgLink = document.querySelectorAll('.imgLink');
let detail = document.querySelectorAll('.details');

window.addEventListener('scroll',()=>{
    let trigger = window.innerHeight / 5 * 4;
    imgLink.forEach((e)=>{
        let topval = e.getBoundingClientRect().top;
        if(topval < trigger){
            e.classList.add('show');
        }
        else{
            e.classList.remove('show');
        } 
    })
    detail.forEach((e)=>{
        let topval = e.getBoundingClientRect().top;
        if(topval < trigger){
            e.classList.add('show');
        }
        else{
            e.classList.remove('show');
        } 
    })
})