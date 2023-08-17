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













