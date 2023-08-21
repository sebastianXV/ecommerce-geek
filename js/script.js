//Footer
document.querySelector("[data-form-footer]").addEventListener('submit', function (e) {
    e.preventDefault();

    const form = document.querySelector("[data-form-footer]")
    const span = document.getElementById("span")

    span.classList.toggle("active")
    form.reset();

});

//Tema

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector("#dark");
    const body = document.body;

    const storedDarkMode = localStorage.getItem('darkMode');

    if (storedDarkMode === 'true') {
        body.classList.add('dark');
    }

    btn.addEventListener("click", function () {
        body.classList.toggle("dark");

        const isDarkMode = body.classList.contains('dark');
        localStorage.setItem('darkMode', isDarkMode);


    });
});

//Tomar el valor de lo que el usuario digite
const searchInput = document.querySelector(".nav_search");

searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    applyFilter(searchTerm);
});


//Recibe el valor y lo compara en cada card
const applyFilter = (term) => {
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        const productName = card.querySelector(".card_tittle").textContent.toLowerCase();

        if (productName.includes(term.toLowerCase())) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
};





















