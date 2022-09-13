import * as dom from "./dom.js";
import * as weather from "./weather.js";
import { toggleIconTimer, timer, stop, interval } from "./utils.js";

export let paused = true;

let triggerSetButton = false;
let triggerDefaultButton = false;

dom.playButton.addEventListener(
  "click",
  () => {
    if (!triggerSetButton) {
      triggerDefaultButton = true;
      timer();
      paused = !paused;
    }
  },
  { once: true }
);

dom.playButton.addEventListener("click", () => {
  paused = false;
  toggleIconTimer();
});

dom.pauseButton.addEventListener("click", () => {
  toggleIconTimer();
  paused = true;

  weather.forestAudio.pause();
  weather.rainAudio.pause();
  weather.coffeeAudio.pause();
  weather.fireAudio.pause();
});

dom.setButton.addEventListener("click", () => {
  if (!triggerDefaultButton) {
    if (!triggerSetButton) {
      triggerSetButton = true;
      let question = Number(prompt("Amount of Minutes") - 1);
      dom.minutes.textContent = question + 1;
      timer(question);
      toggleIconTimer();

      paused = false;
    } else {
      let question = Number(prompt("Amount of Minutes") - 1);
      clearInterval(interval);
      timer(question);
    }
  }
});

dom.stopButton.addEventListener("click", () => {
  toggleIconTimer();
  stop();
  paused = true;

  weather.forestAudio.currentTime = 0;
  weather.forestAudio.pause();
  weather.rainAudio.currentTime = 0;
  weather.rainAudio.pause();
  weather.coffeeAudio.currentTime = 0;
  weather.coffeeAudio.pause();
  weather.fireAudio.currentTime = 0;
  weather.fireAudio.pause();
  dom.forest.classList.remove("bg-forest");
  dom.rain.classList.remove("bg-rain");
  dom.coffee.classList.remove("bg-coffee");
  dom.fire.classList.remove("bg-fire");
});

dom.plus.addEventListener("click", () => {
  let cMin = Number(dom.minutes.textContent);
  let cSec = Number(dom.seconds.textContent);
  let newMin = cMin + 5;
  clearInterval(interval);
  timer(newMin, cSec);
});

dom.minus.addEventListener("click", () => {
  let cMin = Number(dom.minutes.textContent);
  let cSec = Number(dom.seconds.textContent);
  let newMin = cMin - 5;
  if (cMin > 5) {
    clearInterval(interval);
    timer(newMin, cSec);
  } else {
    clearInterval(interval);
    timer(0, cSec);
  }
});

dom.forest.addEventListener("click", () => {
  weather.forestAudio.play();
  weather.rainAudio.pause();
  weather.coffeeAudio.pause();
  weather.fireAudio.pause();
  dom.forest.classList.add("bg-forest");
  dom.rain.classList.remove("bg-rain");
  dom.coffee.classList.remove("bg-coffee");
  dom.fire.classList.remove("bg-fire");
});

dom.rain.addEventListener("click", () => {
  weather.rainAudio.play();
  weather.forestAudio.pause();
  weather.coffeeAudio.pause();
  weather.fireAudio.pause();
  dom.rain.classList.add("bg-rain");
  dom.forest.classList.remove("bg-forest");
  dom.coffee.classList.remove("bg-coffee");
  dom.fire.classList.remove("bg-fire");
});

dom.coffee.addEventListener("click", () => {
  weather.coffeeAudio.play();
  weather.rainAudio.pause();
  weather.forestAudio.pause();
  weather.fireAudio.pause();
  dom.coffee.classList.add("bg-coffee");
  dom.forest.classList.remove("bg-forest");
  dom.rain.classList.remove("bg-rain");
  dom.fire.classList.remove("bg-fire");
});

dom.fire.addEventListener("click", () => {
  weather.fireAudio.play();
  weather.coffeeAudio.pause();
  weather.rainAudio.pause();
  weather.forestAudio.pause();
  dom.fire.classList.add("bg-fire");
  dom.forest.classList.remove("bg-forest");
  dom.coffee.classList.remove("bg-coffee");
  dom.rain.classList.remove("bg-rain");
});

weather.forestVolume.addEventListener("change", (e) => {
  weather.forestAudio.volume = e.target.value;
});

weather.rainVolume.addEventListener("change", (e) => {
  weather.rainAudio.volume = e.target.value;
});

weather.coffeeVolume.addEventListener("change", (e) => {
  weather.coffeeAudio.volume = e.target.value;
});

weather.fireVolume.addEventListener("change", (e) => {
  weather.fireAudio.volume = e.target.value;
});

weather.sun.addEventListener("click", () => {
  function toggleLumi() {
    dom.r.style.setProperty("--lumi-zero", "100%");
    dom.r.style.setProperty("--lumi-cem", "0%");
    weather.moon.classList.remove("hide");
    weather.sun.classList.add("hide");
  }
  toggleLumi();
});

weather.moon.addEventListener("click", () => {
  function toggleLumi() {
    dom.r.style.setProperty("--lumi-zero", "0%");
    dom.r.style.setProperty("--lumi-cem", "100%");
    weather.moon.classList.add("hide");
    weather.sun.classList.remove("hide");
  }
  toggleLumi();
});
