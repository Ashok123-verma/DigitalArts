// Check authentication status and handle routing
function checkAuthRedirect() {
    const authenticated = localStorage.getItem("authenticated");
    
    // Get the current page
    const currentPage = window.location.pathname.split("/").pop();
    
    // If not authenticated and trying to access protected pages (except login page)
    if (!authenticated && currentPage !== "login.html") {
        // Redirect to login.html
        window.location.href = "login.html";
    }

    // If authenticated and trying to access login page
    if (authenticated && currentPage === "login.html") {
        // Redirect to index.html
        window.location.href = "index.html";
    }
}

// Clear browser history to disable back navigation after login/logout
function clearHistory() {
    history.pushState(null, null, location.href); // Add a dummy entry to the history stack
    window.addEventListener("popstate", () => {
        history.pushState(null, null, location.href); // Prevent back navigation
    });
}

// Run the router check on page load
window.addEventListener("DOMContentLoaded", () => {
    checkAuthRedirect();
    clearHistory(); // Ensure history stack is manipulated
});
