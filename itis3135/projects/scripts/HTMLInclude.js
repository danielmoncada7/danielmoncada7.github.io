document.addEventListener("DOMContentLoaded", function() {
    function loadComponent(selector, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
});
