const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalElement = document.getElementById("model");
let modalOverlay = document.getElementById("overlay");


openModal.addEventListener("click", function() {
    modalOverlay.style.display = "block";
});


closeModal.addEventListener("click", function() {
    modalOverlay.style.display = "none";
});