const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateConter = () => {
      // get count targert
      const target = +counter.getAttribute("data-targert");
      // get current counter value
      const c = +counter.innerText;

      // create an increment
      const increment = target / 100;

      //if counter is less than targert, add increment
      if (c < target) {
        //round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateConter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateConter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
