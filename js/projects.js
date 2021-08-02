const project__card = document.querySelectorAll(".subhead");
const project__div = document.querySelectorAll(".project__div");

project__card.forEach((item) => {
    item.addEventListener("click", function () {
        for (let i = 0; i < project__div.length; i++) {
            project__div[i].classList.remove("block");
        }
        item.nextElementSibling.classList.add("block");
    });
});
