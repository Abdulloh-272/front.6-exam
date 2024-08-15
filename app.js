//
// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");

// const swiperEl = document.querySelector("swiper-container");
// swiperEl.addEventListener("autoplaytimeleft", (e) => {
//   const [swiper, time, progress] = e.detail;
//   progressCircle.style.setProperty("--progress", 1 - progress);
//   progressContent.textContent = `${Math.ceil(time / 1000)}s`;
// });

// const down = document.querySelector(".down");
// const bar = document.querySelector(".bar");
// down.addEventListener("click", (e) => {
//   e.preventDefault();
//   bar.classList.toggle("hidden");
// });

// function
const btn1 = document.querySelector(".btn1");
const bar = document.querySelector(".bar");

btn1.addEventListener("click", () => {
  video2.classList.toggle("hidden");
});

btn1.addEventListener("click", () => {
  const shar = document.querySelector(".shar");
  shar.classList.toggle("translate-x-[19px]");
  shar.classList.toggle("bg-white");
  btn1.classList.toggle("border-white");
  shar.classList.toggle("border-white");
  shar.classList.add("transition-all");
  video1.classList.toggle("hidden");
  video2.classList.toggle("block");
  bar.classList.toggle("text-white");
});
