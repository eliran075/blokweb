var openmenu = document.querySelector(".openmenu");
var closemenu = document.querySelector(".closemenu");
var menulinks = document.querySelector(".menu li");
var menu = document.querySelector(".menu")

openmenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    // checkt of het menu open staat, in het geval haalt ie het weg
    if (menu.classList.contains(".showMenu")) {
        menu.classList.remove(".showMenu");
        closemenu.style.display = "none";
        menu.style.display = "none";
    }
    // anders voegt hij de code toe om het menu te vertonen
    else {
        menu.classList.add(".showMenu");
        closemenu.style.display = "block";
        menu.style.display = "block";
    }
}