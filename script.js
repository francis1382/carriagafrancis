// Dark Mode Toggle Function
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Back to Home Button functionality
const backToHomeBtn = document.getElementById("backToHomeBtn");

// Show the button when user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToHomeBtn.style.display = "block";  // Show button when scrolled down
  } else {
    backToHomeBtn.style.display = "none";   // Hide button at the top
  }
};

// Smooth scroll to top when the button is clicked
backToHomeBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});







