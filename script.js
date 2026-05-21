// Accordion functionality - open and close sections when clicked
document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = btn.classList.contains("active");

        // Close all accordions first
        document.querySelectorAll(".accordion-btn").forEach(b => {
            b.classList.remove("active");
            b.nextElementSibling.style.display = "none";
        });

        // If it was closed, open it
        if (!isOpen) {
            btn.classList.add("active");
            content.style.display = "block";
        }
    });
});