const scrollToTopBtn = document.querySelector("#scrollToTop");
// const slides = document.querySelector(".slides");
// const next = document.querySelector("#prev");
// const prev = document.querySelector("#next");
// const play = document.querySelector("#play");


let scrollToTop = ()=>{
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}



scrollToTopBtn.addEventListener("click", scrollToTop)