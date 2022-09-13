export const forestAudio = new Audio("./sounds/Floresta.wav");
forestAudio.loop = true;
forestAudio.volume = 0.1;

export const rainAudio = new Audio("./sounds/Chuva.wav");
rainAudio.loop = true;
rainAudio.volume = 0.1;

export const coffeeAudio = new Audio("./sounds/Cafeteria.wav");
coffeeAudio.loop = true;
coffeeAudio.volume = 0.1;

export const fireAudio = new Audio("./sounds/Lareira.wav");
fireAudio.loop = true;
fireAudio.volume = 0.1;

export let forestVolume = document.querySelector("#forest-volume");

export let rainVolume = document.querySelector("#rain-volume");

export let coffeeVolume = document.querySelector("#coffee-volume");

export let fireVolume = document.querySelector("#fire-volume");

export const moon = document.querySelector("#moon");
export const sun = document.querySelector("#sun");
