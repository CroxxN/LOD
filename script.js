let el = document.querySelector(".text");
console.log("Working");
let navtext = document.querySelector(".navtext");
let thing = "red";

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options)
function callback  (entries, _observe) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && navtext.innerText != "Macbook") {
  navtext.innerText = "Macbook";
    thing = "red"
    console.log("Intersecting");
    }
  })
}
observer.observe(el);

let mode = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(mode);
if (!mode) {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
} else {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
let darkmode = document.querySelector(".button");
darkmode.addEventListener("click", () => {
  if (!mode) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    mode = true;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    mode = false;
  }
})


let scrolling = document.getElementById("typingText");
let href = document.getElementById("hrefscroll");

href.addEventListener("click", () => {
  scrolling.scrollIntoView({behavior: 'smooth'});
}
)

