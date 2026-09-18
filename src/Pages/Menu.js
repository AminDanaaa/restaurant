import Cleaner from "./Cleaner.js";
const btnMenu = document.querySelector("#menu");



// Structure of page {Home} --Start
const main = document.createElement("div");
main.classList.add("menu-content");
// Structure of page {Home} --End



const renderFunction = (parentElement) => {
    Cleaner.clearActiveButton();
    btnMenu.classList.add("active-button");
    Cleaner.clear(parentElement);
    parentElement.append(main);
};


// Exported Object
const Menu = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default Menu;