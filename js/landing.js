// landing.js

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    if (heading && heading.textContent.includes("Who's Watching?")) {
      gsap.to("h1", { opacity: 1, duration: 1, y: -10 });
      gsap.to(".profiles", { opacity: 1, duration: 1, delay: 0.5, y: -10 });
    }
  });