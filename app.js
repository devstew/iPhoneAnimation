const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magix

const controller = new ScrollMagic.Controller();

//scenes
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0
}).setPin(intro)
  .addTo(controller);

//text animation

const textAnim = TweenMax.fromTo(text, 3, {opacity:1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
}).setTween(textAnim)
  .addTo(controller);

const textAnima = TweenMax.fromTo(end, 3, {opacity:0}, {opacity: 1});

let scene3 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: section,
  triggerHook: 9500
}).setTween(textAnima)
  .addTo(controller);



//video animation
let accelAmount = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on('update', e => {
  scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPosition - delay) * accelAmount;
  video.currentTime = delay;
// }, 33.33)
}, 33.33)