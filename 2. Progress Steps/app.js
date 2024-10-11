let next = document.getElementById("next");
let prev = document.getElementById("prev");
let progress = document.getElementById("progress");
let circles = document.querySelectorAll(".circle");
let circlesArr = Array.from(circles);

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  update()
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update()
});

const update = () => {
      if (currentActive > circlesArr.length) {
        currentActive = circlesArr.length;
      }
      circlesArr.map((circle, idx) => {
        if (idx < currentActive) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });
      let actives = document.querySelectorAll(".active");
      progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

        if(currentActive === 1){
            prev.disabled = true
        }else if(currentActive === circlesArr.length){
            next.disabled = true
        }
        else{
            prev.disabled = false
            next.disabled = false
        }
}