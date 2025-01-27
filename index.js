// Loader
window.onload = () => { document.querySelector(".Load").close() }

// Context Menu
document.addEventListener('contextmenu', (e) => { e.preventDefault() });
document.addEventListener("dblclick", e => { e.preventDefault(); })
document.onkeydown = function (e) {
    if (event.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) return false;
    if (e.key == "Escape") return false;
}

// sideBar
document.querySelector(".condition").addEventListener("click", () => {
    document.querySelector(".sidebar").setAttribute("aria-opened", true)
})
document.querySelector(".sidebarclose").addEventListener("click", () => {
    document.querySelector(".sidebar").setAttribute("aria-opened", false)
})

// Follow Dialog
document.querySelectorAll(".Accounts").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector(".Follows").showModal()
    })
});

document.querySelector(".Followsclose").addEventListener("click", () => {
    document.querySelector(".Follows").close()
})

// Games
document.querySelectorAll(".Games").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector(".GamesModal").showModal()
    })
})

document.querySelector(".Gamesclose").addEventListener("click", () => {
    document.querySelector(".GamesModal").close()
})

// Responsive
function resize() {
    var width = innerWidth;

    if (width >= 500) {
        document.querySelector(".sidebar").setAttribute("aria-opened", false);
    }
}

resize()
window.addEventListener("resize", resize)