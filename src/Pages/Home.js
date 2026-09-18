import Cleaner from "./Cleaner.js";
const btnHome = document.querySelector("#home");



// Structure of page {Home} --Start
const main = document.createElement("div");
// Structure of page {Home} --End



const renderFunction = (parentElement) => {
    Cleaner.clearActiveButton();
    btnHome.classList.add("active-button");
    Cleaner.clear(parentElement);
    parentElement.append(main);
};



const Home = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default Home;