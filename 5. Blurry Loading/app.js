const bg = document.querySelector('.bg')
const textLoading = document.querySelector('.text-loading')

let load = 0

const blurring=()=>{
    load++
    if(load > 99){
        clearInterval(interval)
    }
    textLoading.innerText=`${load}%`
    textLoading.style.opacity=`${scale(load, 0, 100, 1, 0)}`
    bg.style.filter=`blur(${scale(load, 0, 100, 30, 0) }px)`
}
const interval = setInterval(blurring, 30)

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}