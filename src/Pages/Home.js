import Cleaner from "./Cleaner.js";
const btnHome = document.querySelector("#home");

const renderFunction = (parentElement) => {
    Cleaner.clearActiveButton();
    btnHome.classList.add("active-button");
    Cleaner.clear(parentElement);
    parentElement.append("Home");
};



// Structure of page {Home}:
const main = document.createElement("div");
// Structure of page {Home} --End



const Home = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default Home;