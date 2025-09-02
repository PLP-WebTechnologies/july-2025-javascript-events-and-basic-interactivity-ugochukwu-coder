// Custom Form Validation

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from refreshing page

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Custom rules
  if (username.length < 3) {
    message = "❌ Username must be at least 3 characters long.";
  } else if (!email.includes("@") || !email.includes(".")) {
    message = "❌ Please enter a valid email address.";
  } else if (password.length < 6) {
    message = "❌ Password must be at least 6 characters long.";
  } else {
    message = "✅ Registration successful!";
  }

  document.getElementById("formMessage").innerText = message;
});


// Interactive Feature 1: Click Counter

let count = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").innerText = count;
});


// Interactive Feature 2: Dark Mode Toggle

document.getElementById("toggleTheme").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
