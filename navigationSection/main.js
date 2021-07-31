const list_items = document.querySelectorAll(".list-items");
const close = document.querySelector(".close");
const navbar = document.querySelector(".navbar");
const open = document.querySelector(".open");

const ToggleFunction = (list_items, cls) => {
    list_items.forEach((list) => {
        list.addEventListener("click", function (e) {
            // e.preventDefault();
            for (let i = 0; i < list_items.length; i++) {
                list_items[i].classList.remove(cls);
            }
            list.classList.add(cls);
        });
    });
};

ToggleFunction(list_items, "active");

const ShowHide = (main, opponent, toggle, hide) => {
    main.addEventListener("click", function () {
        navbar.classList.toggle(toggle);
        main.classList.add(hide);
        opponent.classList.remove(hide);
    });
};

ShowHide(close, open, "moveRight", "hide");
ShowHide(open, close, "moveRight", "hide");
