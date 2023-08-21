// Función para manejar el clic en el icono de búsqueda
function handleSearchIconClick() {
    const login = document.querySelector(".nav_login");
    const search = document.querySelector(".nav_search");
    const icon = document.querySelector(".nav_search_icon");

    //login.classList.toggle("desactive");
    search.classList.toggle("focus");
    icon.classList.toggle("desactive");
    search.focus();
}

// Función para manejar el evento blur en el elemento de búsqueda
function handleSearchBlur() {
    const login = document.querySelector(".nav_login");
    const search = document.querySelector(".nav_search");
    const icon = document.querySelector(".nav_search_icon");

    //login.classList.toggle("desactive");
    search.classList.toggle("focus");
    icon.classList.toggle("desactive");
}

// Agregar el evento click en el icono de búsqueda
document.querySelector(".nav_search_icon").addEventListener("click", handleSearchIconClick);

// Agregar el evento blur en el elemento de búsqueda
document.querySelector(".nav_search").addEventListener("blur", handleSearchBlur);

// Verificar el media query y ajustar los eventos
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
        document.querySelector(".nav_search_icon").addEventListener("click", handleSearchIconClick);
        document.querySelector(".nav_search").addEventListener("blur", handleSearchBlur);
    } else {
        document.querySelector(".nav_search_icon").removeEventListener("click", handleSearchIconClick);
        document.querySelector(".nav_search").removeEventListener("blur", handleSearchBlur);
    }
}

// Ejecutar la función al cargar la página y cada vez que cambie el media query
handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);
