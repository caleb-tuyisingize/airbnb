const topMenus = document.getElementById("top-menus");
const topitems = document.getElementById("top-items");
const searchBar = document.getElementById("search-bar");

window.addEventListener("scroll", () => {  
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        searchBar.classList.add("hidden");
        topMenus.classList.remove("hidden");
        topMenus.classList.add("flex");
        topitems.classList.add("hidden");
    } else {
        topMenus.classList.add("hidden");
        searchBar.classList.remove("hidden");
        topitems.classList.remove("hidden");
    }
})