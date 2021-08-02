const project__card = document.querySelectorAll(".subhead");
const project__div = document.querySelectorAll(".project__div");
const all__projects = document.querySelectorAll(".all__projects");

project__card.forEach((item) => {
    item.addEventListener("click", function () {
        for (let i = 0; i < project__div.length; i++) {
            project__div[i].classList.remove("block");
            all__projects[i].classList.remove("allow");
        }
        item.nextElementSibling.classList.add("block");
        item.parentElement.classList.add("allow");
    });
});
