
// Matrix animation
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let matrix = "01".split("");
let font_size = 14;
let columns = canvas.width / font_size;
let drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px arial";
  for (let i = 0; i < drops.length; i++) {
    let text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 35);

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

// Contact form (simulated)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! (Set up EmailJS or a backend to go live.)");
});
