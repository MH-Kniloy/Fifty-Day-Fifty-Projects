const boxes = document.querySelectorAll('.box')
const boxesArr=Array.from(boxes)


window.addEventListener('scroll', ()=>{

       const triggerBottom=window.innerHeight/5*4;
       

    boxesArr.map((box)=>{
        
        const boxTop = box.getBoundingClientRect().top
        triggerBottom > boxTop ? box.classList.add('show') : box.classList.remove('show')
        
    })
})
