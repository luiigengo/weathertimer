import * as dom from "./dom.js";
import { paused } from "./index.js";

export let interval;

export function toggleIconTimer() {
  dom.playButton.classList.toggle("hide");
  dom.pauseButton.classList.toggle("hide");
  dom.setButton.classList.toggle("hide");
  dom.stopButton.classList.toggle("hide");
}

export function timer(x, y) {
  let minCounter = x === undefined ? 24 : x;
  let secCounter = y === undefined ? 60 : y;

  interval = setInterval(() => {
    if (!paused) {
      if (secCounter > 0 && minCounter >= 0) {
        secCounter--;
        dom.seconds.textContent = String(secCounter).padStart(2, "0");
        dom.minutes.textContent = String(minCounter).padStart(2, "0");
      } else if (secCounter === 0 && minCounter >= 0) {
        secCounter = 59;
        minCounter--;
        dom.seconds.textContent = String(secCounter).padStart(2, "0");
        dom.minutes.textContent = String(minCounter).padStart(2, "0");
      } else if (minCounter >= 0) {
        secCounter = 59;
        secCounter--;
        dom.seconds.textContent = String(secCounter).padStart(2, "0");
      } else if (minCounter === -1) {
        secCounter = 60;
        minCounter = 4;
      }
    }
  }, 1000);
}

export function stop(x) {
  let minCounter = x === undefined ? 24 : x;
  let secCounter = 60;
  dom.seconds.textContent = "00";
  dom.minutes.textContent = "25";
  clearInterval(interval);

  interval = setInterval(() => {
    if (!paused) {
      if (secCounter > 0 && minCounter >= 0) {
        secCounter--;
        dom.seconds.textContent = String(secCounter).padStart(2, "0");
        dom.minutes.textContent = String(minCounter).padStart(2, "0");
      } else if (secCounter === 0 && minCounter >= 0) {
        secCounter = 59;
        minCounter--;
        dom.seconds.textContent = String(secCounter).padStart(2, "0");
        dom.minutes.textContent = String(minCounter).padStart(2, "0");
      } else if (minCounter === 0) {
        secCounter = 59;
        secCounter--;
        dom.seconds.textContent = String(secCounter).padStart(2, "0");
      } else if (minCounter === 0) {
        secCounter = 60;
        minCounter = 4;
      }
    }
  }, 1000);
}
