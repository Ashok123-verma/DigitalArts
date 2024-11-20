const gallery = document.getElementById("gallery");

// URLs for images (you can add more URLs here)
const imageUrls = [
    "https://made.porn/is/I3/CQ/IuZirDhCQI3-Hc4777QcGIE.jpg",   //1
    "https://made.porn/is/TS/fj/KE1akrBfjTS-IwTzRDbAxgB.jpg",   //2
    "https://made.porn/is/hb/JW/JixZ35FJWhb-UtFNovHnfX9.jpg",   //3
    "https://made.porn/is/L0/zR/C7XEOQgzRL0-HSX4q7WFJ5L.jpg",   //4
    "https://made.porn/is/cv/jR/Ef8M7H3jRcv-M0XJOQ4wT9I.jpg",   //5
    "https://made.porn/is/st/NR/PXziC2DNRst-LUSGwNxBD5m.jpg",   //6
    "https://made.porn/is/FV/iW/FCztQmyiWFV-BPshcFiARN8.jpg",   //7
    "https://made.porn/is/Iv/Uh/NsLRHGQUhIv-MH6ZmQZktje.jpg",   //8
    "https://made.porn/is/L8/uL/NyUUhTluLL8-HhQBokVSYma.jpg",   //9
    "https://made.porn/is/9x/I8/FLYUDDsI89x-FVbcomXvCvf.jpg",   //10
    "https://made.porn/is/YA/gS/JfdyU54gSYA-VrhkCZpOMhZ.jpg",   //11
    "https://made.porn/is/dt/Et/FfAzsoaEtdt-KS7CQaSMCrT.jpg",   //12
    "https://made.porn/is/lp/f9/BRHMtewf9lp-HBsy5m5PHmJ.jpg",   //13
    "https://made.porn/is/cR/ul/L5noCjFulcR-LQeDnrnCVmN.jpg",   //14
    "https://made.porn/is/6b/Lv/C6UR0ZMLv6b-SLczCZL4g74.jpg",   //15
    "https://made.porn/is/yd/GQ/LPduqe5GQyd-HsQo7ZZtetc.jpg",   //16
    "https://made.porn/is/1M/jz/RXnn5TKjz1M-GJrFm5XiBbU.jpg",   //17
    "https://made.porn/is/7Q/wg/G6eHyPTwg7Q-DtJ53YMw8ie.jpg",   //18
    "https://made.porn/is/KA/wH/UCPD06GwHKA-IhGBiRiLIjz.jpg",   //19
    "https://made.porn/is/K3/4u/I6jXumI4uK3-DGKIUcvWA6T.jpg",   //20
    "https://made.porn/is/Wc/3A/HloncJr3AWc-E2WdeSa7Kxl.jpg",   //21
    "https://made.porn/is/UJ/lR/C49cdaklRUJ-KLWiVytQFNo.jpg",   //22
    "https://made.porn/is/xi/Ps/NM3JNgBPsxi-IJnTP7Ezkhf.jpg",   //23
    "https://made.porn/is/Yp/p4/PCPu8aSp4Yp-RUcfg20WmN8.jpg",   //24
    "https://made.porn/is/Di/P7/Onf0If9P7Di-R15ipmKDd0w.jpg",   //25
    "https://made.porn/is/N9/dU/SD4twIjdUN9-RT81s9RAcZG.jpg",   //26
    "https://made.porn/is/uA/Ub/CNxSbToUbuA-LraFYyeBtyf.jpg",   //27
    "https://made.porn/is/DX/RY/UfnZYj0RYDX-SD2BlnEOdxW.jpg",   //28
    "https://made.porn/is/w8/zR/OtsaHPNzRw8-Og0BXiBpf8A.jpg",   //29
    "https://made.porn/is/NE/Y2/SEuBATvY2NE-K7wCOdmCQCK.jpg",   //30
    "https://made.porn/is/ok/8P/RkGoecl8Pok-FBknOJB7k1Q.jpg",   //31
    "https://made.porn/is/Q2/qH/Q0dYll9qHQ2-S9dyrR0QHkl.jpg"    //32
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

// Generate 100 cards
createCards(31);
