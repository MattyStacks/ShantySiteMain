document.addEventListener("DOMContentLoaded", function() {
    var navbarDiv = document.querySelector("#navbar");

    fetch('../pages/navbar.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            navbarDiv.innerHTML = data;
        });
});