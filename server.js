const express = require("express");
const path = require("path");
const app = express();

// Handle routing
app.get("/", (req, res, next) => {
    const loginFilePath = path.join(__dirname, "login.html"); // Updated path without public folder
    console.log("Serving login page from: ", loginFilePath); // Log the path
    res.sendFile(loginFilePath, (err) => {
        if (err) {
            console.log(err);
            next(err); // Handle the error if the file isn't found
        }
    });
});

app.get("/index", (req, res, next) => {
    const indexFilePath = path.join(__dirname, "index.html"); // Updated path without public folder
    console.log("Serving index page from: ", indexFilePath); // Log the path
    res.sendFile(indexFilePath, (err) => {
        if (err) {
            console.log(err);
            next(err); // Handle the error if the file isn't found
        }
    });
});

app.get("/signup", (req, res, next) => {
    const signupFilePath = path.join(__dirname, "signup.html"); // Updated path without public folder
    console.log("Serving signup page from: ", signupFilePath); // Log the path
    res.sendFile(signupFilePath, (err) => {
        if (err) {
            console.log(err);
            next(err); // Handle the error if the file isn't found
        }
    });
});

// Serve static files (CSS, JS, etc.) from the root directory
app.use(express.static(__dirname)); // Serving static files directly from the root

// Catch-all for 404 errors
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
