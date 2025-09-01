// 3D Tilt Effect
document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `rotateX(${y * 15}deg) rotateY(${x * 15}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

// Contact Form (Interactive Response)
const form = document.getElementById("contactForm");
const response = document.querySelector(".response");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  response.textContent = "✅ Thanks for contacting me, I will get back to you soon!";
  form.reset();
});