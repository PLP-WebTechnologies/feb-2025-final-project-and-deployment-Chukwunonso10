// Image Slider
const images = ["hero.jpg", "nony.jpeg", "slide3.jpg", "slide"];
let index = 0;
const sliderImage = document.getElementById("slider-image");

if (sliderImage) {
  setInterval(() => {
    index = (index + 1) % images.length;
    sliderImage.src = "images/" + images[index];
  }, 3000);
}

// Form Validation
const form = document.getElementById("contact-form");
const feedback = document.getElementById("feedback");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "All fields are required!";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Thank you! Your message has been sent.";
      feedback.style.color = "green";
      form.reset();
    }
  });
}
