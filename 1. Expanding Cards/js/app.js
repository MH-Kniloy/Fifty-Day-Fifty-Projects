// ========================== Map Method ===============================


let panel = document.querySelectorAll(".panel")
let panelArr = Array.from(panel)

panelArr.map((item)=>{
    item.addEventListener("click", function(){
        panelArr.map((panel)=>{
            panel.classList.remove("active")
        })
        item.classList.add("active")
    })
})


// ===================== for each method =============================

// let panels = document.querySelectorAll(".panel")

// panels.forEach((item)=>{
//     item.addEventListener("click",function(){
//         panels.forEach((panel)=>{
//             panel.classList.remove("active")
//         })
//         item.classList.add("active")
//     })
// })