const scrollToTopBtn = document.querySelector("#scrollToTop");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const play = document.querySelector("#play");
const slides = document.querySelectorAll(".slide");

let scrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const slider = {
  slides,
  timerId: null,
  slideIndex: 1,
  shiftSlide(n) {
    this.slideIndex = this.slideIndex + n;
    this.showSlide();
  },
  showSlide() {
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }
    if (this.slideIndex <= 0) {
      this.slideIndex = this.slides.length;
    }
    for (let el of this.slides) {
      el.style.opacity = "0";
    }
    let previewIdx = this.slideIndex === this.slides.length ? 0 : this.slideIndex;
    this.slides[this.slideIndex - 1].style.opacity = "1";
    let previewImg = document.querySelectorAll(".slide-img")[previewIdx].getAttribute("src");
    document.querySelector(".slide-info").style.backgroundImage = `url(${previewImg})`;
  },
  start() {
    this.timerId = setInterval(() => this.shiftSlide(1), 5000);
  },

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  },
  play() {
    if (this.timerId) {
      clearInterval(this.timerId);
  }
    if (play.classList.contains("play")) {
      play.classList.toggle("play");
      this.start();
      play.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8.647" height="13.564" viewBox="0 0 8.647 13.564">
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_407" data-name="Rectangle 407" width="8.647" height="13.564" fill="none"/>
        </clipPath>
      </defs>
      <g id="Pause" clip-path="url(#clip-path)">
        <path id="Path_948" data-name="Path 948" d="M1.255,13.531h0A1.255,1.255,0,0,1,0,12.276V1.222a1.272,1.272,0,1,1,2.543,0V12.276a1.255,1.255,0,0,1-1.289,1.255" transform="translate(0 0.033)" />
        <path id="Path_949" data-name="Path 949" d="M19.355,13.531h0A1.255,1.255,0,0,1,18.1,12.276V1.222a1.272,1.272,0,1,1,2.543,0V12.276a1.255,1.255,0,0,1-1.289,1.255" transform="translate(-11.962 0.033)" />
      </g>
    </svg>`;
    } else {
      play.classList.toggle("play");
      this.stop();
      play.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 224.075 224.075" style="enable-background:new 0 0 224.075 224.075;" xml:space="preserve">
<g>
	<g>
		<path d="M216.2,99.23L20.5,1.63c-2.1-1.1-4.8-1.6-6.9-1.6v0C5.7,0.53,0,6.33,0,14.23v195.7c0,10.5,11,17.3,20.5,12.6l195.7-98.1
			C226.7,119.23,226.7,104.53,216.2,99.23z M27.8,187.33V36.73l150.6,75L27.8,187.33z"/>
	</g>
</svg>`;
    }
   
  },
};

slider.showSlide();
slider.play();

prev.addEventListener("click", () => slider.shiftSlide(-1));
next.addEventListener("click", () => slider.shiftSlide(1));
play.addEventListener("click", () => slider.play());

scrollToTopBtn.addEventListener("click", scrollToTop);
