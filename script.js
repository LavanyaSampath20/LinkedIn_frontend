document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "testuser" && password === "password123") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
});
