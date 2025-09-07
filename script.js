// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") 
    ? "☀️ Light Mode" 
    : "🌙 Dark Mode";
});

// Smooth Scroll
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Validation
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    msg.textContent = "❌ Please fill all fields!";
    msg.style.color = "red";
  } else if (!email.includes("@")) {
    msg.textContent = "❌ Invalid email!";
    msg.style.color = "red";
  } else {
    msg.textContent = "✅ Message Sent Successfully!";
    msg.style.color = "green";
    form.reset();
  }
});

// Typewriter Effect
const text = "Engineering Student | Web Developer | Learner";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;
