
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}


function openModal(img) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}


function searchPhotos() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let images = document.querySelectorAll(".portfolio-grid img");

    images.forEach(img => {
        img.style.display = img.alt.toLowerCase().includes(input) ? "block" : "none";
    });
}