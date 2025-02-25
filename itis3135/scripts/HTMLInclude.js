document.addEventListener("DOMContentLoaded", function() {
    function includeHTML() {
        let elements = document.querySelectorAll("[data-include]");
        elements.forEach(el => {
            let file = el.getAttribute("data-include");
            fetch(file)
                .then(response => {
                    if (response.ok) return response.text();
                    throw new Error('Network response was not ok');
                })
                .then(data => {
                    el.innerHTML = data;
                })
                .catch(error => console.error("Error loading included file:", error));
        });
    }
    includeHTML();
});
