// let toggleBtn = document.querySelector(".nabar__menu");
// let headerList = document.querySelector(".navbar__links");

// toggleBtn.addEventListener("click",()=>{
//     headerList.classList.toggle("header__list-show");
//   })

let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".navbar__menu");
let headerList = document.querySelector(".navbar__links");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});
    
toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("header__list-show");
})