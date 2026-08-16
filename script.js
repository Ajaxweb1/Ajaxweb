const skills = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, {
  threshold: 0.5
});

skills.forEach((skill) => {
  observer.observe(skill);
}
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach((item) => {
  revealObserver.observe(item);
});               