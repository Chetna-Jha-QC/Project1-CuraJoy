// Theme toggle functionality
document.getElementById("themeToggle").addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        document.querySelector("header").classList.remove("light-theme");
        document.querySelector("header").classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        document.querySelector("header").classList.remove("dark-theme");
        document.querySelector("header").classList.add("light-theme");
    }
});

// Check login status on page load
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginSignupBtn = document.getElementById("loginSignupBtn");

    if (isLoggedIn === "true") {
        loginSignupBtn.textContent = "Logout";
    } else {
        loginSignupBtn.textContent = "Login | SignUp";
    }
});

// Login Modal
const loginBtn = document.getElementById("loginSignupBtn");
const modal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

loginBtn.addEventListener("click", function () {
    if (loginBtn.textContent === "Login | SignUp") {
        modal.style.display = "block";
    } else {
        // Logout
        localStorage.removeItem("isLoggedIn");
        loginBtn.textContent = "Login | SignUp";
        window.location.reload();
    }
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// // Login Form Submission
// document.getElementById("loginForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//     const email = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     if (email === "admin@empher.com" && password === "Admin@1234") {
//         alert("Logged in as Admin");
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("role", "admin");
//         document.getElementById("loginSignupBtn").textContent = "Logout";
//         window.location.href = "admin.html";
//     } else if (email === "user@empher.com" && password === "User@1234") {
//         alert("Logged in as User");
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("role", "user");
//         document.getElementById("loginSignupBtn").textContent = "Logout";
//         window.location.href = "index.html";
//     } else {
//         alert("Invalid Credentials");
//     }
// });

// // Show/Hide password functionality
// document.getElementById("showPassword").addEventListener("click", function () {
//     const passwordField = document.getElementById("password");
//     passwordField.type = passwordField.type === "password" ? "text" : "password";
// });




// Theme toggle functionality
document.getElementById("themeToggle").addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        document.querySelector("header").classList.remove("light-theme");
        document.querySelector("header").classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        document.querySelector("header").classList.remove("dark-theme");
        document.querySelector("header").classList.add("light-theme");
    }
});

// // Check login status on page load
// document.addEventListener("DOMContentLoaded", function () {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     const loginSignupBtn = document.getElementById("loginSignupBtn");

//     if (isLoggedIn === "true") {
//         loginSignupBtn.textContent = "Logout";
//     } else {
//         loginSignupBtn.textContent = "Login";
//     }
// });

// Login/Signup Modal
// const loginBtn = document.getElementById("loginSignupBtn");
// const modal = document.getElementById("loginModal");
// const closeModal = document.getElementById("closeModal");
const authForm = document.getElementById("authForm");
const toggleToSignup = document.getElementById("toggleToSignup");
const modalTitle = document.getElementById("modalTitle");
const submitBtn = document.getElementById("submitBtn");

loginBtn.addEventListener("click", function () {
    if (loginBtn.textContent === "Login") {
        modalTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        modal.style.display = "block";
    } else if (loginBtn.textContent === "Logout") {
        localStorage.removeItem("isLoggedIn");
        loginBtn.textContent = "Login";
        window.location.reload();
    }
});

// Handle modal close
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Switch between Login and SignUp
toggleToSignup.addEventListener("click", function () {
    modalTitle.textContent = "Sign Up";
    submitBtn.textContent = "Sign Up";
    toggleToSignup.textContent = "Already have an account? Login";
    document.getElementById("forgotPassword").style.display = "none";
});

// Handle login/signup form submission
authForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (modalTitle.textContent === "Login" && email === "user@empher.com" && password === "User@1234") {
        alert("Logged in as User");
        localStorage.setItem("isLoggedIn", "true");
        loginBtn.textContent = "Logout";
        window.location.href = "index.html";
    } else if (modalTitle.textContent === "Sign Up" && email && password) {
        alert("Account Created Successfully");
        modal.style.display = "none";
    } else {
        alert("Invalid Credentials or Missing Info");
    }
});

// Show/Hide password functionality
document.getElementById("showPassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
});





// Get elements
const cityInput = document.getElementById('cityInput');
const cityDropdown = document.getElementById('cityDropdown');
const cityItems = cityDropdown.getElementsByTagName('li');

// Show the dropdown when the user starts typing
cityInput.addEventListener('focus', function() {
    cityDropdown.style.display = 'block';  // Show dropdown
});

cityInput.addEventListener('input', function() {
    const filter = cityInput.value.toLowerCase();  // Get user input
    let hasMatches = false;

    for (let i = 0; i < cityItems.length; i++) {
        const cityText = cityItems[i].textContent.toLowerCase();
        if (cityText.indexOf(filter) > -1) {
            cityItems[i].style.display = '';  // Show matching cities
            hasMatches = true;
        } else {
            cityItems[i].style.display = 'none';  // Hide non-matching cities
        }
    }

    // Hide the dropdown if no matching cities
    if (!hasMatches) {
        cityDropdown.style.display = 'none';
    }
});

// Select city and set input value
for (let i = 0; i < cityItems.length; i++) {
    cityItems[i].addEventListener('click', function() {
        cityInput.value = cityItems[i].textContent;
        cityDropdown.style.display = 'none';  // Hide dropdown after selection
    });
}

// Hide the dropdown if clicked outside of it
document.addEventListener('click', function(event) {
    if (!cityInput.contains(event.target) && !cityDropdown.contains(event.target)) {
        cityDropdown.style.display = 'none';
    }
});