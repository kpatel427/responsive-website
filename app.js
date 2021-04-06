// For About section
function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      duration:'200%',
      triggerElement: '.about-title',
      triggerHook:0

  })
  .setPin('.about-title')
  .addIndicators()
  .addTo(controller);
}

splitScroll();


// For Resume section
function splitScrollResume(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      duration:'200%',
      triggerElement: '.resume-title',
      triggerHook:0

  })
  .setPin('.resume-title')
  .addIndicators()
  .addTo(controller);
}

splitScrollResume();


// For Story section
function splitScrollStory(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      duration:'200%',
      triggerElement: '.story-title',
      triggerHook:0

  })
  .setPin('.story-title')
  .addIndicators()
  .addTo(controller);
}

splitScrollStory();


// Paper-plane animation
const flightPath = {
  curviness: 2,
  autoRotate: true,
  values: [
  {x: 100, y: -20},
  {x: 200, y: -70},
  {x: 300, y: 10},
  {x: 500, y: 100},
  {x: 750, y: -100},
  {x: 550, y: -50},
  {x: 700, y: 100},
  {x: 800, y: 0},
  {x: window.innerWidth, y: -10},
  ]
}

const tween = new TimelineLite();

tween.add(
  TweenLite.to('.paper-plane', 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);

// To animate on scroll
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 1000,
  triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);


// Scroll to Top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn")

var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop)
