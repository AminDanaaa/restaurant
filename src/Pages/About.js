import Cleaner from "./Cleaner.js";
const btnAbout = document.querySelector("#about");

const renderFunction = (parentElement) => {
    Cleaner.clearActiveButton();
    btnAbout.classList.add("active-button");
    Cleaner.clear(parentElement);
    parentElement.append("About");
};



// Structure of page {Home}:
const main = document.createElement("div");
// Structure of page {Home} --End



const About = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default About;