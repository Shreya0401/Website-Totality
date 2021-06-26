

const burger = document.querySelector(".burger")
const navbar = document.querySelector(".navbar")
const navlist = document.querySelector(".op")


burger.addEventListener('click',
    (func) => {
        navlist.classList.toggle('op');
        navbar.classList.toggle('height-navlist');

    }
)