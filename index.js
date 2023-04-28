const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})

const dashboard = document.querySelector('.dashboard').addEventListener('click', dropdown)
const unHiddeList = document.querySelector('.list')
const icon = document.querySelector('.icon')

function dropdown() {
  unHiddeList.classList.toggle('unhidde')
icon.classList.toggle('rotate')
}