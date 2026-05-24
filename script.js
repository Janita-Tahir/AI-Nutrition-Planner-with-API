// SCROLL TO LOGIN (HOME PAGE ONLY)
function scrollToLogin() {
  const section = document.getElementById("login");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// LOGIN REDIRECTION
function handleLogin(e) {
  e.preventDefault();
  alert("Login Successful! Opening your Meal Planner...");
  window.location.href = "nutrition.html"; // Links to the meal tracker
}

// REGISTER REDIRECTION
function handleRegister(e) {
  e.preventDefault();
  alert("Registration Successful! Please login to continue.");
  window.location.href = "index.html#login"; // Links back to login section
}

// MEAL MANAGEMENT
function addMeal(e) {
  e.preventDefault();
  const form = e.target;
  const table = document.querySelector("#mealTable tbody");
  if (!table) return;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${form[0].value}</td>
    <td>${form[1].value}</td>
    <td>${form[2].value}</td>
    <td>${form[3].value}</td>
    <td>${form[4].value}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;
  table.appendChild(row);
  form.reset();
}

function deleteRow(btn) {
  btn.closest("tr").remove();
}

// USER STATUS TOGGLE (ADMIN)
function toggleUser(btn) {
  const status = btn.closest("tr").querySelector(".badge");
  if (status.classList.contains("active")) {
    status.classList.replace("active", "inactive");
    status.textContent = "Inactive";
    btn.textContent = "Activate";
  } else {
    status.classList.replace("inactive", "active");
    status.textContent = "Active";
    btn.textContent = "Deactivate";
  }
}
// FR-A3: AI OUTPUT VALIDATION
function validateAI(btn, action) {
  const row = btn.closest("tr");
  const statusBadge = row.querySelector(".badge");
  const actionsCell = row.querySelector("td:last-child");

  if (action === 'verify') {
    statusBadge.className = "badge verified";
    statusBadge.textContent = "Verified";
    actionsCell.innerHTML = `<span style="color: green; font-weight: bold;">✔ Validated</span>`;
    alert("AI Output has been marked as safe and accurate.");
  } 
  else if (action === 'flag') {
    statusBadge.className = "badge flagged";
    statusBadge.textContent = "Flagged";
    actionsCell.innerHTML = `<button onclick="location.reload()">Re-evaluate</button>`;
    alert("AI Output flagged for manual review and correction.");
  }
}

// SCROLL REVEAL
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  function revealOnScroll() {
    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
function scrollToLogin() {
  const section = document.getElementById("login");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function handleLogin(e) {
  e.preventDefault();
  alert("Login Successful!");
  window.location.href = "recommendations.html"; 
}

function handleRegister(e) {
  e.preventDefault();
  alert("Registered!");
  window.location.href = "index.html#login";
}