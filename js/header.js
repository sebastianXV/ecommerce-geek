document.querySelector(".nav_search_icon").addEventListener('click', ()=>{
    const login = document.querySelector(".nav_login");
    const search = document.querySelector(".nav_search");
    const icon = document.querySelector(".nav_search_icon")

    login.classList.toggle("desactive")
    search.classList.toggle("focus")
    icon.classList.toggle("desactive")
    search.focus();

})