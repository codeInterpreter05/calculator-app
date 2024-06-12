let modeIcon = document.getElementsByClassName("mode")[0];
let body = document.body;

modeIcon.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    modeIcon.children[0].classList.toggle("fa-moon");
    modeIcon.children[0].classList.toggle("fa-sun");
    console.log(modeIcon.children)
})

