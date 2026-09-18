import Cleaner from "./Cleaner.js";
const btnMenu = document.querySelector("#menu");

const renderFunction = (parentElement) => {
    Cleaner.clearActiveButton();
    btnMenu.classList.add("active-button");
    Cleaner.clear(parentElement);
    parentElement.append("Menu");
};



// Structure of page {Home}:
const main = document.createElement("div");
// Structure of page {Home} --End



const Menu = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default Menu;