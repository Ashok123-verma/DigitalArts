const gallery = document.getElementById("gallery");

// URLs for images (you can add more URLs here)
const imageUrls = [
    "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
    "https://via.placeholder.com/180x350?text=Image+2",
    "https://via.placeholder.com/180x350?text=Image+3",
    // Add as many image URLs as needed here
];

// Function to dynamically generate cards
function createCards(count) {
    for (let i = 1; i <= count; i++) {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = imageUrls[i % imageUrls.length]; // Rotate images if URLs are fewer than cards
        img.alt = `Image ${i}`;
        img.onclick = openLightbox;

        card.appendChild(img);
        gallery.appendChild(card);
    }
}

// Lightbox functionality
function openLightbox(event) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = event.target.src; // Set the clicked image as the source
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Function to handle logout
function logout() {
    // Remove the 'authenticated' flag from localStorage
    localStorage.removeItem('authenticated');

    // Prevent going back to the gallery page after logging out
    history.pushState(null, null, location.href); // Push login page URL into the history stack
    
    // Redirect to the login page
    window.location.href = "login.html";
}

// Prevent back navigation to login page after successful login
if (window.location.pathname === '/index.html') {
    history.pushState(null, null, location.href); // Push index page URL into history stack
}

// Generate 20 cards
createCards(20);
