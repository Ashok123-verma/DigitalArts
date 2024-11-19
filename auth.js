const users = [
    { username: "venkatesh", password: "password123" },
];

// Login functionality
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem("authenticated", true); // Mark user as authenticated
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage

        // Prevent going back to login page after login
        history.pushState(null, null, location.href); // Push current URL to history stack
    } else {
        alert("Invalid username or password.");
    }
}

// Logout functionality
function logout() {
    localStorage.removeItem("authenticated"); // Remove authentication
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page

    // Prevent going back to gallery after logout
    history.pushState(null, null, location.href); // Push current URL (login.html) to history stack
}

// Signup functionality (for demonstration purposes, users are not saved persistently)
function signup(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users.find((u) => u.username === username)) {
        alert("Username already exists!");
    } else {
        users.push({ username, password });
        alert("Signup successful! Please log in.");
        window.location.href = "login.html";
    }
}
