import Cleaner from "./Cleaner.js";

const renderFunction = (parentElement) => {
    Cleaner.clear(parentElement);
    parentElement.append("Menu");
};



const Menu = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default Menu;