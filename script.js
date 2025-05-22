let registeredUsers = [];

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  // General email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Invalid email! Please enter a valid email address.");
    return;
  }

  // Extract domain from email
  const domain = email.split("@")[1].toLowerCase();

  // Reject if domain starts with 'gmail' but is NOT exactly 'gmail.com'
  if (domain.startsWith("gmail") && domain !== "gmail.com") {
    alert("Invalid email! please enter valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  registeredUsers.push({ username, email, password });
  alert("Signup successful! Please log in.");
  document.getElementById("signupForm").reset();
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const user = registeredUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    alert("Login successful!");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("calculator").classList.remove("hidden");
  } else {
    alert("Invalid credentials");
  }
});

// Check if input is a valid non-negative integer
function isValidInput(num) {
  return Number.isInteger(num) && num >= 0;
}

// Iterative factorial
function calculateIterative() {
  const num = parseInt(document.getElementById("numberInput").value);
  if (!isValidInput(num)) {
    return alert("Please enter a non-negative integer");
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  document.getElementById("output").innerText = `Iterative Result: ${result}`;
}

// Recursive factorial
function calculateRecursive() {
  const num = parseInt(document.getElementById("numberInput").value);
  if (!isValidInput(num)) {
    return alert("Please enter a non-negative integer");
  }
  function recursiveFactorial(n) {
    return n <= 1 ? 1 : n * recursiveFactorial(n - 1);
  }
  const result = recursiveFactorial(num);
  document.getElementById("output").innerText = `Recursive Result: ${result}`;
}

